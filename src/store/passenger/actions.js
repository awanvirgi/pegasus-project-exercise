import axios from "axios";

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
        const response = await axios.get(`/passenger?firstName=${this.firstName}&lastName=${this.lastName}&page=${this.page}`);
        const { content, pageable: { pageNumber }, totalPages } = response.data;
        this.setGrid(content);
        this.setPage(pageNumber + 1);
        this.setTotalPages(totalPages);
    },
    async upsert(payload, method) {
        const response = await axios[method](`/passenger`, payload);
        return response;
    },
    async findOne(id) {
        const { data } = await axios.get(`/passenger/one/${id}`);
        return data;
    },
    async delete(id) {
        const response = await axios.delete(`/passenger/${id}`);
        return response;
    }
};