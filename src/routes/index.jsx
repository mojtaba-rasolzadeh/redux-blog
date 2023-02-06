import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog";
import CreateBlog from "../pages/CreateBlog";
import EditBlog from "../pages/EditBlog";

export const router = createBrowserRouter([{
    paht: "/",
    element: < MainLayout />,
    errorElement: <NotFound />,
    children: [{
        path: "/",
        element: < App />
    },
    {
        path:'blogs/create-blog',
        element:<CreateBlog/>
    },
    {
        path: '/blog/:blogId',
        element: <Blog />,
        // errorElement:<NotFound />
    },
    {
        path:'/edit-blog/:blogId',
        element:<EditBlog />
    }
]
}])