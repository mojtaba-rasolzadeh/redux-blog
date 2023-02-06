import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllBlogs, changeReaction, toggleShowSetting, blogDeleted } from '../reducers/blogSlice';
import { selectAllUsers } from '../reducers/userSlice';
import ShowAuthor from './ShowAuthor';
import ConfirmDelete from './ConfirmDelete';
import { toast } from 'react-toastify';
import Settings from './Settings';

const Blogs = () => {

    const blogs = useSelector(selectAllBlogs);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [blogId, setBlogId] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleOnCloseModal = () => {
        setShowModal(false)
    }

    const handleOnShowModal = (blogId) => {
        setBlogId(blogId);
        dispatch(toggleShowSetting({ id: blogId }))
        setShowModal(true);
    }

    const handleDeleteBlog = () => {
        dispatch(blogDeleted({ id: blogId }));
        toast.error("The blog was deleted!")
        setShowModal(false);
        navigate('/');
    }

    const handleClose = (path, blogId) => {
        navigate(`/${path}/${blogId}`);
        dispatch(toggleShowSetting({ id: blogId }))
    }

    const orderedBlogs = blogs.slice().sort((a, b) => b.created_at.localeCompare(a.created_at))

    const content = orderedBlogs.map((blog) => (
        <div key={blog.id} className="space-y-4 ">
            <img src={blog.img} className="w-full h-72 rounded-2xl" alt="" />
            <div className="relative space-y-4 md:max-w-sm">
                <h6 className="inline-block text-md text-white tracking-wider bg-sky-900 rounded-full px-5 py-1">{blog.category}</h6>
                <h2 className="text-lg font-bold tracking-wider text-teal-900">{blog.title}</h2>
                <p className="text-sm text-slate-500">{blog.content.substring(0, 90)}...</p>
                <div className="flex items-end justify-between space-x-4">
                    <ShowAuthor {...blog} />
                    <div className="flex space-x-4">
                        <button type='button' onClick={() => dispatch(toggleShowSetting({ id: blog.id, showSetting: true }))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-700 hover:text-sky-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {blog.showSetting && <Settings id={blog.id} showSetting={blog.showSetting} handleOnShowModal={handleOnShowModal} handleClose={handleClose} />}
            </div>
        </div>
    ))
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 mx-auto my-28 md:mt-16">
                {content}
            </div>
            {showModal && <ConfirmDelete showModal={showModal} onClose={handleOnCloseModal} deleBlog={handleDeleteBlog} />}
        </section>
    );
}

export default Blogs;