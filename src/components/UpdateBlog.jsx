import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { blogUpdated } from "../reducers/blogSlice";

const UpdateBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeContent = (event) => setContent(event.target.value);

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blog.id, title, content }));
      navigate(`/blogs/${blog.id}`);
    }
  };

  return (
    <section>
      <h2>ویرایش پست</h2>
      <form autoComplete="off">
        <label htmlFor="blogTitle">عنوان پست : </label>
        <input
          type="text"
          name="title"
          id="blogTitle"
          placeholder="عنوان ..."
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor="blogContent">محتوای اصلی : </label>
        <textarea
          type="text"
          name="content"
          id="blogContent"
          rows="10"
          placeholder="محتوا ..."
          value={content}
          onChange={handleChangeContent}
        />
        <button type="button" onClick={handleSubmitForm}>
          ویرایش پست{" "}
        </button>
      </form>
    </section>
  );
};

export default UpdateBlog;
