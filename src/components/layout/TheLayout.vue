<template>
    <div>
        <the-navigation></the-navigation>
        <h1 class="title">{{ route.meta.title }} <span class="header">{{ route.meta.subTitle }}</span></h1>
        <main class="main-content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import TheNavigation from './TheNavigation.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
<style scoped>
.title {
    color: #006266;
    text-align: center;
    display: block;
    margin: 30px 0;
}

.title>.header {
    color: #EE5A24;
}

.main-content {
    width: 65%;
    margin: 20px auto;
}

.main-content> :deep(div>div) {
    margin-top: 15px;
}

@media screen and (max-width: 1300px) {
    .main-content {
        width: 90%;
        margin: 10px auto;
    }
}

@media screen and (max-width: 1024px) {
    .main-content {
        width: 100%;
    }
}

@media screen and (max-width: 440px) {
    .title {
        font-size: 18px;
    }
}
</style>