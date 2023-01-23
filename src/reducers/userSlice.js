import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = [{
        id: "1",
        fullname: "مجتبی رسول زاده"
    },
    {
        id: "2",
        fullname: "اسرین رسول زاده"
    },
    {
        id: "3",
        fullname: "رزی رسول زاده"
    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);