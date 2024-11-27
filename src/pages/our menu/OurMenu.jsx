import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import img from '../../assets/menu/dessert-bg.jpeg'
import PopularItem from '../home/popular item/PopularItem';

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={img} title = 'OUR MENU'  subTitle = 'Would you like to try a dish?'></Cover>
      <PopularItem></PopularItem>
      <Cover img={img} title = 'OUR MENU'  subTitle = 'Would you like to try a dish?'></Cover>
      <PopularItem></PopularItem>
      <Cover img={img} title = 'OUR MENU'  subTitle = 'Would you like to try a dish?'></Cover>
      <PopularItem></PopularItem>
    </div>
  );
};

export default OurMenu;
