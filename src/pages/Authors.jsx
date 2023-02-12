import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackToMain from "../components/BackToMain";

import { selectAllUsers } from "../reducers/userSlice";

const Authors = () => {
    const authors = useSelector(selectAllUsers);
    
    return (
        <section>
            <div className="container mx-auto p-6">
                <BackToMain text="back to main" link="/" />
                <div className="my-12">
                    <form className="flex justify-center items-center space-x-3">
                        <input type="text" id="author" name="author" placeholder="name..." className="w-1/2 p-3 pl-5 shadow-xl border border-gray-300 rounded-sm tracking-wide focus:outline-none focus:border-gray-400"/>
                        <button type="button" className="text-white tracking-wider bg-red-600 rounded-sm p-3 px-8 hover:bg-red-500 focus:outline-none">Create Author</button>
                    </form>
                </div>
                <h2 className="inline-block text-4xl text-slate-900 border-b-2 border-pink-500 pb-2 ">Authors : </h2>
                <div className="flex items-center flex-wrap gap-5 mt-10">
                    {
                        authors.map((author) => (
                            <article key={author.id} className="w-40 flex items-center space-x-3 md:w-52">
                                <Link to={`/authors/${author.id}`}>
                                    <img src={author.avatar_path} className="h-16 w-16 rounded-full border-2 border-emerald-600" alt={author.name} />
                                </Link>
                                <Link to={`/authors/${author.id}`}>
                                    <h2 className="text-sm hover:text-slate-600">{author.name}</h2>
                                </Link>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Authors;