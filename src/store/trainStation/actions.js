import axios from "axios"
export default {
    async getName(id) {
        const { data } = await axios.get(`/trainStation/${id}`)
        return data.name
    },
    async getDropdown() {
        const { data } = await axios.get(`/trainStation`)
        return data
    }
}