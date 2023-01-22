import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { blogDeleted, selectBlogById } from "../reducers/blogSlice";

const SingleBlog = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) => selectBlogById(state, blogId));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeletedBlog = () => {
    if (blog) {
      dispatch(blogDeleted({ id: blog.id }));
      navigate("/");
    }
  };

  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش میگردی وجود نداره 😥 </h2>
      </section>
    );
  }

  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>
        <p className="blog-content">{blog.content}</p>
        <Link to={`/edit-blog/${blog.id}`} className="button">
          ویرایش پست
        </Link>
        <button className="muted-button" onClick={handleDeletedBlog}>
          حذف پست
        </button>
      </article>
    </section>
  );
};
export default SingleBlog;
