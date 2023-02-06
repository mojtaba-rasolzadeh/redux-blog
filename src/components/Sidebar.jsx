import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ showMenu, onClose }) => {

    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    const categries = ["all", "development", "travel", "shopping", "adventure", "cooking", "art", "create blog"];

    const handleClick = (event, index) => {
        onClose()
        setSelected(index);
        (event.target.textContent.toLowerCase() === 'create blog') && navigate('blogs/create-blog');
    }
    return (
        <div className={`fixed top-0 flex flex-col justify-between py-5 bg-white w-3/4 h-full z-50 ${showMenu ? '-translate-x-0' : '-translate-x-full'} ease-linear duration-300 sm:w-1/2 md:hidden`}>
            <div className="text-right space-y-4">
                <button type="button" className="px-4 hover:rotate-90 duration-300" onClick={onClose}>
                    <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 hover:text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col">
                    {
                        categries.map((category, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`text-md text-left capitalize tracking-wider p-2.5 px-5 ease-linear duration-300 ${selected === index ? 'bg-blue-500 text-white px-7' : 'text-zinc-500'} hover:text-white hover:bg-blue-500 hover:px-7 `}
                                onClick={(event) => handleClick(event, index)}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>
            </div>
            <p className="text-sm text-slate-500 text-center">
                Made with ❤️ mojtaba rasolzadeh
            </p>
        </div>
    );
}

export default Sidebar;

// <div className={`fixed top-0 bottom-0 w-full h-full bg-black/50 ease-linear duration-300 ${showMenu ? "opacity-100 z-50 " : 'opacity-0 -z-10 '} md:opacity-0 md:hidden`} onClick={onClose}>
//             {/* <div className={`fixed top-0 bottom-0 w-full h-full bg-black/50 ease-linear duration-300 opacity-100 z-50 md:opacity-0 md:hidden`} onClick={onClose}> */}

//             <div className={`fixed flex flex-col justify-between w-3/4 h-full py-5 bg-white sm:w-1/2 ${showMenu ? '-translate-x-0 left-0' : '-left-96 -translate-x-96'} ease-linear duration-300 md:hidden`} onClick={e => e.stopPropagation()}>
//                 <div className="text-right space-y-4">
//                     <button type="button" className="px-4 hover:rotate-90 duration-300" onClick={onClose}>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 hover:text-red-600">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                     <div className="flex flex-col">
//                         {
//                             categries.map((category, index) => (
//                                 <button
//                                     key={index}
//                                     type="button"
//                                     className={`text-md text-left capitalize tracking-wider p-2.5 px-5 ease-linear duration-300 ${selected === index ? 'bg-blue-500 text-white px-7' : 'text-zinc-500'} hover:text-white hover:bg-blue-500 hover:px-7 `}
//                                     onClick={(event) => handleClick(event, index)}
//                                 >
//                                     {category}
//                                 </button>
//                             ))
//                         }
//                     </div>
//                 </div>
//                 <p className="text-sm text-slate-500 text-center">
//                     Made with ❤️ mojtaba rasolzadeh
//                 </p>
//             </div>
//         </div>