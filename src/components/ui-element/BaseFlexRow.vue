<template>
    <div class="base-flex-row">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.base-flex-row {
    display: flex;
    gap: 8px;
}

@media screen and (max-width: 1024px) {
    .base-flex-row {
        width: 100%;
        justify-content: space-between;
    }
}
</style>