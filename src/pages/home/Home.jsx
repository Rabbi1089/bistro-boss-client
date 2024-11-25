import Banner from "./banner/Banner";
import Category from "./category/Category";
import Feature from "./feature/Feature";
import PopularItem from "./popular item/PopularItem";
import Testimonial from "./testimonial/Testimonial ";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularItem />
            <Feature />
            <Testimonial />
        </div>
    );
};

export default Home;