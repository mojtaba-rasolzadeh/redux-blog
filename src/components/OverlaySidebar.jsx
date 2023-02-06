import useLockBodyScroll from "./useLockBodyScroll";

const OverlaySidebar = ({ showMenu, onClose }) => {
    useLockBodyScroll();
    return (
        <div className={`fixed ${showMenu ? 'block' : 'none'} top-0 right-0 w-full h-full bg-black/50 z-40 md:hidden`} onClick={onClose}></div>
    );
}

export default OverlaySidebar;