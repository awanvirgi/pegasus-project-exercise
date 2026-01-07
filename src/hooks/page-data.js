import { storeToRefs } from "pinia";

export default ({ store, id }) => {
    const { grid } = storeToRefs(store);
    const searchBy = async (event, propertyName) => {
        store[propertyName] = event.target.value;
        store.setPage(1);
        await store.refreshGrid(id);
    };

    const selectPage = (page) => {
        store.setPage(page);
        store.refreshGrid(id);
    };

    const firstPage = () => selectPage(1);
    const lastPage = () => selectPage(store.totalPages);


    return {
        grid, searchBy, selectPage, firstPage, lastPage
    };


};