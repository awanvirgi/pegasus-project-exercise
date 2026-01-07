import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('schedulePassanger-store', {
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