import axios from 'axios';

export default {
    setGrid(content) {
        this.grid = content ? content : [];
    },
    setTotalPages(totalPages) {
        this.totalPages = totalPages ? totalPages : null;
    },
    setPage(page) {
        this.page = page ? page : 1;
    },
    async refreshGrid() {
        let time = ''
        if(this.departureTime){
            time = new Date(this.departureTime).toISOString().split('T')[0]
        }
        const response = await axios.get(`/schedule?trainName=${this.trainName}&departureStation=${this.departureStation}&departureTime=${time}&classCode=${this.classCode}&page=${this.page}`);
        const { content, pageable: { pageNumber }, totalPages } = response.data;
        this.setGrid(content);
        this.setPage(pageNumber + 1);
        this.setTotalPages(totalPages);
    },
    async upsert({ payload, keyName }) {
        let method = 'post';
        if (payload[keyName]) {
            method = 'put';
        }
        const response = await axios[method](`/schedule`, payload);
        return response;
    },
    async findOne(id) {
        const { data } = await axios.get(`/schedule/one/${id}`);
        return data;
    },
    async delete(id) {
        const response = await axios.delete(`/schedule/${id}`);
        return response;
    }
};