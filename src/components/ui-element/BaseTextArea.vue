<template>
    <textarea v-model="model" class="base-textbox" type="text"></textarea>
</template>

<script setup>
const model = defineModel();
</script>

<style scoped>
.base-textbox {
    width: 200px;
    height: 60px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

.base-textbox:focus {
    outline: #16a085 solid 1px;
    border: #16a085 solid 1px;
}

@media screen and (max-width: 440px) {
    .base-textbox {
        width: 160px;
    }
}
</style>