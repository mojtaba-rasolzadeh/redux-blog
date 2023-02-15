import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000'
    }),
    tagTypes: ['Blog'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs',
            providesTags: ['Blog']
        }),
        getBlog: builder.query({
            query: (initialBlogId) => `/blogs/${initialBlogId}`
        }),
        addNewBlog: builder.mutation({
            query: (initialBlog) => ({
                url: '/blogs',
                method: 'POST',
                body: initialBlog
            }),
            invalidatesTags: ['Blog']
        }),
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
} = apiSlice;