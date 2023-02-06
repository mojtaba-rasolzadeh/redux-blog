const Header = () => {
    return (
        <header id="header" className="relative bg-gradient-to-r from-Violet-600 to-Violet-800 bg-purple-500">
            <div className="container flex justify-center items-center mx-auto p-24">
                <h2 className="text-5xl text-white text-center tracking-wide md:text-4xl">
                    Blog Redux
                </h2>
                {/* search */}
                <div className="absolute flex w-11/12 items-center bg-white rounded-xl p-3 px-5 -bottom-11 drop-shadow-2xl md:w-1/2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search By Category"
                        className="w-full px-3 py-5 focus:outline-none tracking-wider"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;