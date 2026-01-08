import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('user', {
    state() {
        return {
            subTitle: ''
        };
    },
    actions
});

export default useStore;