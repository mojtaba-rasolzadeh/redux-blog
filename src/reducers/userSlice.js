import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';
import {
    apiSlice
} from '../api/apiSlice';
import {
    createAuthor,
    deleteAuthor,
    getAllAuthors
} from '../services/blogsServices';

export const extendedApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthors: builder.query({
            query: () => '/users'
        }),

    }),
});

export const selectUsersResult = extendedApi.endpoints.getAuthors.select();
const emptyUsers = [];

export const selectAllUsers = createSelector(
    selectUsersResult,
    (usersResult) => usersResult?.data ?? emptyUsers
);

export const selectUserById = createSelector(
    selectAllUsers,
    (state, userId) => userId,
    (users, userId) => users.find(user => user.id === userId)
);

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const fetchAuthors = createAsyncThunk('/authors/fetchAuthors', async () => {
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

// export const {
//     selectAll: selectAllUsers,
//     selectById: selectUserById,
// } = userAdapter.getSelectors(state => state.users);

export const { useGetAuthorsQuery } = extendedApi;
export default userSlice.reducer;