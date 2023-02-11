import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogs, selectAllBlogs } from "../reducers/blogSlice";
import { selectUserById } from "../reducers/userSlice";
import { useEffect } from "react";
import Spinner from "../components/spinner";
import BackToMain from "../components/BackToMain";

const AuthorPage = () => {
    const { authorId } = useParams();
    const dispatch = useDispatch();

    const author = useSelector((state) => selectUserById(state, authorId));
    const blogStatus = useSelector(state => state.blogs.status);

    const authorBlogs = useSelector(state => {
        const allBlogs = selectAllBlogs(state);
        return allBlogs.filter(blog => blog.author === authorId);
    });

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [])

    return (
        <section>
            {
                blogStatus === 'loading' ? <Spinner /> :
                    <div className="container mx-auto p-6 space-y-10">
                        <BackToMain text="back to authors list" link="/authors" />
                        <div className="flex items-center">
                            <hr className="hidden bg-teal-700 sm:block sm:w-1/2 h-0.5" />
                            <h2 className="w-full text-2xl capitalize tracking-wide text-white bg-teal-700 text-center p-2 rounded-full">author info</h2>
                            <hr className="hidden bg-teal-700 sm:block sm:w-1/2 h-0.5" />
                        </div>
                        <div className="flex">
                            <div className="w-1/3">
                                <img src={author.avatar_path} className="rounded-md" alt={author.name} />
                            </div>
                            <div className="w-2/3 p-2 space-y-3">
                                <h5 className="text-slate-900">name : <span className="capitalize">{author.name}</span></h5>
                                <div className="">
                                    <p className="mb-3">blogs : </p>
                                    <ul className="pl-6">
                                        {
                                            authorBlogs.map((blog) => (
                                                <Link key={blog.id} to={`/blog/${blog.id}`}>
                                                    <li className="list-decimal text-sm my-1 hover:text-slate-600">
                                                        {blog.title}
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
}

export default AuthorPage;