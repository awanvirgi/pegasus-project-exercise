<template>
    <tr>
        <td>
            <base-button @click="goTo(`/schedules/${id}/passengers/${username}/remove`)">Remove</base-button>
        </td>
        <td>{{ username }}</td>
        <td>{{ fullname }}</td>
    </tr>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['username', 'firstName', 'lastName', 'id']);

const router = useRouter();

const fullname = computed(() => `${props.firstName} ${props.lastName}`);

const goTo = (link) => {
    router.push(link);
};
</script>

<style lang="scss" scoped></style>