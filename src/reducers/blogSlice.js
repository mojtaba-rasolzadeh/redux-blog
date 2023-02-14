import {
    createAsyncThunk,
    createSelector,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit';
import {
    createBlog,
    deleteBlog,
    getAllBlogs,
    updateBlog
} from '../services/blogsServices';

const blogAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = blogAdapter.getInitialState({
    status: 'idle',
    error: null
});

export const fetchBlogs = createAsyncThunk('/blogs/fetchBlogs', async() => {
    const response = await getAllBlogs();
    return response.data;
});

export const addBlog = createAsyncThunk('/blogs/addBlog', async initialBlog => {
    const response = await createBlog(initialBlog);
    return response.data;
});

export const deleteBlogApi = createAsyncThunk('/blogs/deleteBlogApi', async initialBlogId => {
    await deleteBlog(initialBlogId);
    return initialBlogId;
});

export const updateBlogApi = createAsyncThunk('/blogs/updateBlogApi', async initialBlog => {
    const response = await updateBlog(initialBlog, initialBlog.id);
    return response.data;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
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
        builder.addCase(fetchBlogs.pending, (state, _) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'completed';
                blogAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addBlog.fulfilled, blogAdapter.addOne)
            .addCase(deleteBlogApi.fulfilled, blogAdapter.removeOne)
            .addCase(updateBlogApi.fulfilled, blogAdapter.updateOne)

    }
});

export const {
    selectAll: selectAllBlogs,
    selectById: selectBlogById,
} = blogAdapter.getSelectors(state => state.blogs);

export const selectAuthorBlogs = createSelector(
    [selectAllBlogs, (_, authorId) => authorId], (blogs, authorId) => blogs.filter(blog => blog.author === authorId)
);

export default blogsSlice.reducer;
export const {
    changeReaction,
    blogAdded,
    blogEdited,
    blogDeleted,
    toggleShowSetting,
    reactionAdded
} = blogsSlice.actions;