<template>
    <div class="server-error">
        <base-card>
            <base-logo></base-logo>
            <h1>500 Internal Server Error</h1>
            <p>There is a problem in our server </p>
            <p>We are apologies for this inconvenience, we will look into it.</p>
            <base-button isLink="true" :link="'/schedules'">Go Back To Landing Page</base-button>
        </base-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.server-error {
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
}
p:last-of-type{
    margin-bottom: 40px;
}
</style>