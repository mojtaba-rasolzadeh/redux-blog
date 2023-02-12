import { useNavigate } from 'react-router-dom';

const BackToMain = ({text,link}) => {
    const navigator = useNavigate();

    return (
        <button className="flex z-50 items-center space-x-1 px-4 py-8 hover:cursor-pointer" onClick={() => navigator(link)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-900">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
            </svg>
            <h6 className="text-xl font-bold text-teal-900 tracking-wider capitalize md:text-md">{text}</h6>
        </button>
    );
}

export default BackToMain;