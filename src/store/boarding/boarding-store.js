import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('boarding-store', {
    state() {
        return {
            grid: [],
            page: 1,
            totalPages: null,
            trainName: '',
            departureStation: '',
            departureTime: '',
            classCode: 'ALL'
        };
    },
    actions
});

export default useStore;