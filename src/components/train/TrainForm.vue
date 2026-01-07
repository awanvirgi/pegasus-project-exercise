<template>
    <base-modal>
        <base-dialog :title="'Train Form'" :closeDialog="closeDialog">
            <base-label-row :label="'Code*'">
                <base-textbox v-model="input.code" name="code" :disabled="id ? true : false"></base-textbox>
                <base-error-message v-for="value of validationMessages.code" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Name*'">
                <base-textbox v-model="input.name" name="code"></base-textbox>
                <base-error-message v-for="value of validationMessages.name" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Max Passengers*'">
                <base-textbox v-model="input.maxPassengers" name="code"></base-textbox>
                <base-error-message v-for="value of validationMessages.maxPassengers" :key="value"
                    :validationMessage="value"></base-error-message>
            </base-label-row>
            <base-label-row :label="'Description'">
                <base-textarea v-model="input.description" name="code"></base-textarea>
                <base-error-message v-for="value of validationMessages.description" :key="value"
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
import { useRouter } from 'vue-router';

import useTrainStore from '../../store/train/train-store';

const { id } = defineProps(['id']);

const input = ref({});
const validationMessages = ref({});

const trainStore = useTrainStore();
const router = useRouter();

const closeDialog = () => {
    router.push('/trains');
};

const setValidation = (validations) => {
    validationMessages.value = {};
    for (let validation of validations) {
        if (!validation.field) {
            validationMessages.value.object = validation.defaultMessage;
        }
        if (!validationMessages.value[validation.field]) {
            validationMessages.value[validation.field] = [];
        }
        validationMessages.value[validation.field].push(validation.defaultMessage);
    }
};

const submit = async () => {
    const payload = input.value;
    let method = 'post';
    if (id) method = 'put';
    const { status, data } = await trainStore.upsert(
        payload, method
    );
    if (status === 200 || status === 201) {
        trainStore.refreshGrid();
        router.push('/trains');
    } else if (status === 422) {
        setValidation(data);
    }
};

onBeforeMount(async () => {
    if (id) {
        input.value = await trainStore.findOne(id);
        if (!input.value) {
            router.push('/notFound');
        }
    }
});
</script>

<style lang="scss" scoped></style>