import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const [ , refetch] = useCart()
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiousSecure = useAxiousSecure();

  const handleAddToCard = () => {
    if (user && user.email) {
      console.log("object");
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiousSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your food has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          //Fetching Data Again
          refetch()
        }
      });
    } else {
      console.log(" not logged");
      Swal.fire({
        title: "Are you sure?",
        text: "To add this item you need to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 h-[520px] shadow-xl">
      <figure className="px-6 pt-6">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className=" absolute right-0 mt-8 mr-8 bg-slate-700 text-white rounded-sm p-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCard}
            className="btn btn-outline bg-slate-100  border-0 border-b-4 text-orange-500 border-orange-400 mt-4 uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
