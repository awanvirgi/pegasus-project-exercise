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
    async refreshGrid(username) {
        let time = '';
        if (this.departureTime) {
            time = new Date(this.departureTime).toISOString().split('T')[0];
        }
        const response = await axios.get(`/schedule/boarding/${username}?trainName=${this.trainName}&departureStation=${this.departureStation}&departureTime=${time}&classCode=${this.classCode}&page=${this.page}`);
        const { content, pageable: { pageNumber }, totalPages } = response.data;
        this.setGrid(content);
        this.setPage(pageNumber + 1);
        this.setTotalPages(totalPages);
    },
    async assign(payload) {
        const { scheduleId, username } = payload;
        const response = await axios.post(`/board?scheduleId=${scheduleId}&username=${username}`);
        return response;
    },
};