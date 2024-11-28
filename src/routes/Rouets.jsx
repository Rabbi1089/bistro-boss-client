import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/Order/order/Order";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home />
        },
        {
            path : '/menu',
            element : <Menu />
        },
        {
            path : '/order/:category',
            element :<Order />
        },
      ]
    },
  ]);
