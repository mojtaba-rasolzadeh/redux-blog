import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && <Header />}
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;