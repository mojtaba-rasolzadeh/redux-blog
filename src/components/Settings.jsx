import useLockBodyScroll from "./useLockBodyScroll";

const Settings = ({id, handleOnShowModal, onClose }) => {
    useLockBodyScroll();
    return (
        // <div className="relative">
            <div className={`absolute flex flex-col right-0 bottom-9 w-20 bg-white shadow-2xl rounded-sm py-2 ease-out z-50`}>
                <button onClick={() => onClose(`/blog/${id}`)} className="text-sm text-start tracking-wider p-2 py-2 px-4 hover:bg-slate-100">Veiw</button>
                <button onClick={() => onClose(`/edit-blog/${id}`)} className="text-sm text-start tracking-wider p-2 py-2 px-4 hover:bg-slate-100">Edit</button>
                <button onClick={handleOnShowModal} className="text-sm text-start tracking-wider p-2 py-2 px-4 hover:bg-slate-100">Delete</button>
            </div>
        // </div>
    );
}

export default Settings;