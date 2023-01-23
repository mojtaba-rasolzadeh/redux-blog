import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";
import {
    sub
} from "date-fns-jalali";

const initialState = {
    blogs: [{
            id: nanoid(),
            date: sub(new Date(), {
                days: 2,
                minutes: 10
            }).toISOString(),
            title: "ریداکس",
            content: "این یک متن آزمایشی می باشد ",
            user: "1",
        },
        {
            id: nanoid(),
            date: sub(new Date(), {
                minutes: 10
            }).toISOString(),
            title: "ریداکس تولکیت",
            content: "این یک متن آزمایشی می باشد",
            user: "2",
        },
    ],
};

const blogsSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        date: new Date().toISOString(),
                        content: content,
                        user: userId
                    },
                };
            },
        },
        blogUpdated: (state, action) => {
            const {
                id,
                title,
                content
            } = action.payload;
            const existingBlog = state.blogs.find((blog) => blog.id === id);
            if (existingBlog) {
                existingBlog.title = title;
                existingBlog.content = content;
            }
        },
        blogDeleted: (state, action) => {
            const {
                id
            } = action.payload;
            state.blogs = state.blogs.filter((blog) => blog.id !== id);
        },
    },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);
export default blogsSlice.reducer;
export const {
    blogAdded,
    blogUpdated,
    blogDeleted
} = blogsSlice.actions;