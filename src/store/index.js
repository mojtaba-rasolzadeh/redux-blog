import {
    configureStore
} from '@reduxjs/toolkit';

import blogsReducer from '../reducers/blogSlice';
import {
    apiSlice
} from '../api/apiSlice';
import userReducer, {
    fetchAuthors
} from '../reducers/userSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

store.dispatch(fetchAuthors());