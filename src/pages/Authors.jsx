import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllUsers } from "../reducers/userSlice";

const Authors = () => {
    const authors = useSelector(selectAllUsers);
    
    return (
        <section>
            <div className="container mx-auto p-6">
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