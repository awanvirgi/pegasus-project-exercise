<template>
    <tr>
        <td>
            <base-flex-row>
                <base-button @click="goTo(`/trains/form/${code}`)">Update</base-button>
                <base-button @click="goTo(`/trains/remove/${code}`)">Remove</base-button>
            </base-flex-row>
        </td>
        <td>
            <span>Code</span>
            {{ code }}
        </td>
        <td>
            <span>Name</span>
            {{ name }}
        </td>
        <td><span>Max Passenger</span> {{ maxPassengers }}</td>
        <td><span>Description</span> {{ description }}</td>
    </tr>
</template>

<script setup>
import { useRouter } from 'vue-router';
defineProps(['name', 'code', 'maxPassengers', 'description']);
const router = useRouter();

const goTo = (link) => {
    router.push(link);
};
</script>
