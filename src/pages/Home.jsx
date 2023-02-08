import { useState } from 'react';

import { Categories, Blog, Blogs } from '../components'
import OverlaySidebar from '../components/OverlaySidebar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleChangeShowMenu = () => setShowMenu(!showMenu);

    const handleClose = () => setShowMenu(false);

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
                <Categories />
                {/* <Blog /> */}
                <Blogs />
            </div>
        </div>
    );
}

export default Home;