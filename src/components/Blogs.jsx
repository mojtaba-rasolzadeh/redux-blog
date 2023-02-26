import { useGetBlogsQuery } from '../api/apiSlice';
import Spinner from './spinner';
import SingleBlog from './SingleBlog';
import EmptyList from './EmptyList';

const Blogs = ({ blogs, isLoading, isSuccess }) => {

    let content;
    if (isLoading) {
        content = <Spinner />;
    }else if(!blogs.length){
        content = <EmptyList />
    } else if (isSuccess) {
        const orderedBlogs = blogs?.slice().sort((a, b) => b.created_at && b.created_at.localeCompare(a.created_at));
        content =
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 mx-auto my-28 md:mt-16">
                {
                    orderedBlogs?.map((blog) => (
                        <SingleBlog key={blog.id} blog={blog} />
                    ))
                }
            </div>
    }

    return (
        <section>
            {content}
        </section>
    );
}

export default Blogs;