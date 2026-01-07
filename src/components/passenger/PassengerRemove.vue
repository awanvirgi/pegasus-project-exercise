<template>
    <base-modal>
        <base-dialog :title="'Delete Passenger'" :closeDialog="closeDialog">
            <p>
                Are you sure you want to delete this passenger? This action will also remove them from all assigned
                schedules.
            </p>
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
import usePassengerStore from '../../store/passenger/passenger-store';
import useRemoveData from '../../hooks/remove-data';

const { id } = defineProps(['id']);

const store = usePassengerStore();

const { removeData, closeDialog } = useRemoveData({ store, backlink: '/passengers', payload: id })

</script>

<style lang="scss" scoped></style>