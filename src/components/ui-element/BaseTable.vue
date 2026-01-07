<template>
    <table class="base-table">
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script setup>
defineProps(['headers']);
</script>

<style scoped>
.base-table {
    width: 100%;
    border-collapse: collapse;
}

.base-table thead th {
    text-align: left;
    padding: 10px;
    color: #16a085;
}

.base-table tbody :deep(td) {
    padding: 10px;
    border-bottom: #16a085 solid 1px;
}

.base-table tbody :deep(td:first-child) {
    border-bottom: none;
}

.base-table tbody :deep(tr:last-child td) {
    border-bottom: none;
}

.base-table tbody :deep(td>span) {
    display: none;
}

@media screen and (max-width: 1024px) {

    .base-table,
    .base-table tbody,
    .base-table th,
    .base-table :deep(td) {
        display: block;
    }

    .base-table :deep(tr),
    .base-table tr {
        display: block;
        margin-top: 30px;
    }

    .base-table thead {
        display: none;
    }

    .base-table :deep(td) {
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
    }

    .base-table tbody :deep(td>span) {
        display: block;
    }

    .base-table tbody :deep(tr:last-child td) {
        border-bottom: #16a085 solid 1px;
    }

    .base-table tbody :deep(tr:last-child td:first-child) {
        border-bottom: none;
    }

    .base-table :deep(span) {
        color: #16a085;
        font-weight: bold;
    }

}
</style>