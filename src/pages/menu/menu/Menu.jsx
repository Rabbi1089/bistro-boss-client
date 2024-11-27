import { Helmet } from "react-helmet-async";
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "./MenuCategory";
import Cover from "../../shared/cover/Cover";
import SectionTitle from "../../../components/section title/SectionTitle";


import img from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        img={img}
        title="our menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* main cover */}

      <MenuCategory items={offered}></MenuCategory>
      {/* DESSERTS */}
      <MenuCategory
        items={dessert}
        img={img}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    {/* salad */}

      <MenuCategory
        items={salad}
        img={saladImg}
        title="salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>

          {/* soup */}
      <MenuCategory
        items={soup}
        img={soupImg}
        title="soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
