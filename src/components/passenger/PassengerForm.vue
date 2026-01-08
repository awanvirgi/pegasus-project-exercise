<template>
    <base-modal>
        <base-dialog :title="'Passenger Form'" :closeDialog="closeDialog">
            <base-label-row :label="'Username*'">
                <base-textbox v-model="input.username" name="username" :disabled="id ? true : false"></base-textbox>
                <base-error-message v-for="value of validationMessages.username" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'First Name*'">
                <base-textbox v-model="input.firstName" name="firstName"></base-textbox>
                <base-error-message v-for="value of validationMessages.firstName" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Last Name'">
                <base-textbox v-model="input.lastName" name="lastName"></base-textbox>
                <base-error-message v-for="value of validationMessages.lastName" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Gender*'">
                <base-dropbox v-model="input.gender" name="gender"
                    :options="[{ value: 'M', text: 'Male' }, { value: 'F', text: 'Female' }]"></base-dropbox>
                <base-error-message v-for="value of validationMessages.gender" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Birth Date*'">
                <base-datepicker v-model="input.birthDate" name="birthDate"></base-datepicker>
                <base-error-message v-for="value of validationMessages.birthDate" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Id Number*'">
                <base-textbox v-model="input.idNumber" name="idNumber"></base-textbox>
                <base-error-message v-for="value of validationMessages.idNumber" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Address'">
                <base-textarea v-model="input.address" name="address"></base-textarea>
                <base-error-message v-for="value of validationMessages.address" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-button-container>
                <base-button @click="submit" type="button">
                    <i class="fas fa-save"></i>
                    <span>Save</span>
                </base-button>
                <base-button @click="closeDialog" type="button">
                    <i class="fas fa-times"></i>
                    <span>Cancel</span>
                </base-button>
            </base-button-container>
        </base-dialog>
    </base-modal>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import usePassengerStore from '../../store/passenger/passenger-store';
import useUpsertData from '../../hooks/upsert-data';
import { useRouter } from 'vue-router';

const { id } = defineProps(['id']);

const passengerStore = usePassengerStore();
const router = useRouter();

const { input, submit, validationMessages, closeDialog } = useUpsertData({ store: passengerStore, id, backlink: '/passengers', keyName: 'username' });

onBeforeMount(async () => {
    if (id) {
        input.value = await passengerStore.findOne(id);
        if (!input.value) {
            router.push('/notFound');
        }
    }
});
</script>

<style lang="scss" scoped></style>