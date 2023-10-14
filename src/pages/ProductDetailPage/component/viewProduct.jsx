/* eslint-disable react/prop-types */
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CiImageOn } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { dataProductDetail } from "../../../data/dataProductDetail";

const ViewProduct = ({ params }) => {
  // eslint-disable-next-line no-unused-vars
  const [showImage, setShowImage] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const productDeatil = dataProductDetail.find(
    (item) => item.id === +params?.id
  );

  return (
    <div className="relative w-[30%]">
      <Swiper
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        allowTouchMove={false}
      >
        {productDeatil.imgProduct.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[350px] flex flex-col items-center justify-center border-[1px] border-solid border-[--border-cart] rounded-[10px] mb-[10px]">
              {showImage ? (
                <LazyLoadImage
                  effect="blur"
                  className="w-full h-full object-cover rounded-[10px]"
                  src={item.src}
                  alt="img"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <CiImageOn className="text-[150px] text-[--border-cart]" />
                  <div className="text-[--sub-color] text-[16px]">
                    Hình ảnh đang được cập nhật
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: ".nextEl_product",
          prevEl: ".prevEl_product",
        }}
      >
        {productDeatil.imgProduct.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => setActiveIndex(item.id)}
            className="cursor-pointer"
          >
            <div
              className={`${
                activeIndex === item.id
                  ? "border-[--primary-color]"
                  : "border-[--border-cart]"
              } h-[68px] border-[1px] border-solid rounded-[10px]`}
            >
              {showImage ? (
                <LazyLoadImage
                  effect="blur"
                  className="w-full h-full object-cover rounded-[10px]"
                  src={item.src}
                  alt="img"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <CiImageOn className="text-[150px] text-[--border-cart]" />
                  <div className="text-[--sub-color] text-[16px]">
                    Hình ảnh đang được cập nhật
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <GrFormPrevious className="prevEl_product z-10 text-[20px] text-[--primary-color] cursor-pointer absolute bottom-[3%] translate-y-[-50%] left-0" />
      <GrFormNext className="nextEl_product z-10 text-[20px] text-[--primary-color] cursor-pointer absolute bottom-[3%] translate-y-[-50%] right-0" />
    </div>
  );
};

export default ViewProduct;
