import {
    configureStore
} from '@reduxjs/toolkit';

import blogsReducer from '../reducers/blogSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
})