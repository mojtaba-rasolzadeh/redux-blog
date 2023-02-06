import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { selectAllBlogs, blogAdded } from '../reducers/blogSlice';
import bg1 from '../assets/man-taking-note.png';
import { GoBack } from '../components';
import { selectAllUsers } from '../reducers/userSlice';

const CreateBlog = () => {
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuthorChange = (event) => setAuthor(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleImageChange = (event) => setImage(event.target.value);
    const handleContentChange = (event) => setContent(event.target.value);


    const canSave = [author, category, title, image, content].every(Boolean);

    const handleSubmitForm = () => {
        if (canSave) {
            dispatch(blogAdded({ author: author, category, title, image, content }));
            navigate('/');
            toast.success('The blog was created !')
            setAuthor("");
            setCategory("");
            setTitle("");
            setImage("");
            setContent("");

        }
    }

    const blogs = useSelector(selectAllBlogs);
    const blogCategory = new Set(blogs.map((blog) => blog.category));
    const uniqueBlogCategroy = [...blogCategory];

    const authors = useSelector(selectAllUsers)

    return (
        <section>
            <GoBack />
            <div className="container mx-auto mt-2 mb-10 space-y-12 flex flex-col lg:space-x-4 lg:flex-row lg:items-end">
                <div className="w-full hidden md:block lg:w-1/2">
                    <img src={bg1} alt="" />
                </div>
                <div className="w-full h-full bg-white drop-shadow-2xl rounded-lg p-8 lg:w-1/2">
                    <h2 className="inline-block text-4xl font-bold text-teal-900 tracking-wide border-b-4 pb-4 border-b-teal-500">Create</h2>
                    <form>
                        <div className="mt-10 space-y-4">
                            <div>
                                <label htmlFor="author" className="text-md font-bold text-teal-900">Author :</label>
                                <select name="author" id="author" className='w-full py-2 focus:outline-none' onChange={handleAuthorChange}>
                                    <option value="" className="text-slate-500" disabled>
                                        select author
                                    </option>
                                    {
                                        authors.map((author, index) => (
                                            <option key={index} value={author.id}>{author.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="category" className="text-md font-bold text-teal-900">Category :</label>
                                <select name="category" id="category" className='w-full py-2 focus:outline-none' onChange={handleCategoryChange}>
                                    <option value="" className="text-slate-500" disabled>
                                        select category
                                    </option>
                                    {
                                        uniqueBlogCategroy.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <input type="text" id="title" name="title" placeholder="title..." className="w-full p-3 tracking-wide border border-teal-900 rounded-md focus:outline-none focus:border-teal-500" value={title} onChange={handleTitleChange} />
                            <input type="url" alt="" placeholder="image..." className="w-full p-3 tracking-wide border border-teal-900 rounded-md focus:outline-none focus:border-teal-500" value={image} onChange={handleImageChange} />
                            <textarea id="content" name="content" rows="10" placeholder="content..." className="w-full p-3 tracking-wide border border-teal-900 rounded-md focus:outline-none focus:border-teal-500" value={content} onChange={handleContentChange} />
                            <button type="button" className={`text-xl text-white tracking-wider ${!canSave ? 'bg-teal-200' : 'bg-teal-400 hover:bg-teal-500'} p-3 w-full rounded-md`} onClick={handleSubmitForm} disabled={!canSave}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreateBlog;