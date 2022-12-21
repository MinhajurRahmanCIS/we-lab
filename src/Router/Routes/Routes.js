import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
        ]
    },
    {
        path: '*',
        element: <div className="text-center"><h1 className="text-5xl text-red-600">Error 404!!</h1> <p className="text-3xl text-yellow-400">Something Wrong happen!!!</p></div>
    }

]);

export default router;