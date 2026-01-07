<template>
    <select v-model="model" class="base-dropbox">
        <option v-if="placeholder" :value="placeholderValue">{{ placeholder }}</option>
        <option v-for="data in options" :value="data.value" :id="data.value">{{ data.text }}</option>
    </select>
</template>

<script setup>

const model = defineModel();
const props = defineProps({
    options: {
        default: [{ value: '', text: '' }]
    },
    placeholder: {
        default: null
    },
    placeholderValue: {
        default: ''
    }
});
</script>

<style scoped>
.base-dropbox {
    width: 206px;
    height: 26px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

.base-dropbox:focus {
    outline: #16a085 solid 1px;
    border: #16a085 solid 1px;
}

@media screen and (max-width: 440px) {
    .base-dropbox {
        width: 166px;
    }
}
</style>