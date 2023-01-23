import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";

const BlogList = () => {
  const blogs = useSelector(selectAllBlogs);
  const orderBlogs = blogs.slice().sort((a, b) => b.date.localeCompare(a.date));

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
      {orderBlogs.map((blog) => (
        <article key={blog.id} className="blog-excerpt">
          <h2>{blog.title}</h2>
          <div>
            <ShowTime timestamp={blog.date} />
            <ShowAuthor userId={blog.user} />
          </div>
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
