<template>
    <div v-if="validationMessage" class="validation-message">{{ validationMessage }}</div>
</template>

<script setup>
const props =  defineProps(['validationMessage'])
</script>

<style scoped>
.validation-message {
    background-color: #e74c3c;
    color: white;
    margin: 4px 0;
    padding: 4px;
    border-radius: 4px;
    font-size: 11px;
}
</style>
