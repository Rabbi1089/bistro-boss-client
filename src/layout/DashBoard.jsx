import {
  FaBars,
  FaCalendar,
  FaCalendarDay,
  FaCartArrowDown,
  FaHome,
  FaInbox,
  FaStreetView,
} from "react-icons/fa";
import { FaBagShopping, FaTimeline } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className=" flex">
      {/* sidebar */}
      <div className=" bg-yellow-600 p-4 max-w-72 min-h-screen">
        <h1 className=" text-4xl text-center my-8">
          BISTRO BOSS <br /> <span className=" text-2xl">Restaurant</span>
        </h1>
        <ul class="space-y-4">
          <li>
            <NavLink to="dashBoard/userHome">
              <div className=" flex items-center gap-2">
                <FaHome></FaHome>
                User Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashBoard/reservation">
              <div className=" flex items-center gap-2">
                <FaCalendar></FaCalendar>
                reservation
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashBoard/payment">
              <div className=" flex items-center gap-2">
                <FaBagShopping></FaBagShopping>
                payment history
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashBoard/cart">
              <div className=" flex items-center gap-2">
                <FaCartArrowDown></FaCartArrowDown>
                my cart
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashBoard/review">
              <div className=" flex items-center gap-2">
                <FaInbox></FaInbox>
                add review
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="dashBoard/booking">
              <div className=" flex items-center gap-2">
                <FaCalendarDay></FaCalendarDay>
                my booking
              </div>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <div className=" flex items-center gap-2">
                <FaHome />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Order/salad">
              <div className="flex items-center gap-2">
                <FaBars></FaBars>
                Menu
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="shop">
              <div className=" flex items-center gap-2">
                <FaBagShopping></FaBagShopping>
                Shop
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact">
              <div className=" flex items-center gap-2">
                <FaInbox></FaInbox>
                Contact
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 my-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
