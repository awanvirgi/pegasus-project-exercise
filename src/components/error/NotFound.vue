<template>
    <div class="not-found">
        <base-card>
            <base-logo></base-logo>
            <h1>404 Page Not Found</h1>
            <p>The Page you are looking for doesn't exist or another error occured.</p>
            <base-button isLink="true" :link="'/schedules'">Go Back To Landing Page</base-button>
        </base-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.not-found {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #006266;
    font-size: 20px;
    margin: 40px 0 10px 0;
}

p {
    color: #006266;
    font-size: 16px;
    margin: 0 0 40px 0;
}
</style>