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
        addNewBlog: builder.mutation({
            query: (initialBlog) => ({
                url: '/blogs',
                method: 'POST',
                body: initialBlog
            })
        }),
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
} = apiSlice;