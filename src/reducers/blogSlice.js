import {
    createSlice,
    nanoid
} from '@reduxjs/toolkit';

const initialState = [{
        id: nanoid(),
        date: new Date().toISOString(),
        title: "ریداکس",
        content: "این یک متن آزمایشی می باشد "
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: "ریداکس تولکیت",
        content: 'این یک متن آزمایشی می باشد'
    }
]

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        content: content,
                    }
                }
            }
        },
        blogUpdated: (state, action) => {
            const {
                id,
                title,
                content
            } = action.payload;
            const existingBlog = state.find(blog => blog.id === id);
            if (existingBlog) {
                existingBlog.title = title;
                existingBlog.content = content;
            }
        }
    }
})

export default blogsSlice.reducer;
export const {
    blogAdded,
    blogUpdated,
} = blogsSlice.actions;