import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useGetBlogsQuery } from '../api/apiSlice';

import { Categories, Blog, Blogs, Header } from '../components'
import OverlaySidebar from '../components/OverlaySidebar';
import SearchBox from '../components/SearchBox';
import Sidebar from '../components/Sidebar';
import EmptyList from '../components/EmptyList';
import { useNavigate } from 'react-router-dom';
import HamburgerBtn from '../components/HamburgerBtn';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);

    const { data: blogsList = [], isLoading, isSuccess } = useGetBlogsQuery();

    const categries = ["all", ...new Set(blogsList.map(blog => blog.category)), "create blog"];

    const [blogs, setBlogs] = useState([]);

    const handleChangeShowMenu = () => setShowMenu(!showMenu);

    const handleClose = () => setShowMenu(false);

    const handleFilteredBlogs = (category, index) => {
        setSelected(index);
        (category.toLowerCase() === 'create blog') && navigate('blogs/create-blog');

        if (category.toLowerCase() === 'all') {
            setBlogs(blogsList);
            return
        }

        const filtreredBlogs = blogsList.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
        setBlogs(filtreredBlogs);
    }

    const handleSearch = _.debounce(
        (query) => {
            if (!query) return setBlogs(blogsList);
            const filtreredBlogs =
                blogsList.filter(blog => blog.category.toLowerCase().includes(query.toLowerCase().trim()));
            setBlogs(filtreredBlogs)
        }
        , 300)

    useEffect(() => {
        setBlogs(blogsList);
    }, [blogsList]);

    return (
        <div className='ease-linear duration-500'>

            <HamburgerBtn showMenu={showMenu} handleChangeShowMenu={handleChangeShowMenu} />
            {
                <>
                    {showMenu && <OverlaySidebar showMenu={showMenu} onClose={handleClose} />}
                    <Sidebar showMenu={showMenu} onClose={handleChangeShowMenu} />
                </>
            }
            <div onClick={handleClose}>
                <Header />
                <SearchBox handleSearch={handleSearch} />
                <Categories categries={categries} selected={selected} handleFilteredBlogs={handleFilteredBlogs} />
                {/* <Blog /> */}
                <Blogs
                    blogs={blogs}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                />
            </div>
        </div>
    );
}

export default Home;