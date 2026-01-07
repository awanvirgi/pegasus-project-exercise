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

import useUpsertData from '../../hooks/upsert-data';

const { id } = defineProps(['id']);

const router = useRouter();
const trainStore = useTrainStore();
const trainClassStore = useTrainClassStore();
const trainStationStore = useTrainStationStore();
const scheduleStore = useScheduleStore();

const { submit,validationMessages,input,closeDialog } = useUpsertData({ store: scheduleStore, backlink: '/schedules', keyName: 'id' });

const trainDropdown = ref([]);
const classDropdown = ref([]);
const stationDropdown = ref([]);

onBeforeMount(async () => {
    const [trains, classes, stations] = await Promise.all([
        trainStore.getDropdown(),
        trainClassStore.getDropdown(),
        trainStationStore.getDropdown()
    ]);
    trainDropdown.value = trains;
    classDropdown.value = classes;
    stationDropdown.value = stations;
    if (id) {
        input.value = await scheduleStore.findOne(id);
        if (!input.value) {
            router.push('/notFound');
        }
    }
})

</script>

<style scoped></style>