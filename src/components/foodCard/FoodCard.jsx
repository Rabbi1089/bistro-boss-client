import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  // console.log(item);

  const handleAddToCard = (item) => {
  console.log(item);
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
            onClick={() => handleAddToCard(item)}
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
