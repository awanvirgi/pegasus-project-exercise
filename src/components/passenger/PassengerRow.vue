<template>
    <base-card class="double-column">
        <div class="left">
            <base-label-row :label="'Username'">
                <span class="value">{{ userName }}</span>
            </base-label-row>
            <base-label-row :label="'Full Name'">
                <span class="value">{{ fullName }}</span>
            </base-label-row>
            <base-label-row :label="'Gender'">
                <span class="value">{{ genderName }}</span>
            </base-label-row>
        </div>
        <div class="right">
            <base-label-row :label="'Birth Date'">
                <span class="value">{{ formatDate }}</span>
            </base-label-row>
            <base-label-row :label="'ID Number'">
                <span class="value">{{ idNumber }}</span>
            </base-label-row>
            <base-label-row :label="'Address'">
                <span class="value">{{ address }}</span>
            </base-label-row>
            <base-button-container>
                <base-button @click="goTo(`/passengers/form/${userName}`)" type="button">
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button @click="goTo(`/passengers/remove/${userName}`)" type="button">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button :isLink="true" :link="`/passengers/${userName}/boarding`">
                    <i class="fas fa-train"></i>
                    <span>Board</span>
                </base-button>
            </base-button-container>
        </div>
    </base-card>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['userName', 'firstName', 'lastName', 'gender', 'birthDate', 'idNumber', 'address']);

const fullName = computed(() => `${props.firstName} ${props.lastName?props.lastName:''}`);

const genderName = computed(() => {
    if (props.gender === 'F') {
        return 'Female';
    } else if (props.gender === 'M') {
        return 'Male';
    }
});

const formatDate = computed(() => {
    return Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(props.birthDate));
});

const goTo = (link) => {
    router.push(link);
};
</script>

<style scoped></style>