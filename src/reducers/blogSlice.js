import {
    createAsyncThunk,
    createSlice,
    nanoid
} from '@reduxjs/toolkit';
import {
    getAllBlogs
} from '../services/blogsServices';

const initialState = {
    blogs: [],
    status: 'idle',
    error: null
}

export const fetchBlogs = createAsyncThunk('/blogs/fetchBlogs', async() => {
    const response = await getAllBlogs();
    return response.data;
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload);
            },
            prepare({
                author,
                title,
                img,
                category,
                content
            }) {
                return {
                    payload: {
                        id: nanoid(),
                        author,
                        title,
                        img,
                        category,
                        content,
                        created_at: new Date().toISOString(),
                        reactions: {
                            eyes: 0,
                            rocket: 0,
                            hooray: 0,
                            dislike: 0,
                            like: 0
                        }
                    }
                }
            }
        },
        blogEdited: (state, action) => {
            const {
                id,
                title,
                author,
                category,
                img,
                content
            } = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === id);
            if (existingBlog) {
                console.log(author);
                existingBlog.author = author;
                existingBlog.title = title;
                existingBlog.category = category;
                existingBlog.img = img;
                existingBlog.content = content;
            }
        },
        blogDeleted: (state, action) => {
            const {
                id
            } = action.payload;
            state.blogs = state.blogs.filter(blog => blog.id !== id);

        },
        reactionAdded: (state, action) => {
            const {
                blogId,
                reaction
            } = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === blogId);
            if (existingBlog) {
                existingBlog.reactions[reaction]++;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'completed';
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectAllBlogs = state => state.blogs.blogs;
export const selectBlogById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId);
export default blogsSlice.reducer;
export const {
    changeReaction,
    blogAdded,
    blogEdited,
    blogDeleted,
    toggleShowSetting,
    reactionAdded
} = blogsSlice.actions;