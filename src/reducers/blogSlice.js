import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns-jalali";

const initialState = {
  blogs: [
    {
      id: nanoid(),
      date: sub(new Date(), {
        days: 2,
        minutes: 10,
      }).toISOString(),
      title: "ریداکس",
      content: "این یک متن آزمایشی می باشد ",
      user: "1sArP0Pg8u_Ej1mlKhWIg",
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      id: nanoid(),
      date: sub(new Date(), {
        minutes: 10,
      }).toISOString(),
      title: "ریداکس تولکیت",
      content: "این یک متن آزمایشی می باشد",
      user: "Ni_C2BaWuqidcQ9vpPl1w",
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            date: new Date().toISOString(),
            content: content,
            user: userId,
          },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    blogDeleted: (state, action) => {
      const { id } = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    reactionAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === blogId);
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);
export default blogsSlice.reducer;
export const { blogAdded, blogUpdated, blogDeleted, reactionAdded } =
  blogsSlice.actions;
