import { configureStore } from '@reduxjs/toolkit';

import blogsReducer from '../reducers/blogSlice';
import userReducer from '../reducers/userSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: userReducer
    }
});