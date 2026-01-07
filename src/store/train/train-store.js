import {defineStore} from 'pinia'
import actions from './actions'
const useStore = defineStore('train-store',{
    state(){
        return{
            grid:[],
            page:1,
            totalPages:null,
            name:''
        }
    },
    actions
})

export default useStore