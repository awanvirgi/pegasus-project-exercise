<template>
    <base-card class="double-column">
        <div class="left">
            <base-label-row :label="'Train'">{{ train.name }}</base-label-row>
            <base-label-row :label="'Class'">{{ trainClass }}</base-label-row>
            <base-label-row :label="'Passengers'">{{ currentPassenger }} /{{ train.maxPassengers }}</base-label-row>
            <base-label-row :label="'Cost'">{{ currencyId }}</base-label-row>
        </div>
        <div class="right">
            <base-label-row :label="'Dept.Station'">{{ deptStation }}</base-label-row>
            <base-label-row :label="'Dept. Time'">{{ deptTime }}</base-label-row>
            <base-label-row :label="'Arr. Station'">{{ arrStation }}</base-label-row>
            <base-label-row :label="'Arr. Time'">{{ arrTime }}</base-label-row>
            <base-button-container>
                <base-button @click="goTo(`/schedules/form/${id}`)" type="button">
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button @click="goTo(`/schedules/remove/${id}`)" type="button">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button :isLink="true" :link="`/schedules/${id}/passengers`">
                    <i class="fas fa-users"></i>
                    <span>Passengers</span>
                </base-button>
            </base-button-container>
        </div>
    </base-card>
</template>

<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import useTrainStore from '../../store/train/train-store';
import useTrainClassStore from '../../store/trainClass/trainClass-store';
import useSchedulePassengerStore from '../../store/schedulePassenger/schedulePassenger-store';
import useTrainStationStore from '../../store/trainStation/trainStation-store';

const props = defineProps(['id', 'trainCode', 'trainClassCode',
    'departureStationId', 'arrivalStationId', 'departureTime', 'duration', 'cost']);

const trainStore = useTrainStore();
const trainClassStore = useTrainClassStore();
const schedulePassengerStore = useSchedulePassengerStore();
const trainStationStore = useTrainStationStore();

const router = useRouter();

const trainClass = ref('');
const train = ref({});
const currentPassenger = ref(0);
const deptStation = ref('');
const arrStation = ref('');

const goTo = (link) => {
    router.push(link);
};

const formatDatetime = (date, durationInMinutes) => {
    let newDate = new Date(date);
    if (durationInMinutes) {
        newDate.setMinutes(newDate.getMinutes() + durationInMinutes);
    }
    const formater = Intl.DateTimeFormat("id-ID", {
        dateStyle: 'full',
        timeStyle: 'short'
    });
    return formater.format(newDate).replace('pukul', '-').replace('.', ':');
};

const formatCurrency = (localeCode, currencyFormat, price) => {
    return Intl.NumberFormat(localeCode, { style: 'currency', currency: currencyFormat }).format(price);
};


const arrTime = computed(() => formatDatetime(props.departureTime, props.duration));
const deptTime = computed(() => formatDatetime(props.departureTime));
const currencyId = computed(() => formatCurrency('id-ID', 'IDR', props.cost));

onBeforeMount(async () => {
    const [trainData, trainClassData, schedulePassengerData, deptStationData, arrStattionData] = await Promise.all([
        trainStore.findOne(props.trainCode),
        trainClassStore.findOne(props.trainClassCode),
        schedulePassengerStore.getTotalElements(props.id),
        trainStationStore.getName(props.departureStationId),
        trainStationStore.getName(props.arrivalStationId)
    ]);
    train.value = trainData;
    trainClass.value = trainClassData.name;
    currentPassenger.value = schedulePassengerData;
    deptStation.value = deptStationData;
    arrStation.value = arrStattionData;
});

watch(() => props.trainCode, async () => {
    train.value = await trainStore.findOne(props.trainCode);
});

watch(() => props.trainClassCode, async () => {
    const { name } = await trainClassStore.findOne(props.trainClassCode);
    trainClass.value = name;
});

watch(() => props.arrivalStationId, async () => {
    arrStation.value = await trainStationStore.getName(props.arrivalStationId);
});

watch(() => props.departureStationId, async () => {
    deptStation.value = await trainStationStore.getName(props.departureStationId);
})

</script>
