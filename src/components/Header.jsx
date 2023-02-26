import { Link, NavLink } from "react-router-dom";

import SearchBox from './SearchBox';

const Header = () => {
    return (
        <header id="header" className="relative bg-gradient-to-r from-Violet-600 to-Violet-800 bg-purple-500">
            <div className="container mx-auto p-28">
                {/* <div className="container mx-auto space-x-4 p-6">
                    <NavLink to="/" className="text-md text-white tracking-wider hover:text-slate-200">Home</NavLink>
                    <NavLink to={`/authors`} className="text-md text-white tracking-wider hover:text-slate-200" >Authors</NavLink>
                </div> */}
                {/* <h2 className="text-5xl text-white text-center tracking-wide md:text-4xl">
                    Blog Redux
                </h2> */}
                {/* <SearchBox /> */}
            </div>
        </header>
    );
}

export default Header;