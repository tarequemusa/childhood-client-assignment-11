import {createBrowserRouter} from "react-router-dom";

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Error from '../components/Error/Error';
import Main from "../layout/Main";
import Blogs from "../components/Blogs/Blogs";
import AddToy from "../components/pages/AddToy/AddToy";
import MyToys from "../components/pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../components/pages/AllToys/AllToys";
import MyToysDetails from "../components/pages/MyToys/MyToysDetails";
import MyToyTable from "../components/pages/MyToys/MyToyTable";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login/:id',
                element: <PrivateRoutes><MyToysDetails></MyToysDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://childhood-server-assignment-11.vercel.app/toyDetails/${ params.id }`)
            },
            {
                path: '/addtoy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: '/mytoys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            }
        ]
    },
]);
export default router;