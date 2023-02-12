import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteAuthorApi } from "../../../reducers/userSlice";
import ConfirmDelete from "../../ConfirmDelete";

const Author = ({ author }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowModal = () => setShowModal(true);
    const handleDeleteAuthor = () => {
        dispatch(deleteAuthorApi(author.id));
        setShowModal(false);
        navigate('/authors');
        toast.error("The author was deleted!");
    }
    return (
        <article key={author.id} className="w-full flex items-center justify-between md:w-52">
            <div className="flex items-center space-x-3">
                <Link to={`/authors/${author.id}`}>
                    <img src={author.avatar_path} className="h-16 w-16 rounded-full border-2 border-emerald-600" alt={author.name} />
                </Link>
                <Link to={`/authors/${author.id}`}>
                    <h2 className="text-sm hover:text-slate-600">{author.name}</h2>
                </Link>
            </div>
            <button type="button" onClick={handleShowModal}>
                <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 hover:text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {showModal && <ConfirmDelete showModal={showModal} onClose={() => setShowModal(false)} text="author" deleteItem={handleDeleteAuthor} />}
        </article>
    );
}

export default Author;