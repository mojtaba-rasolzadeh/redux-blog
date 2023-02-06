
const OverlayShowSettings = ({ onClose }) => {
    return (
        <div className={`fixed top-0 right-0 w-full h-full z-40`} onClick={onClose} />
    );
}

export default OverlayShowSettings;