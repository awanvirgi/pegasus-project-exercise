<template>
    <base-modal>
        <base-dialog :title="'Schedule Form'" :closeDialog="closeDialog">
            <base-label-row :label="'Train*'">
                <base-dropbox v-model="input.trainCode" :options="trainDropdown" name="train">
                </base-dropbox>
                <base-error-message v-for="value of validationMessages.trainCode" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Class*'">
                <base-dropbox v-model="input.trainClassCode" :options="classDropdown" name="class">
                </base-dropbox>

                <base-error-message v-for="value of validationMessages.trainClassCode" :key="value"
                    :validationMessage="value"></base-error-message>

            </base-label-row>
            <base-label-row :label="'Dept. Station*'">
                <base-dropbox v-model="input.departureStationId" :options="stationDropdown" name="departure-stations">
                </base-dropbox>

                <base-error-message v-for="value of validationMessages.departureStationId" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Arr. Station*'">
                <base-dropbox v-model="input.arrivalStationId" :options="stationDropdown" name="arrival-stations">
                </base-dropbox>
                <base-error-message v-for="value of validationMessages.arrivalStationId" :key="value"
                    :validationMessage="value"></base-error-message>
                <base-error-message :validationMessage="validationMessages.object"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Dept. Time*'">
                <base-datetimepicker v-model="input.departureTime" name="departure-time">
                </base-datetimepicker>
                <base-error-message v-for="value of validationMessages.departureTime" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Duration (min)*'">
                <base-textbox v-model="input.duration" name="train">
                </base-textbox>
                <base-error-message v-for="value of validationMessages.duration" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Cost*'">
                <base-textbox v-model="input.cost" name="cost"></base-textbox>
                <base-error-message v-for="value of validationMessages.cost" :key="value"
                    :validationMessage="value"></base-error-message>

            </base-label-row>
            <base-button-container>
                <base-button @click="submit" type="button">
                    <i class="fas fa-save"></i>
                    <span>Save</span>
                </base-button>
                <base-button @click="closeDialog" type="button">
                    <i class="fas fa-times"></i>
                    <span>Cancel</span>
                </base-button>
            </base-button-container>
        </base-dialog>
    </base-modal>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

import useTrainStore from '../../store/train/train-store';
import useTrainClassStore from '../../store/trainClass/trainClass-store';
import useTrainStationStore from '../../store/trainStation/trainStation-store';
import useScheduleStore from '../../store/schedule/schedule-store';

const { id } = defineProps(['id']);

const router = useRouter();
const trainStore = useTrainStore();
const trainClassStore = useTrainClassStore();
const trainStationStore = useTrainStationStore();
const scheduleStore = useScheduleStore();

const trainDropdown = ref([]);
const classDropdown = ref([]);
const stationDropdown = ref([]);
const validationMessages = ref({});
const input = ref({});

const closeDialog = () => {
    router.push('/schedules');
};

const setValidation = (validations) => {
    validationMessages.value = {};
    for (let validation of validations) {
        if (!validation.field) {
            validationMessages.value.object = validation.defaultMessage;
        }
        if (!validationMessages.value[validation.field]) {
            validationMessages.value[validation.field] = [];
        }
        validationMessages.value[validation.field].push(validation.defaultMessage);
    }
};

const submit = async () => {
    const keyName = 'id';
    if (id) input.value[keyName] = id;
    const payload = input.value;
    const { status, data } = await scheduleStore.upsert({
        payload, keyName
    });
    if (status === 200 || status === 201) {
        scheduleStore.refreshGrid();
        router.push('/schedules');
    } else if (status === 422) {
        setValidation(data);
    }
};

onBeforeMount(async () => {
    trainDropdown.value = await trainStore.getDropdown();
    classDropdown.value = await trainClassStore.getDropdown();
    stationDropdown.value = await trainStationStore.getDropdown();
    if (id) {
        input.value = await scheduleStore.findOne(id);
        if (!input.value) {
            router.push('/notFound')
        }
    }
})

</script>

<style scoped></style>