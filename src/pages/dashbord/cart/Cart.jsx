import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const [axiousSecure] = useAxiousSecure();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);
  const ceilPrice = Math.ceil(totalprice);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h1 className="text-3xl">Total orders : {cart.length}</h1>
        <h1 className="text-3xl">Total Price : {ceilPrice}</h1>
        {cart.length ? (
          <Link to="/dashBoard/payment">
            <button className="btn btn-info bg-yellow-600 border-none hover:bg-white">
              Pay
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-info bg-yellow-600 border-none hover:bg-white">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
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
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className=" text-red-500"></FaTrash>
                  </button>
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
