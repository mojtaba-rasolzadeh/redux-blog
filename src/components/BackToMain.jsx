import { Link } from "react-router-dom";

const BackToMain = ({text,link}) => {
    return (
        <div className="bg-gray-800 p-6 rounded-md">
            <Link to={link}>
                <h2 className="inline-block text-3xl text-white tracking-wide capitalize hover:text-gray-300"> {text}</h2>
            </Link>
        </div>
    );
}

export default BackToMain;