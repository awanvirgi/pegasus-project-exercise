<template>
    <div class="base-card">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.base-card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
}

.double-column {
    display: flex;
    justify-content: flex-start;
}

.double-column>:deep(div) {
    flex-grow: 1;
}

.base-card :deep(>div>h2) {
    font-size: 14px;
    font-style: italic;
    color: #006266;
    margin: 10px 0 20px
}


@media screen and (max-width: 1024px) {
    .base-card {
        box-shadow: none;
        border-radius: 0;
    }

    .base-card {
        border-top: solid 1px #bdc3c7;
        border-bottom: solid 1px #bdc3c7;
        margin-top: 5px;
    }
}

@media screen and (max-width: 840px) {
    .double-column {
        flex-direction: column;
        row-gap: 10px;
    }
}
</style>