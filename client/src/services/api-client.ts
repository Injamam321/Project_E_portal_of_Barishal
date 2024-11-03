import axios from "axios";
import { BACKEND_URL } from "../constants/utils";

const apiClient = axios.create({
    baseURL: BACKEND_URL,// Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = (token: string | null) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

export default apiClient;
