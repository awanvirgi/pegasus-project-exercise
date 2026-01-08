<template>
    <base-card>
        <div class="filter-container">
            <h2>Filter By</h2>
            <base-label-row :label="'First Name'">
                <base-textbox :modelValue="firstName" @input="event($event, 'firstName')" type="text" name="first-name"></base-textbox>
            </base-label-row>
            <base-label-row :label="'Last Name'">
                <base-textbox :modelValue="lastName" @input="event($event, 'lastName')" type="text" name="last-name"></base-textbox>
            </base-label-row>
        </div>
    </base-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useStore from '../../store/passenger/passenger-store';

const store = useStore()

const {lastName,firstName} =  storeToRefs(store)

defineProps(['event']);
</script>

<style lang="scss" scoped></style>