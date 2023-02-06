import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categries = ["all", "development", "travel", "shopping", "adventure", "cooking", "art", "create blog"];

const Categories = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(0);

    const handleClick = (event, index) => {
        setSelected(index);
        (event.target.textContent.toLowerCase() === 'create blog') && navigate('blogs/create-blog');
    }
    return (
        <section>
            <div className="container hidden justify-center items-center mx-auto mt-24 md:flex md:flex-wrap">
                {
                    categries.map((category, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`text-md capitalize tracking-wider p-2.5 rounded-full ${selected === index ? 'bg-blue-500 text-white' : 'text-zinc-500'} hover:text-white hover:bg-blue-500 md:px-10`}
                            onClick={(event) => handleClick(event, index)}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
        </section>
    );
}

export default Categories;