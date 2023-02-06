import { useNavigate } from "react-router-dom";

import empty from "../assets/13525-empty.gif"

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            <img src={empty} className="max-w-xs w-full" alt="" />
            <h2 className="text-5xl text-sky-900 font-bold tracking-wider">Page not found</h2>
            <p className="max-w-xs text-md text-slate-600 text-center">
                The link you clicked may be broken or the page may have been removed.
            </p>
            <button type="button" className="bg-red-500 text-white tracking-wider rounded-md p-2 px-20 py-4" onClick={() => navigate('/')}>
                Go back
            </button>
        </div>
    );
}

export default NotFound;