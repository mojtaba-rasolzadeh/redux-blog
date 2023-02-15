import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000'
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs'
        }),
        getBlog: builder.query({
            query: (initialBlogId) => `/blogs/${initialBlogId}`
        }),
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery
} = apiSlice;