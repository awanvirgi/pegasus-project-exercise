<template>
    <div class="base-dialog">
        <div class="header">
            <h3>{{ title }}</h3>
            <button type="button" class="close-button close-dialog" @click="closeDialog">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps(['title', 'closeDialog'])
</script>

<style scoped>
.base-dialog {
    display: block;
    background-color: white;
    padding: 15px;
    min-width: 300px;
    border-radius: 6px;
}

.base-dialog .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.base-dialog .header>h3 {
    margin: 0;
    color: #006266;
}

.base-dialog :deep(p) {
    color: #006266;
    font-size: 16px;
}

.close-button {
    background-color: #c0392b;
    color: white;
    border: none;
    cursor: pointer;
    display: inline-flex;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}
</style>