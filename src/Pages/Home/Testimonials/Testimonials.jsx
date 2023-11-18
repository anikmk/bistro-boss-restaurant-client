import { useEffect, useState } from "react";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <section className="py-10">
            <SectionTitle
            Heading={'What Our Clinet Say'}
            subHadding={'testimonials'}
            ></SectionTitle>

            {/* swipper */}

        <div>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-2/3 text-center"
      >
        {
            reviews.map(review=><SwiperSlide
            key={review._id}
            >
                <div className="p-20">
                    <FaQuoteLeft className="text-center inline mb-4 text-5xl"></FaQuoteLeft>
                    <p className="text-[#444]">{review.details}</p>
                    <h3 className="text-xl font-semibold text-[#CD9003] mt-2 uppercase"> {review.name} </h3>
                </div>

            </SwiperSlide>)
        }
      </Swiper>
        </div>
        </section>
    );
};

export default Testimonials;