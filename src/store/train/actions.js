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
        const response = await axios.get(`/train?name=${this.name}&page=${this.page}`);
        const { content, pageable: { pageNumber }, totalPages } = response.data;
        this.setGrid(content);
        this.setPage(pageNumber + 1);
        this.setTotalPages(totalPages);
    },
    async upsert(payload, method) {
        const response = await axios[method](`/train`, payload);
        return response;
    },
    async findOne(id) {
        const { data } = await axios.get(`/train/one/${id}`);
        return data;
    },
    async getDropdown() {
        const { data } = await axios.get(`/train/dropdown`);
        return data;
    },
    async delete(id) {
        const response = await axios.delete(`/train/${id}`);
        return response;
    },
    async getName(id) {
        const { data } = await axios.get(`/train/one/${id}`);
        return data.name;
    },
};