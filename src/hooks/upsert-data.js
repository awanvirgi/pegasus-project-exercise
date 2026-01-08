import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default ({ store, id, backlink, keyName = 'id' }) => {
    const router = useRouter();
    const input = ref({});
    const validationMessages = ref({});

    const closeDialog = () => {
        router.push(backlink);
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
        const method = id ? 'put' : 'post';
        if (id) {
            input.value[keyName] = id;
        }
        const { status, data } = await store.upsert(input.value, method);
        if (status === 200 || status === 201) {
            await store.refreshGrid();
            closeDialog();
        } else if (status === 422) {
            setValidation(data);
        } else {
            Swal.fire({
                title: `Error! (${status})`,
                text: data,
                icon: 'error',
                confirmButtonText: 'Confirm'
            });
            closeDialog();
        }
    };
    return {
        submit, closeDialog, input, validationMessages
    };
};