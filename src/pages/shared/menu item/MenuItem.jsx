
const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className=" flex gap-2">
     <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt=""  />
      <div className="">
        <h1>{name}</h1>
        <p>{recipe}</p>
      </div>
      <p className=" text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
