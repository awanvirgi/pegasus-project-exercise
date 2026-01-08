<template>
    <router-link v-if="isLink" :to="link" class="base-button">
        <slot></slot>
    </router-link>
    <button v-else class="base-button">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    isLink: {
        default: false
    },
    link: {
        default: '/'
    }
});
</script>

<style scoped>
.base-button {
    display: inline-flex;
    background-color: #006266;
    color: white;
    text-decoration: none;
    height: 32px;
    align-items: center;
    padding: 0 12px;
    border-radius: 6px;
    cursor: pointer;
    box-sizing: border-box;
    border: solid 1px #006266;
}

.base-button>:deep(i:first-child) {
    margin-right: 10px;
}

.base-button>:deep(i:last-child) {
    margin-left: 10px;
}

.base-button:hover,
a.router-link-active,
button.activated-base-button {
    color: #006266;
    background-color: white;
}

@media screen and (max-width: 840px) {
    .base-button {
        font-size: 12px;
        border-radius: 4px;
        height: 28px;
        padding: 0 8px;
    }
}

@media screen and (max-width: 1024px) {
    .base-button:first-child {
        margin-left: 5px;
    }
}
</style>