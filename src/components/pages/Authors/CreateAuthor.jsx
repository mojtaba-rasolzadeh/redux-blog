import { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// import { addAuthor } from "../../../reducers/userSlice";

const CreateAuthor = () => {
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    const canSave = Boolean(author);
    const handleOnChangeAuthor = event => setAuthor(event.target.value);

    // const handleSubmitForm = () => {
    //     if (canSave) {
    //         dispatch(addAuthor({
    //             id: nanoid(),
    //             name: author,
    //             avatar_path: "/src/assets/author.jpg"
    //         }));
    //         toast.success('The author was created !')
    //         setAuthor("");
    //     }
    // }

    return (
        <div className="my-12">
            <form autoComplete="off" className="flex justify-center items-center space-x-3">
                <input type="search" id="author" name="author" placeholder="name..." className="w-1/2 p-3 pl-5 shadow-xl border border-gray-300 rounded-sm tracking-wide focus:outline-none focus:border-gray-400" value={author} onChange={handleOnChangeAuthor} />
                <button type="button" className="text-white tracking-wider bg-red-600 rounded-sm p-3 px-8 hover:bg-red-500 focus:outline-none" disabled={!canSave}
                //  onClick={handleSubmitForm}
                 >Create Author</button>
            </form>
        </div>
    );
}

export default CreateAuthor;