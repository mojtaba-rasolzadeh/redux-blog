
const HamburgerBtn = ({ showMenu, handleChangeShowMenu }) => {
    return (
        <button type="button" className={`absolute hamburger ${showMenu ? 'open' : undefined} top-10 right-6 z-10 md:hidden`} onClick={handleChangeShowMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
    );
}

export default HamburgerBtn;