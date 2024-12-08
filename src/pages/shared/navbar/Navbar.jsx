import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const [isAdmin] = useAdmin()
  
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/Contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/dashBoard/cart">
          <button className="btn bg-gray-500 border-gray-500">
            <FaShoppingCart />
            <div className="badge badge-secondary bg-gray-500 border-gray-500">
              {cart.length}
            </div>
          </button>
        </Link>
      </li>

      <li>
        <Link to="/Order/salad">OUR SHOP</Link>
      </li>
{
user && isAdmin &&  <li>
        <Link to="/dashBoard/adminHome">Admin Home</Link>
      </li>

}
{
user && !isAdmin &&  <li>
        <Link to="/dashBoard/userHome">User Home</Link>
      </li>

}
     
      {user ? (
        <>
          <p>{user.displayName}</p>
          <li>
            <a onClick={handleLogOut}>SignOut</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-50 bg-black bg-opacity-30 text-white mx-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">Bistro-Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={handleLogOut}
            className=" btn btn-primary bg-gray-500 border-none hover:bg-red-100 hover:text-black"
          >
            SignOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
