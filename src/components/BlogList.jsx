import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { fetchBlogs, selectAllBlogs } from "../reducers/blogSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector(selectAllBlogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const orderBlogs = blogs.slice().sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogs());
    }
  }, [blogStatus,dispatch]);

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
          <ReactionButtons blog={blog} />
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
