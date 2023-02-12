import { useSelector } from "react-redux";

import BackToMain from "../components/BackToMain";
import Author from "../components/pages/Authors/Author";
import { selectAllUsers } from "../reducers/userSlice";
import CreateAuthor from "../components/pages/Authors/CreateAuthor";

const Authors = () => {
    const authors = useSelector(selectAllUsers);
    return (
        <section>
            <div className="container mx-auto p-6">
                <BackToMain text="back to main" link="/" />
                <CreateAuthor />
                <h2 className="inline-block text-4xl text-slate-900 border-b-2 border-pink-500 pb-2 ">Authors : </h2>
                <div className="flex items-center flex-wrap gap-5 mt-10">
                    {
                        authors.map((author) => (
                            <Author key={author.id} author={author} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Authors;