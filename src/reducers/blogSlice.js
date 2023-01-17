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
    reducers: {}
})

export default blogsSlice.reducer;