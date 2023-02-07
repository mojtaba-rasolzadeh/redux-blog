import {
    createSlice,
    nanoid
} from '@reduxjs/toolkit';

const initialState = {
    blogs: [{
            id: nanoid(),
            category: 'Development',
            title: '7 CSS tools you should be using',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: new Date().toISOString(),
            img: '/src/assets/designer-1.jpg',
            author: "ZYVvjYl33hgdgAplzN5Ef",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Travel',
            title: 'Milan Places That Highlight The City',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2023-01-01T07:45:25.698Z",
            img: '/src/assets/f67396fc3cfce63a28e07ebb35d974ac.jpg',
            author: "ebk1r3TBsfoaSp676MM8P",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Shopping',
            title: 'Online Shopping – An Alternative to Shopping in the Mall',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2022-12-25T07:31:34.969Z",
            img: '/src/assets/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg',
            author: "i-wyWufZdoWsKSEonYKV7",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Adventure',
            title: 'ADVENTURE IN YOU',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2022-12-10T07:31:34.969Z",
            img: '/src/assets/graphic-design-trends.png',
            author: "6zzNuVQHsMSgwWSundXIC",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Cooking',
            title: 'Loaded BBQ Baked Potatoes',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2022-11-15T07:31:34.969Z",
            img: '/src/assets/make-it-personal.jpg',
            author: "QhBw1TyICcR9xh5fQ4NyS",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Travel',
            title: 'Beyond the Beach',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2022-11-05T07:31:34.969Z",
            img: '/src/assets/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg',
            author: "YvPoGVTj79m-twPtBLpn4",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        },
        {
            id: nanoid(),
            category: 'Art',
            title: 'Art & Perception',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            created_at: "2022-10-27T07:31:34.969Z",
            img: '/src/assets/Synthwave-Postmodern.jpg',
            author: "ZYVvjYl33hgdgAplzN5Ef",
            reactions: {
                eyes: 0,
                rocket: 0,
                hooray: 0,
                dislike: 0,
                like: 0
            },
            showSetting: false
        }
    ]
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload);
            },
            prepare({
                author,
                title,
                img,
                category,
                content
            }) {
                return {
                    payload: {
                        id: nanoid(),
                        author,
                        title,
                        img,
                        category,
                        content,
                        created_at: new Date().toISOString(),
                        showSetting: false,
                        reactions: {
                            eyes: 0,
                            rocket: 0,
                            hooray: 0,
                            dislike: 0,
                            like: 0
                        }
                    }
                }
            }
        },
        blogEdited: (state, action) => {
            const {
                id,
                title,
                author,
                category,
                img,
                content
            } = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === id);
            if (existingBlog) {
                console.log(author);
                existingBlog.author = author;
                existingBlog.title = title;
                existingBlog.category = category;
                existingBlog.img = img;
                existingBlog.content = content;
            }
        },
        blogDeleted: (state, action) => {
            const {
                id
            } = action.payload;
            state.blogs = state.blogs.filter(blog => blog.id !== id);

        },
        toggleShowSetting: (state, action) => {
            const {
                id
            } = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === id);
            existingBlog.showSetting = !existingBlog.showSetting;
        },
        reactionAdded: (state, action) => {
            const {
                blogId,
                reaction
            } = action.payload;
            const existingBlog = state.blogs.find(blog => blog.id === blogId);
            if (existingBlog) {
                existingBlog.reactions[reaction]++;
            }
        }
    }
});

export const selectAllBlogs = state => state.blogs.blogs;
export const selectBlogById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId);
export default blogsSlice.reducer;
export const {
    changeReaction,
    blogAdded,
    blogEdited,
    blogDeleted,
    toggleShowSetting,
    reactionAdded
} = blogsSlice.actions;