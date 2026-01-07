<template>
    <base-modal>
        <base-dialog :title="'Delete Train'" :closeDialog="closeDialog">
            <p>Are you sure you want to delete this train? You can't delete this train while there is one or more
                schedule is exist for this train.</p>
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
import useTrainStore from '../../store/train/train-store';
import useRemoveData from '../../hooks/remove-data';

const { id } = defineProps(['id']);

const store = useTrainStore();

const { removeData, closeDialog } = useRemoveData({ store, payload: id, backlink: '/trains' })

</script>

<style lang="scss" scoped></style>