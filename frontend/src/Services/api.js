import axios from "axios";

const api = axios.create({
    baseURL: "https://nanababy.onrender.com/"
});

export default api;
