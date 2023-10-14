import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { dataSignin } from "../../../data/dataSignin";

const Slide = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, EffectFade]}
      // effect={"fade"}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="rounded-[10px]"
    >
      {dataSignin.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-[full] h-[526px] relative">
            <Link to={item.url}>
              <LazyLoadImage
                effect="blur"
                className="w-full h-full"
                src={item.img}
                alt={item.alt}
              />
              <div className="absolute top-0 left-0 bottom-0 rounded-[10px] w-full h-full bg-bg-slide"></div>
              <div className="absolute top-[70%] left-[50%] translate-x-[-50%] text-[40px] leading-[42px] font-[700] text-[--white-color]">
                {item.title}
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
