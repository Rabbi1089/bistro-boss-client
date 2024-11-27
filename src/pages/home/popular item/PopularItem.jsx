import SectionTitle from "../../../components/section title/SectionTitle";
import MenuItem from "../../shared/menu item/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularItem = () => {
  const [menu] = UseMenu();
  const PopularItems = menu.filter((items) => items.category === "popular");

  return (
    <section className=" mb-12 ">
      <SectionTitle
        subHeading="---Check it out---"
        heading="our popular menu"
      ></SectionTitle>
      <div className=" grid md: grid-cols-2 gap-8 my-8">
        {PopularItems.map((item) => (
          <MenuItem key={MenuItem._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularItem;
