import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default ({ store, backlink, payload, refreshParam }) => {

    const router = useRouter();

    const closeDialog = () => {
        router.push(backlink);
    };

    const removeData = async () => {
        const { data, status } = await store.delete(payload);
        if (status === 204 || status === 200) {
            store.refreshGrid(refreshParam);
            closeDialog();
        } else if (status === 409) {
            Swal.fire({
                title: 'Error!',
                text: 'Error: Data is in use.',
                icon: 'error',
                confirmButtonText: 'Confirm'
            });
            closeDialog()
        }
    };
    return {
        closeDialog, removeData
    };
};