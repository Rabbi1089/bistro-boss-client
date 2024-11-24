import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/section title/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper m-8"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className=" text-4xl text-center font-sans -mt-16 uppercase text-white">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className=" text-4xl text-center font-sans -mt-16 uppercase text-white">
              pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />{" "}
            <h3 className=" text-4xl text-center font-sans -mt-16 uppercase text-white">
              soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />{" "}
            <h3 className=" text-4xl text-center font-sans -mt-16 uppercase text-white">
              dessert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className=" text-4xl text-center font-sans -mt-16 uppercase text-white">
              salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
