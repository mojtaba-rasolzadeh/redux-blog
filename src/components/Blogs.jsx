import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllBlogs, fetchBlogs } from '../reducers/blogSlice';
import Spinner from './spinner';
import SingleBlog from './SingleBlog';

const BlogList = ({ orderedBlogs }) => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 mx-auto my-28 md:mt-16">
            {
                orderedBlogs.map((blog) => (
                    <SingleBlog key={blog.id} blog={blog} />
                ))
            }
        </div>
    )
}

const Blogs = () => {

    const blogs = useSelector(selectAllBlogs);
    const blogStatus = useSelector(state => state.blogs.status);
    const dispatch = useDispatch();

    const orderedBlogs = blogs.slice().sort((a, b) => b.created_at.localeCompare(a.created_at));

    let content;
    if (blogStatus === 'loading') {
        content = <Spinner />;
    } else if (blogStatus === 'completed') {
        content = <BlogList orderedBlogs={orderedBlogs} />
    }

    useEffect(() => {
        if (blogStatus === 'idle') {
            dispatch(fetchBlogs())
        }
    }, [blogStatus, dispatch]);

    return (
        <section>
            {content}
        </section>
    );
}

export default Blogs;