<template>
    <input v-model="model" class="base-datepicker" type="datetime-local">
</template>

<script setup>
    const model = defineModel()
</script>

<style scoped>
.base-datepicker {
    width: 203px;
    height: 24px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

.base-datepicker:focus {
    outline: #16a085 solid 1px;
    border: #16a085 solid 1px;
}

@media screen and (max-width: 440px) {
    .base-datepicker {
        width: 163px;
    }
}
</style>