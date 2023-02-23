import {
    createSlice,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';
import {
    apiSlice
} from '../api/apiSlice';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const extendedApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthors: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return userAdapter.setAll(initialState, responseData)
            },
            providesTags: ["USER"],
        }),
    }),
});

export const selectUsersResult = extendedApi.endpoints.getAuthors.select();

const selectAuthorsData = createSelector(selectUsersResult, (authorsResult) => authorsResult.data);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAuthors.fulfilled, userAdapter.setAll)
    //         .addCase(addAuthor.fulfilled, userAdapter.addOne)
    //         .addCase(deleteAuthorApi.fulfilled, userAdapter.removeOne)
    // }
});

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
} = userAdapter.getSelectors(state => selectAuthorsData(state) ?? initialState);

export const { useGetAuthorsQuery } = extendedApi;
export default userSlice.reducer;