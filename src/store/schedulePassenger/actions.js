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
    async refreshGrid(id) {
        const response = await axios.get(`/passenger/onBoard/${id}?page=${this.page}`);
        const { content, pageable: { pageNumber }, totalPages } = response.data;
        this.setGrid(content);
        this.setPage(pageNumber + 1);
        this.setTotalPages(totalPages);
    },
    async getTotalElements(id) {
        const { data } = await axios.get(`/passenger/onBoard/${id}`);
        const { totalElements } = data;
        return totalElements;
    },
    async delete(payload) {
        const { scheduleId, username } = payload;
        const response = await axios.delete(`/board?scheduleId=${scheduleId}&username=${username}`);
        return response;
    },
    async assign(payload) {
        const { scheduleId, username } = payload;
        const response = await axios.post(`/board?scheduleId=${scheduleId}&username=${username}`);
        return response;
    }
};