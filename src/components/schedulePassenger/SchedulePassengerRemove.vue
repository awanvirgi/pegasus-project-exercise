<template>
    <base-modal>
        <base-dialog :title="'Hapus Passenger dalam Jadwal ini'" :closeDialog="closeDialog">
            <p>Are you sure you want to delete this Passenger on this Schedule?</p>
            <base-button-container>
                <base-button type="button" @click="removeData">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
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
import useStore from '../../store/schedulePassenger/schedulePassenger-store';
import useRemoveData from '../../hooks/remove-data';

const { username, id } = defineProps(['username', 'id']);

const payload = { scheduleId: id, username };
const store = useStore();

const { closeDialog, removeData } = useRemoveData({ store, payload,refreshParam:id, backlink: `/schedules/${id}/passengers` });
</script>

<style lang="scss" scoped></style>