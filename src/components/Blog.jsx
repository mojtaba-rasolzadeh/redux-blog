import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import { confirmAlert } from 'react-confirm-alert';


import { selectAllBlogs, changeReaction, toggleShowSetting, blogDeleted } from '../reducers/blogSlice'
import ShowAuthor from './ShowAuthor';
import { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import Settings from './Settings';
import OverlayShowSettings from './OverlayShowSettings';

const Blog = () => {
    const blogs = useSelector(selectAllBlogs);

    const [showModal, setShowModal] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    console.log(showSettings)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = (path, blogId) => {
        navigate(`/${path}/${blogId}`);
        // dispatch(toggleShowSetting({ id: blogId }));
        setShowSettings(false);
    }

    const handleOnCloseModal = () => {
        setShowModal(false);
        setShowSettings(false);
    }

    const handleOnShowModal = (blogId) => {
        // dispatch(toggleShowSetting({ id: blogId }))
        setShowModal(true);
        setShowSettings(false);
    }

    const handleDeleteBlog = () => {
        dispatch(blogDeleted({ id: blogs[0].id }));
        toast.error("The blog was deleted!")
        setShowModal(false);
        navigate('/');
    }

    const { id, category, title, content, showSetting, img } = blogs[0];

    return (
        <section>
            <div className="container hidden items-center mx-auto mt-28 space-y-8 md:flex md:flex-row md:mt-16 md:space-x-8 md:space-y-0">
                {/* col-1 */}
                <div className="md:w-1/2">
                    <img src={img} className="w-full h-80 rounded-2xl" alt="" />
                </div>
                {/* col-2 */}
                <div className="relative space-y-4 md:w-1/2">
                    <h6 className="inline-block text-2xl text-white bg-pink-500 rounded-full px-5 py-1">{category}</h6>
                    <h2 className="text-2xl font-bold tracking-wider text-teal-900">{title}</h2>
                    <p className="text-base text-slate-500">{content.substring(0, 150)}...</p>
                    <div className="flex items-end justify-between space-x-4">
                        <ShowAuthor {...blogs[0]} />
                        <div className="flex space-x-4">
                            <button type='button'
                                className='z-50'
                                // onClick={() => dispatch(toggleShowSetting({ id, showSetting: true }))}
                                onClick={() => setShowSettings(!showSettings)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-700 hover:text-sky-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        {showSettings && <OverlayShowSettings onClose={() => setShowSettings(false)} />}
                        {showSettings && <Settings id={id} showSetting={showSettings} handleOnShowModal={handleOnShowModal} handleClose={handleClose} />}

                    </div>
                </div>
            </div>
            {showModal && <ConfirmDelete showModal={showModal} onClose={handleOnCloseModal} deleBlog={handleDeleteBlog} />}
        </section>
    );
}

export default Blog;
