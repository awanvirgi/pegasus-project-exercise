import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('trainClass-store',{
    actions
})

export default useStore;