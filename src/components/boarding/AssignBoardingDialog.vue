<template>
    <base-modal>
        <base-dialog :title="'Assign Schedule'" :closeDialog="closeDialog">
            <p>
                Are you sure you want to assign this schedule for that passenger?.
            </p>
            <base-button-container>
                <base-button type="button" @click="assignSchdule">
                    <i class="fas fa-plus"></i>
                    <span>Assign</span>
                </base-button>
                <base-button type="button" @click="closeDialog">
                    <i class="fas fa-times"></i>
                    <span>Cancel</span>
                </base-button>
            </base-button-container>
        </base-dialog>
    </base-modal>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

import useStore from '../../store/boarding/boarding-store.js';


const props = defineProps(['username', 'id']);

const store = useStore();

const router = useRouter();

const closeDialog = () => {
    router.push(`/passengers/${props.username}/boarding`);
};

const assignSchdule = async () => {
    const payload = {
        username: props.username,
        scheduleId: props.id
    };
    const { data, status } = await store.assign(payload);
    if (status === 201 || status === 200) {
        store.refreshGrid(props.username);
        closeDialog();
    } else {
        Swal.fire({
            title: `Error! (${status})`,
            text: data,
            icon: 'error',
            confirmButtonText: 'Confirm'
        });
        closeDialog()
    }
};
</script>

<style scoped></style>