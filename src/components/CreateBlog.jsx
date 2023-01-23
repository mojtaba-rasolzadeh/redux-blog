import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { blogAdded } from "../reducers/blogSlice";
import { selectAllUsers } from "../reducers/userSlice";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  console.log(userId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const handleChangeTitle = (event) => setTitle(event.target.value);
  const handleChangeContent = (event) => setContent(event.target.value);
  const handleChangeAuthor = (event) => setUserId(event.target.value);

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogAdded(title, content,userId));
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
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
        <label htmlFor="blogAuthor">نویسنده : </label>
        <select id="blogAuthor" value={userId} onChange={handleChangeAuthor}>
          <option value="">انتخاب نویسنده</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.fullname}
            </option>
          ))}
        </select>
        <label htmlFor="blogContent">محتوای اصلی : </label>
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
