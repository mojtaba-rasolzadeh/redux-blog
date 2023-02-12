import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import {
    getAllAuthors
} from '../services/blogsServices';

export const fetchAuthors = createAsyncThunk('/authors/fetchAuthors', async() => {
    const response = await getAllAuthors();
    return response.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthors.fulfilled, (state, action) => {
                return action.payload;
            })
    }
});

export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default userSlice.reducer;