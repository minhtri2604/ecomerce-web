/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { regexName } from "../../../helpers/regexNameSlug";

const ModalViewProduct = ({ data, handleSendDataToParent }) => {
  // eslint-disable-next-line no-unused-vars
  const [showImage, setShowImage] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleOffViewProduct = () => {
    handleSendDataToParent(null);
  };

  const handleDetailProduct = (name, id) => {
    const nameProduct = regexName(name);
    navigate(`/product-detail/${nameProduct}/${id}`);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#9595955c] z-10">
      <div className="relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[--white-color] rounded-[20px] w-[390px] p-[20px] text-center z-20">
        <AiOutlineCloseCircle
          onClick={handleOffViewProduct}
          className="absolute right-[4%] text-[30px] text-[--primary-color] cursor-pointer"
        />
        <div className="text-[--sub-color] text-[18px] mb-[10px]">
          Xem hình ảnh
        </div>
        <div className="relative">
          <Swiper
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            allowTouchMove={false}
          >
            {data.imgProduct.map((item) => (
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
            {data.imgProduct.map((item) => (
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
        <div
          onClick={() => handleDetailProduct(data?.title, data?.id)}
          className="bg-[--primary-color] w-fit mx-auto mt-[20px] text-[--white-color] text-[16px] px-[20px] py-[10px] rounded-[10px] hover:bg-[--white-color] hover:text-[--primary-color] transition border-[1px] border-solid border-[--primary-color] cursor-pointer"
        >
          Xem chi tiết sản phẩm
        </div>
      </div>
    </div>
  );
};

export default ModalViewProduct;
