import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllBlogs } from "../reducers/blogSlice";

const BlogList = () => {
  const blogs = useSelector(selectAllBlogs);

  const navigate = useNavigate();

  return (
    <section className="blog-list">
      <button
        className="full-button postRegistrationBtn"
        onClick={() => navigate("/blogs/create-blog")}
      >
        ثبت پست جدید
      </button>
      <h1>پست ها</h1>
      {blogs.map((blog) => (
        <article key={blog.id} className="blog-excerpt">
          <h2>{blog.title}</h2>
          <p className="blog-content">{blog.content.substring(0, 100)}</p>
          <Link to={`/blogs/${blog.id}`} className="button muted-button">
            دیدن کامل پست
          </Link>
        </article>
      ))}
    </section>
  );
};
export default BlogList;
