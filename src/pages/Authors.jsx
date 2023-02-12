import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackToMain from "../components/BackToMain";

import { addAuthor, deleteAuthorApi, selectAllUsers } from "../reducers/userSlice";

const Authors = () => {
    const authors = useSelector(selectAllUsers);

    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    const canSave = Boolean(author);

    const handleOnChangeAuthor = event => setAuthor(event.target.value);

    const handleSubmitForm = () => {
        if (canSave) {
            dispatch(addAuthor({
                id: nanoid(),
                name: author,
                avatar_path: "/src/assets/author.jpg"
            }));
            setAuthor("");
        }
    }

    const handleDelete = (auhtorId) => {
        dispatch(deleteAuthorApi(auhtorId));
    }

    return (
        <section>
            <div className="container mx-auto p-6">
                <BackToMain text="back to main" link="/" />
                <div className="my-12">
                    <form autoComplete="off" className="flex justify-center items-center space-x-3">
                        <input type="search" id="author" name="author" placeholder="name..." className="w-1/2 p-3 pl-5 shadow-xl border border-gray-300 rounded-sm tracking-wide focus:outline-none focus:border-gray-400" value={author} onChange={handleOnChangeAuthor} />
                        <button type="button" className="text-white tracking-wider bg-red-600 rounded-sm p-3 px-8 hover:bg-red-500 focus:outline-none" disabled={!canSave} onClick={handleSubmitForm}>Create Author</button>
                    </form>
                </div>
                <h2 className="inline-block text-4xl text-slate-900 border-b-2 border-pink-500 pb-2 ">Authors : </h2>
                <div className="flex items-center flex-wrap gap-5 mt-10">
                    {
                        authors.map((author) => (
                            <article key={author.id} className="w-full flex items-center justify-between md:w-52">
                                <div className="flex items-center space-x-3">
                                    <Link to={`/authors/${author.id}`}>
                                        <img src={author.avatar_path} className="h-16 w-16 rounded-full border-2 border-emerald-600" alt={author.name} />
                                    </Link>
                                    <Link to={`/authors/${author.id}`}>
                                        <h2 className="text-sm hover:text-slate-600">{author.name}</h2>
                                    </Link>
                                </div>
                                <button type="button" onClick={() => handleDelete(author.id)}>
                                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 hover:text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Authors;