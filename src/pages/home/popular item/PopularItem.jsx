import { useEffect, useState } from "react";
import SectionTitle from "../../../components/section title/SectionTitle";
import MenuItem from "../../shared/menu item/MenuItem";

const PopularItem = () => {
  const [menus, setMenus] = useState([]);

  console.log(menus);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter(
          (items) => items.category === "popular"
        );
        setMenus(PopularItems);
      });
  }, []);

  return (
    <section className=" mb-12 ">
      <SectionTitle
        subHeading="---Check it out---"
        heading="our popular menu"
      ></SectionTitle>
      <div className=" grid md: grid-cols-2 gap-8 my-8">
        {menus.map((item) => (
          <MenuItem key={MenuItem._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularItem;
