import {
    createSlice,
    nanoid
} from '@reduxjs/toolkit';

const initialState = [{
        id: "ZYVvjYl33hgdgAplzN5Ef",
        name: 'mojtaba',
        avatar_path: "/src/assets/avatar-shanai.png",
    },
    {
        id: "ebk1r3TBsfoaSp676MM8P",
        name: 'asrin',
        avatar_path: "/src/assets/avatar-anisha.png",

    },
    {
        id: "i-wyWufZdoWsKSEonYKV7",
        name: 'morteza',
        avatar_path: "/src/assets/avatar-ali.png",

    },
    {
        id: "6zzNuVQHsMSgwWSundXIC",
        name: 'reza',
        avatar_path: "/src/assets/author.jpg",

    },
    {
        id: "QhBw1TyICcR9xh5fQ4NyS",
        name: 'sara',
        avatar_path: "/src/assets/author.jpg",

    },
    {
        id: "YvPoGVTj79m-twPtBLpn4",
        name: 'rozi',
        avatar_path: "/src/assets/author.jpg",

    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default userSlice.reducer;