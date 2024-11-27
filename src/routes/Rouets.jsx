import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import OurMenu from "../pages/our menu/OurMenu";



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
            path : '/ourMenu',
            element : <OurMenu />
        }
      ]
    },
  ]);
