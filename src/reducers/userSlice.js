import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import {
    createAuthor,
    deleteAuthor,
    getAllAuthors
} from '../services/blogsServices';

export const fetchAuthors = createAsyncThunk('/authors/fetchAuthors', async() => {
    const response = await getAllAuthors();
    return response.data;
});

export const addAuthor = createAsyncThunk('/authors/addAuthor', async initialAuthor => {
    const response = await createAuthor(initialAuthor);
    return response.data;
});

export const deleteAuthorApi = createAsyncThunk('/authors/deleteAuthorApi', async initialAuthorId => {
    await deleteAuthor(initialAuthorId);
    return initialAuthorId;
})

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthors.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addAuthor.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteAuthorApi.fulfilled, (state, action) => {
                return state.filter(author => author.id !== action.payload);
            })
    }
});

export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default userSlice.reducer;