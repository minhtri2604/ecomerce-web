import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Title from "../../../../components/Title";

import { dataCustomer } from "../../../../data/dataCustomer";

const Customer = () => {
  return (
    <div className="mt-[50px] pt-[50px] pb-[30px] bg-[--white-color] rounded-[10px] box-shadow-hover transition">
      <Title className="text-center text-[--sub-color] ">
        Khách hàng nói gì về chúng tôi
      </Title>

      <Swiper
        slidesPerView={3}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mt-[52px] swiper-customer"
      >
        {dataCustomer.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`text-[--sub-color] flex flex-col items-center px-[40px]`}
            >
              <div className="w-[80px] h-[80px] mb-[10px]">
                <LazyLoadImage
                  effect="blur"
                  className="w-full h-full rounded-[50%]"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="text-[16px] font-[700] ">{item.name}</div>
              <div className="text-[14px] text-center">{item.comment}</div>
              <div className="text-[14px] mt-[10px]">
                <span>{item.date}</span> -{" "}
                <span className="font-[700]">{item.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customer;
