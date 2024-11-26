import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  console.log(item);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className=" absolute right-0 mt-8 mr-8 bg-slate-700 text-white rounded-sm p-2">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
