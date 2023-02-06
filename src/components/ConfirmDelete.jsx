import useLockBodyScroll from "./useLockBodyScroll";

const ConfirmDelete = ({ showModal, onClose,deleBlog }) => {
    if (!showModal) return null;
    useLockBodyScroll()
    return (
        <div className='fixed z-50 w-full h-full left-0 right-0 top-0 bottom-0 bg-white/70 backdrop-blur-sm' onClick={onClose}>
            <div className="container mx-auto mt-56">
                <div className="max-w-xl mx-auto bg-sky-500 text-center p-10 space-y-5 shadow-2xl rounded-sm" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-3xl font-bold text-white tracking-wider">Are you sure?</h2>
                    <p className="text-base text-white tracking-wider">You want to delete this blog?</p>
                    <div className="flex flex-col-reverse justify-center items-center md:flex-row md:space-y-0 md:space-x-4">
                        <button type='button' className="w-40 text-sm font-thin text-white border border-white bg-amber-400  hover:bg-amber-500  p-2.5 mt-2 md:mt-0" onClick={onClose}>No</button>
                        <button type='button' className="w-40 text-sm font-thin text-white border border-white bg-red-500 hover:bg-red-600  p-2.5" onClick={deleBlog}>Yes, Delete it!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;