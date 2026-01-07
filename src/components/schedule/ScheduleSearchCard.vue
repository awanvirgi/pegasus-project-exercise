<template>
    <base-card>
        <div>
            <h2>Filter By</h2>
            <base-label-row :label="'Train Name'">
                <base-textbox @input="event($event, 'trainName')" name="train-name"></base-textbox>
            </base-label-row>
            <base-label-row :label="'Dept. Station'">
                <base-textbox @input="event($event, 'departureStation')" name="dept-station"></base-textbox>
            </base-label-row>
            <base-label-row :label="'Dept. Time'">
                <base-datetimepicker @input="event($event, 'departureTime')" name="dept-time"></base-datetimepicker>
            </base-label-row>
            <base-label-row :label="'Class'">
                <base-dropbox @change="event($event, 'classCode')" :placeholderValue="'ALL'" :placeholder="'All Class'"
                    :options="classDropdown" name="train-class"></base-dropbox>
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
)
import useTrainClassStore from '../../store/trainClass/trainClass-store';
import { onBeforeMount, ref } from 'vue';

const trainClassStore = useTrainClassStore();

const classDropdown = ref([]);

onBeforeMount(async () => {
    classDropdown.value = await trainClassStore.getDropdown();
})
</script>

<style scoped></style>