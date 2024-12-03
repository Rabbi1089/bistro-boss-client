import React from "react";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/section title/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaAddressCard, FaRemoveFormat, FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);

  const totalprice = cart.reduce((total, item) => total + item.price, 0);
  const ceilPrice = Math.ceil(totalprice)


  return (
    <div>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className=" flex justify-evenly">
        <h1 className=" text-3xl">Total orders : {cart.length}</h1>
        <h1 className=" text-3xl">Total Price : {ceilPrice}</h1>
        <button className="btn btn-info bg-yellow-600 border-none hover:bg-white">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
