<template>
    <base-card>
        <div>
            <h2>Filter By</h2>
            <base-label-row :label="'Name'">
                <base-textbox @input="event($event, 'name')" name="name"></base-textbox>
            </base-label-row>
        </div>
    </base-card>
</template>

<script setup>
defineProps(['event']);
</script>

<style lang="scss" scoped></style>