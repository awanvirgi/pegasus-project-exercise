<template>
    <div>
        <schedule-search-card :event="searchBy"></schedule-search-card>
        <boarding-schedule-row v-for="rowData in grid" :key="rowData.id" :schedule="rowData" :id="rowData.id"
            :train-code="rowData.trainCode" :train-class-code="rowData.trainClassCode"
            :departure-station-id="rowData.departureStationId" :arrival-station-id="rowData.arrivalStationId"
            :departure-time="rowData.departureTime" :duration="rowData.duration" :cost="rowData.cost"
            :username="username"></boarding-schedule-row>
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
import ScheduleSearchCard from '../schedule/ScheduleSearchCard.vue';
import BoardingScheduleRow from './BoardingScheduleRow.vue';

import useScheduleStore from '../../store/schedule/schedule-store.js';
import usePassengerStore from '../../store/passenger/passenger-store.js';

import usePageData from '../../hooks/page-data.js';

import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['username']);

const store = useScheduleStore();
const route = useRoute();
const passengerStore = usePassengerStore();

const { grid, searchBy, firstPage, lastPage, selectPage } = usePageData({ store });

onBeforeMount(async () => {
    store.refreshGrid();
    const { username, firstName, lastName } = await passengerStore.findOne(props.username);
    route.meta.subTitle.value = `${firstName} ${lastName} (${username})`;
})

</script>

<style lang="scss" scoped></style>