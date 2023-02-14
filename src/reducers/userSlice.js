import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit';
import {
    createAuthor,
    deleteAuthor,
    getAllAuthors
} from '../services/blogsServices';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

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
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthors.fulfilled, userAdapter.setAll)
            .addCase(addAuthor.fulfilled, userAdapter.addOne)
            .addCase(deleteAuthorApi.fulfilled, userAdapter.removeOne)
    }
});

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
} = userAdapter.getSelectors(state => state.users);

export default userSlice.reducer;