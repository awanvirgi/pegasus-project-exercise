<template>
    <div>
        <base-button :isLink="true" :link="'/passengers/form'">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <passenger-search-card :event="searchBy"></passenger-search-card>
        <passenger-row v-for="row in grid" :key="row.username" :user-name="row.username" :first-name="row.firstName"
            :last-name="row.lastName" :gender="row.gender" :address="row.address" :birth-date="row.birthDate"
            :id-number="row.idNumber">
        </passenger-row>
        <base-card>
            <base-pagination :page="store.page" :totalPages="store.totalPages" :firstPage="firstPage"
                :lastPage="lastPage" :selectPage="selectPage">
            </base-pagination>
        </base-card>
    </div>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import PassengerRow from './PassengerRow.vue';
import PassengerSearchCard from './PassengerSearchCard.vue';

import usePassengerStore from '../../store/passenger/passenger-store';
import usePageData from '../../hooks/page-data';

// import { onBeforeMount } from 'vue';
// import { useRouter } from 'vue-router';

const store = usePassengerStore();
// const router = useRouter();

store.refreshGrid();

const { grid, searchBy, selectPage, firstPage, lastPage } = usePageData({ store });
// const toInsertForm = () => { //todo Refactor
//     router.push('/passengers/form');
// }


</script>

<style lang="scss" scoped></style>