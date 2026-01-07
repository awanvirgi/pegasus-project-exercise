<template>
    <div class="base-modal">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.base-modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}
</style>