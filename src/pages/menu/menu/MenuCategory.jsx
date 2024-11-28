import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menu item/MenuItem";

const MenuCategory = ({ img, title, subTitle, items }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} subTitle={subTitle} ></Cover>}

      <div className="grid md:grid-cols-2 md:gap-8 md:my-8 my-2 mx-2 md:mx-4">
        {items.map((item) => (
          <MenuItem key={MenuItem._id} item={item}></MenuItem>
        ))}
      </div>
      <div className=" flex justify-center  m-4 p-4">
        <Link to={`/order/${title}`}>
          <button
            type="button"
            className="shadow-lg border-0 border-b-4 text-2xl btn btn-outline uppercase"
          >
            order your favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
