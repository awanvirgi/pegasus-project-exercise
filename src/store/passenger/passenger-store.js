import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore('passenger-store',{
    state(){
        return{
            grid:[],
            page:1,
            totalPages:null,
            firstName:'',
            lastName:'',
        }
    },
    actions
})

export default useStore