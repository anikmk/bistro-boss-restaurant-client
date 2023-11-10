import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'

const Category = () => {
  return (
    <section className="w-[80%] mx-auto">
      <SectionTitle
        Heading={"From 10.00am  to 10.00pm"}
        subHadding={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
        <img src={slider1} alt="" />
        <h2 className="-mt-28 text-center text-4xl uppercase text-white">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h2 className="-mt-28 text-center text-4xl uppercase text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        <h2 className="-mt-28 text-center text-4xl uppercase text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h2 className="-mt-28 text-center text-4xl uppercase text-white">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h2 className="-mt-28 text-center text-4xl uppercase text-white">soups</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
