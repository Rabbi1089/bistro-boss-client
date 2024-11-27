import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";




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
            path : '/shop/:category',
            element : <Shop />
        },
      ]
    },
  ]);
