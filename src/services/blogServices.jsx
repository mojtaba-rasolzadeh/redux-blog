import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

// get blogs
export const getAllBlogs = () => {
    const url = `${SERVER_URL}/blogs`;
    return axios.get(url)
}