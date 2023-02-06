import { useSelector } from "react-redux";
import { selectUserById } from "../reducers/userSlice";

const ShowAuthor = ({ author, created_at }) => {
    const user = useSelector((state) => selectUserById(state, author));
    return (
        <div className='flex items-center space-x-4'>
            <img src={user.avatar_path} className="w-14 h-14 rounded-full bg-yellow-500 text-xs text-center" alt={user.name} />
            <div className="space-y-1">
                <h6 className="text-lg text-teal-900 font-bold tracking-wide">
                    {user.name}
                </h6>
                <p className="text-sm text-slate-500">
                    {new Date(created_at).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
            </div>
        </div>
    );
}

export default ShowAuthor;