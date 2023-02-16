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
            providesTags: (result, error, arg) => [
                'Blog',
                ...result.map(({
                    id
                }) => ({
                    type: 'Blog',
                    id
                }))
            ]
        }),
        getBlog: builder.query({
            query: (initialBlogId) => `/blogs/${initialBlogId}`,
            providesTags: (result, error, arg) => [{
                type: 'Blog',
                id: arg
            }]
        }),
        addNewBlog: builder.mutation({
            query: (initialBlog) => ({
                url: '/blogs',
                method: 'POST',
                body: initialBlog
            }),
            invalidatesTags: ['Blog'],
        }),
        editBlog: builder.mutation({
            query: (initialBlog) => ({
                url: `/blogs/${initialBlog.id}`,
                method: 'PUT',
                body: initialBlog
            }),
            invalidatesTags: (result, error, arg) => ({
                type: 'Blog',
                id: arg.id
            })
        })
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
    useEditBlogMutation
} = apiSlice;