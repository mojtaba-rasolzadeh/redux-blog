import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ConfirmDelete from "./ConfirmDelete";
import OverlayShowSettings from "./OverlayShowSettings";
import Settings from "./Settings";
import ShowAuthor from "./ShowAuthor";

const SingleBlog = ({ blog }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleOnShowModal = () => {
        setShowModal(true);
        setShowSettings(false);
    };
    const handleOnCloseModal = () => {
        setShowModal(false);
        setShowSettings(false);
    };

    const handleClose = (path) => {
        navigate(path);
        setShowSettings(false);
    }


    const handleDeleteBlog = () => {
        setShowModal(false);
        navigate('/');
        toast.error("The blog was deleted!");
    }

    return (
        <div className="space-y-4 ">
            <img src={blog.img} className="w-full h-72 rounded-2xl" alt="" />
            <div className="relative space-y-4 md:max-w-sm">
                <h6 className="inline-block text-md text-white tracking-wider bg-sky-900 rounded-full px-5 py-1">{blog.category}</h6>
                <h2 className="text-lg font-bold tracking-wider text-teal-900">{blog.title}</h2>
                <p className="text-sm text-slate-500">{blog.content && blog.content.substring(0, 90)}...</p>
                <div className="flex items-end justify-between space-x-4">
                    <ShowAuthor {...blog} />
                    <div className="flex space-x-4">
                        <button type='button' className={`${showSettings && 'z-50'}`}
                            onClick={() => setShowSettings(!showSettings)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-700 hover:text-sky-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {showSettings && <Settings {...blog} handleOnShowModal={handleOnShowModal} onClose={handleClose} />}
                {showSettings && <OverlayShowSettings onClose={handleClose} />}
                {showModal && <ConfirmDelete showModal={showModal} onClose={handleOnCloseModal} deleBlog={handleDeleteBlog} />}

            </div>
        </div>
    );
}

export default SingleBlog;