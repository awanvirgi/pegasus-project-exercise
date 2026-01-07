import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('schedulePassenger-store', {
    state() {
        return {
            grid: [],
            page: 1,
            totalPages: null
        };
    },
    actions
});

export default useStore;