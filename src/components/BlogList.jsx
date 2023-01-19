import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <section className="blog-list">
      <button className="full-button postRegistrationBtn" style={{}}>
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
