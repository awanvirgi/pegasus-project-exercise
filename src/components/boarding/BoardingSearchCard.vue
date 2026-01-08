<template>
    <base-card>
        <div>
            <h2>Filter By</h2>
            <base-label-row :label="'Train Name'">
                <base-textbox :modelValue="trainName" @input="event($event, 'trainName')"
                    name="train-name"></base-textbox>
            </base-label-row>
            <base-label-row :label="'Dept. Station'">
                <base-textbox :modelValue="departureStation" @input="event($event, 'departureStation')"
                    name="dept-station"></base-textbox>
            </base-label-row>
            <base-label-row :label="'Dept. Time'">
                <base-datetimepicker :modelValue="departureTime" @input="event($event, 'departureTime')"
                    name="dept-time"></base-datetimepicker>
            </base-label-row>
            <base-label-row :label="'Class'">
                <base-dropbox :modelValue="classCode" @change="event($event, 'classCode')" :placeholderValue="'ALL'"
                    :placeholder="'All Class'" :options="classDropdown" name="train-class"></base-dropbox>
            </base-label-row>
        </div>
    </base-card>
</template>

<script setup>
defineProps(
    {
        event: {
            default: () => { }
        }
    }
);
import useTrainClassStore from '../../store/trainClass/trainClass-store';
import useBoardingStore from '../../store/boarding/boarding-store';
import { onBeforeMount, ref } from 'vue';
import { storeToRefs } from 'pinia';

const trainClassStore = useTrainClassStore();
const boardingStore = useBoardingStore();

const { trainName, departureTime, departureStation, classCode } = storeToRefs(boardingStore);

const classDropdown = ref([]);

onBeforeMount(async () => {
    classDropdown.value = await trainClassStore.getDropdown();
});
</script>

<style scoped></style>