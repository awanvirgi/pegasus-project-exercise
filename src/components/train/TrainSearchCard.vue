<template>
    <base-card>
        <div>
            <h2>Filter By</h2>
            <base-label-row :label="'Name'">
                <base-textbox :modelValue="name" @input="event($event, 'name')" name="name"></base-textbox>
            </base-label-row>
        </div>
    </base-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useTrainStore from '../../store/train/train-store';

defineProps(['event']);
const trainStore = useTrainStore();
const { name } = storeToRefs(trainStore);

</script>

<style lang="scss" scoped></style>