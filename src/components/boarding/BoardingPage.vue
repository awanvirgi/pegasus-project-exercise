<template>
    <div>
        <boarding-search-card :event="searchBy"></boarding-search-card>
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
import BoardingSearchCard from './BoardingSearchCard.vue';
import BoardingScheduleRow from './BoardingScheduleRow.vue';

import usePassengerStore from '../../store/passenger/passenger-store.js';
import useBoardingStore from '../../store/boarding/boarding-store.js';
import useUserInterfaceStore from '../../store/userInterface/userInterface-store';

import usePageData from '../../hooks/page-data.js';

import { onBeforeMount, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const props = defineProps(['username', 'id']);

const store = useBoardingStore();
const router = useRouter();
const passengerStore = usePassengerStore();

const userInterfaceStore = useUserInterfaceStore();

const { subTitle } = storeToRefs(userInterfaceStore);

const { grid, searchBy, firstPage, lastPage, selectPage } = usePageData({ store, id: props.username });

onBeforeMount(async () => {
    store.refreshGrid(props.username);
    const { username, firstName, lastName } = await passengerStore.findOne(props.username);
    if (!username) {
        router.push('/notFound');
    }
    subTitle.value = `${firstName} ${lastName ? lastName : ''} (${username})`;
});

onUnmounted(() => {
    subTitle.value = '';
});

</script>

<style lang="scss" scoped></style>