<template>
    <div class="base-pagination">
        <div class="info">Page {{ page }} of {{ totalPages }}</div>
        <base-button-container>
            <base-button @click="firstPage" v-if="page !== 1 && page - 1 !== 1" type="button">
                <i class="fas fa-angle-double-left"></i>
                <span>First</span>
            </base-button>
            <base-button @click="selectPage(page - 1)" v-if="page !== 1" type="button">{{ page - 1 }}</base-button>
            <base-button @click="selectPage(page)" class="activated-base-button" type="button">{{ page }}</base-button>
            <base-button @click="selectPage(page + 1)" v-if="page !== totalPages" type="button">{{ page + 1
                }}</base-button>
            <base-button @click="lastPage" v-if="page !== totalPages && page + 1 !== totalPages" type="button">
                <span>Last</span>
                <i class="fas fa-angle-double-right"></i>
            </base-button>
        </base-button-container>
    </div>
</template>

<script setup>
const props = defineProps(['page', 'totalPages', 'selectPage', 'lastPage', 'firstPage'])
</script>

<style scoped>
.base-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-pagination>.info {
    color: #006266;
    font-weight: bold;
}
</style>