import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Contacts from "../pages/contacts/Contacts";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashbord/cart/Cart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/Contacts",
        element: (
          <PrivateRoute>
            <Contacts></Contacts>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashBoard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
    ],
  },
]);
