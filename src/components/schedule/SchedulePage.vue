<template>
    <div>
        <base-button @click="goTo('/schedules/form')" type="button">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <schedule-search-card :event="searchBy"></schedule-search-card>
        <schedule-row v-for="rowData in grid" :key="rowData.id" :schedule="rowData" :id="rowData.id"
            :train-code="rowData.trainCode" :train-class-code="rowData.trainClassCode"
            :departure-station-id="rowData.departureStationId" :arrival-station-id="rowData.arrivalStationId"
            :departure-time="rowData.departureTime" :duration="rowData.duration" :cost="rowData.cost"></schedule-row>
        <base-card>
            <base-pagination :page="store.page" :selectPage="selectPage" :totalPages="store.totalPages"
                :lastPage="lastPage" :firstPage="firstPage"></base-pagination>
        </base-card>
    </div>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import ScheduleRow from './ScheduleRow.vue';
import ScheduleSearchCard from './ScheduleSearchCard.vue';

import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import useStore from '../../store/schedule/schedule-store';
import usePageData from '../../hooks/page-data.js';

const store = useStore();
const router = useRouter();

const { grid, searchBy, selectPage, firstPage, lastPage } = usePageData({ store });

const goTo = (link) => {
    router.push(link);
}

onBeforeMount(() => {
    store.refreshGrid();
})
</script>

<style scoped></style>