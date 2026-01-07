<template>
    <div>
        <base-button @click="goTo('/trains/form')" class="base-button">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <train-search-card :event="searchBy"> </train-search-card>
        <base-card>
            <base-table :headers="['Action', 'Code', 'Name', 'Max Passengers', 'Description']">
                <train-row v-for="row in grid" :key="row.code" :name="row.name" :code="row.code"
                    :max-passengers="row.maxPassengers" :description="row.description"></train-row>
            </base-table>
        </base-card>
        <base-card>
            <base-pagination :page="store.page" :totalPages="store.totalPages" :selectPage="selectPage"
                :firstPage="firstPage" :lastPage="lastPage">
            </base-pagination>
        </base-card>
    </div>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import TrainRow from './TrainRow.vue';
import TrainSearchCard from './TrainSearchCard.vue';

import useTrainStore from '../../store/train/train-store';

import usePageData from '../../hooks/page-data.js';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const store = useTrainStore();
const router = useRouter();

const { grid, selectPage, lastPage, firstPage, searchBy } = usePageData({ store });

const goTo = (link) => {
    router.push(link);
};

onBeforeMount(() => {
    store.refreshGrid();
});
</script>

<style lang="scss" scoped></style>