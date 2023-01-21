import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { blogAdded } from "../reducers/blogSlice";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeContent = (event) => setContent(event.target.value);

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogAdded(title, content));
      setTitle("");
      setContent("");
      navigate('/')
    }
  };

  return (
    <section>
      <h2>پست جدید</h2>
      <form autoComplete="off">
        <label htmlFor="blogTitle">عنوان پست : </label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          placeholder="عنوان ..."
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor="blog-content">محتوای اصلی : </label>
        <textarea
          id="blogContent"
          name="blogContent"
          placeholder="محتوا ..."
          rows="10"
          value={content}
          onChange={handleChangeContent}
        />
        <button
          type="button"
          className="full-button"
          onClick={handleSubmitForm}
        >
          دخیره پست
        </button>
      </form>
    </section>
  );
};
export default CreateBlog;
