<template>
    <div>
        <base-card>
            <base-table :headers="['Action', 'Username', 'Full Name']">
                <schedule-passenger-row v-for="row in grid" :key="row.username" :username="row.username"
                    :first-name="row.firstName" :last-name="row.lastName" :id="id"></schedule-passenger-row>
            </base-table>
        </base-card>
        <base-card>
            <base-pagination :page="schedulePassengerStore.page" :totalPages="schedulePassengerStore.totalPages"
                :selectPage="selectPage" :firstPage="firstPage" :lastPage="lastPage">
            </base-pagination>
        </base-card>
    </div>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import SchedulePassengerRow from './SchedulePassengerRow.vue';
import usePageData from '../../hooks/page-data';
import useSchedulePassengerStore from '../../store/schedulePassenger/schedulePassenger-store';
import useTrainStationStore from '../../store/trainStation/trainStation-store';
import useTrainStore from '../../store/train/train-store';
import useScheduleStore from '../../store/schedule/schedule-store';
import useUserInterfaceStore from '../../store/userInterface/userInterface-store';

import { useRouter } from 'vue-router';

import { onBeforeMount, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';

const { id, username } = defineProps(['id', 'username']);

const schedulePassengerStore = useSchedulePassengerStore();
const trainStationStore = useTrainStationStore();
const trainStore = useTrainStore();
const scheduleStore = useScheduleStore();
const userInterfaceStore = useUserInterfaceStore();

const { subTitle } = storeToRefs(userInterfaceStore);

const router = useRouter();

const { grid, selectPage, lastPage, firstPage } = usePageData({ store: schedulePassengerStore, id });

onBeforeMount(async () => {
    schedulePassengerStore.refreshGrid(id);
    const { trainCode, arrivalStationId } = await scheduleStore.findOne(id);
    if (!trainCode || !arrivalStationId) {
        return router.push("/notFound");
    }
    const [trainName, stationName] = await Promise.all([
        trainStore.getName(trainCode),
        trainStationStore.getName(arrivalStationId)
    ]);
    subTitle.value = `${trainName} to ${stationName}`;
});
onUnmounted(() => {
    subTitle.value = '';
});
</script>

<style lang="scss" scoped></style>