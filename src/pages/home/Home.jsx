import Banner from "./banner/Banner";
import Category from "./category/Category";
import Feature from "./feature/Feature";
import PopularItem from "./popular item/PopularItem";
import Testimonial from "./testimonial/Testimonial ";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner />
            <Category />
            <PopularItem />
            <Feature />
            <Testimonial />
        </div>
    );
};

export default Home;