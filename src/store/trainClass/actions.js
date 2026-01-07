import axios from "axios"
export default {
    async findOne(id) {
        const { data } = await axios.get(`/trainClass/${id}`)
        return data
    },
    async getDropdown() {
        const { data } = await axios.get('/trainClass')
        return data
    }
}