import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('trainStation-store', {
    actions
})

export default useStore;