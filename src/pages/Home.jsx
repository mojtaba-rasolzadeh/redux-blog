import { useState } from 'react';
import _ from 'lodash';
import { useGetBlogsQuery } from '../api/apiSlice';

import { Categories, Blog, Blogs, Header } from '../components'
import OverlaySidebar from '../components/OverlaySidebar';
import SearchBox from '../components/SearchBox';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { data: blogs = [], isLoading, isSuccess } = useGetBlogsQuery();

    const [filtredBlogs, setFiltredBlogs] = useState(blogs);

    const handleChangeShowMenu = () => setShowMenu(!showMenu);

    const handleClose = () => setShowMenu(false);

    const handleSearch = _.debounce(
        (query) => {
            if (!query) return setFiltredBlogs(blogs);
            const blogsFiltred =
                blogs.filter(blog => blog.category.toLowerCase().includes(query.toLowerCase().trim()));
            setFiltredBlogs(blogsFiltred)
        }
        , 300)

    return (
        <div className='ease-linear duration-500'>
            <button type="button" className={`absolute hamburger ${showMenu ? 'open' : undefined} top-10 right-6 md:hidden`} onClick={handleChangeShowMenu}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
            {/* <Sidebar showMenu={showMenu} onClose={handleChangeShowMenu} /> */}
            {
                <>
                    {showMenu && <OverlaySidebar showMenu={showMenu} onClose={handleClose} />
                    }
                    <Sidebar showMenu={showMenu} onClose={handleChangeShowMenu} />

                </>
            }
            <div onClick={handleClose}>
                <Header />
                <SearchBox handleSearch={handleSearch} />
                <Categories />
                {/* <Blog /> */}
                <Blogs
                    blogs={filtredBlogs}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                />
            </div>
        </div>
    );
}

export default Home;