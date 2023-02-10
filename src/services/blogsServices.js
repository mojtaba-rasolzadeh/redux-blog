import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

// get blogs
export const getAllBlogs = () => {
    const url = `${SERVER_URL}/blogs`;
    return axios.get(url)
}

// get blog
export const getBlog = (blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.get(url);
}

// create blog 
export const createBlog = (blog) => {
    const url = `${SERVER_URL}/blogs`;
    return axios.post(url, blog);
}

// delete blog 
export const deleteBlog = (blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.delete(url);
}

// update blog
export const updateBlog = (blog, blogId) => {
    const url = `${SERVER_URL}/blogs/${blogId}`;
    return axios.put(url, blog)
}