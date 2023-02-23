import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import { deleteAuthorApi } from "../../../reducers/userSlice";
import ConfirmDelete from "../../ConfirmDelete";

const Author = ({ author }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowModal = () => setShowModal(true);
    // const handleDeleteAuthor = () => {
    //     dispatch(deleteAuthorApi(author.id));
    //     setShowModal(false);
    //     navigate('/authors');
    //     toast.error("The author was deleted!");
    // }
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500 hover:text-red-600">
                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                </svg>
            </button>
            {/* {showModal && <ConfirmDelete showModal={showModal} onClose={() => setShowModal(false)} text="author" deleteItem={handleDeleteAuthor} />} */}
        </article>
    );
}

export default Author;