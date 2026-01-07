<template>
    <div class="button-container">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.button-container {
    text-align: right;
}

.button-container.left{
    text-align: left;
}

.button-container>:deep(button),
.button-container>:deep(a) {
    margin-left: 4px;
}
</style>