import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogs, selectAllBlogs } from "../reducers/blogSlice";
import { selectUserById } from "../reducers/userSlice";
import { useEffect } from "react";
import Spinner from "../components/spinner";

const AuthorPage = () => {
    const { authorId } = useParams();
    const dispatch = useDispatch();

    const author = useSelector((state) => selectUserById(state, authorId));
    const blogStatus = useSelector(state => state.blogs.status);
    console.log(blogStatus);
    const authorBlogs = useSelector(state => {
        const allBlogs = selectAllBlogs(state);
        return allBlogs.filter(blog => blog.author === authorId);
    });

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])

    return (
        <section>
            {
                blogStatus === 'loading' ? <Spinner /> : <div className="container mx-auto p-6 space-y-10">
                    <Link to={`/authors`}>
                        <h2 className="inline-block text-3xl text-slate-800 tracking-wide capitalize hover:text-slate-600"> back to authors list</h2>
                    </Link>
                    <div className="flex items-center">
                        <hr className="bg-teal-700 w-full h-0.5" />
                        <h2 className="w-full text-2xl capitalize tracking-wide text-white bg-teal-700 text-center p-2 rounded-full">author info</h2>
                        <hr className="bg-teal-700 w-full h-0.5" />
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

{/* <div>
                    <h5 className="inline-block text-xl text-slate-900 border-b-2 border-pink-500 pb-2">Author Name : </h5>
                    <span className="text-xl text-slate-900 tracking-wider capitalize my-6 pl-3">{author.name}</span>
                </div>
                <div className="">
                    <h5 className="inline-block text-xl text-slate-900 border-b-2 border-pink-500 pb-2">Blogs : </h5>
                    <ul className="pl-6 my-4">
                        {authorBlogs.map(blog => (
                            <li key={blog.id} className="list-decimal">
                                <Link to={`/blog/${blog.id}`} className="hover:text-slate-600">
                                    {blog.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}