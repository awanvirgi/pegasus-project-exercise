<template>
    <nav class="navigation base-card">
        <base-logo></base-logo>
        <base-button-container>
            <base-button :isLink="true" :link="'/schedules'">Schedules</base-button>
            <base-button :isLink="true" :link="'/passengers'">Passengers</base-button>
            <base-button :isLink="true" :link="'/trains'">Trains</base-button>
        </base-button-container>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.navigation {
    width: 65%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
}

@media screen and (max-width: 1300px) {
    .navigation {
        width: 90%;
        margin: 10px auto;
    }
}

@media screen and (max-width: 1024px) {
    .navigation {
        width: 100%;
        margin-top: 0;
        border-bottom: solid 1px #bdc3c7;
    }
}

@media screen and (max-width: 840px) {
    .navigation {
        flex-direction: column;
        row-gap: 10px;
    }
}

</style>