
const Footer = () => {
    return (
        <footer className="bg-slate-900 p-12">
            <div className="container mx-auto">
                <h5 className="text-xs text-white text-center">
                    Copyright &copy; {new Date().getFullYear()}
                </h5>
            </div>
        </footer>
    );
}

export default Footer;