import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img1 from "../../../../assets/images/homepage/banner/11.svg";
import img2 from "../../../../assets/images/homepage/banner/12.svg";
import img3 from "../../../../assets/images/homepage/banner/13.svg";
import img4 from "../../../../assets/images/homepage/banner/14.svg";

const Banner = () => {
  return (
    <div className="mt-[40px] flex items-center gap-[20px] overflow-hidden">
      <div className="w-[350px] xl:w-[482px] h-[350px] xl:h-[411px] relative box-shadow-hover transition rounded-[10px]">
        <div className="w-[350px] xl:w-[482px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={img1}
            alt="img"
          />
        </div>
        <div className="absolute bottom-0 left-0 bg-[--white-color] py-[19px] pl-[25px] pr-[43px] rounded-b-[10px] h-[197px] w-[350px] xl:w-[482px] flex flex-col justify-center">
          <div className="text-[26px] leading-[20px] font-[700] text-[--primary-color]">
            THIẾT KẾ BO MẠCH TRỌN GÓI
          </div>
          <div className="text-[14px] leading-[15px] font-[700] text-[--primary-color] my-[15px]">
            Chất lượng – Uy tín – Tận tâm
          </div>
          <Link
            to={"/"}
            className="text-[12px] font-[700] text-[--primary-color] py-[6px] px-[12px] rounded-[30px] border-[3px] border-solid border-[#98c7f7] block w-fit"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
      <div className="w-[300px] xl:w-[380px] h-[350px] xl:h-[411px] flex flex-col justify-center gap-y-[18px]">
        <div className="relative h-[170px] xl:h-[196px] flex justify-end box-shadow-hover transition rounded-[10px]">
          <div className="h-[170px] xl:h-[196px] w-[160px] xl:w-[196px]">
            <LazyLoadImage
              effect="blur"
              className="h-full w-full rounded-[10px]"
              src={img2}
              alt="img"
            />
          </div>
          <div className="absolute top-0 left-0  w-[196px] h-full bg-[--white-color] pl-[12px] pr-[16px] pt-[20px] pb-[31px] rounded-l-[10px]">
            <div className="text-[15px] leading-[18px] font-[500] text-[--primary-color]">
              CHUYỂN ĐỔI SỐ 4.0
            </div>
            <div className="text-[14px] leading-[16px] text-[--primary-color] mt-[14px]">
              Chúng tôi cam kết mang lại giải pháp về chất lượng, giải quyết bài
              toán chi phí...
            </div>
          </div>
        </div>
        <div className="relative w-[300px] xl:w-[380px] h-[170px] xl:h-[196px] box-shadow-hover transition rounded-[10px]">
          <div className="w-[250px] xl:w-[293px] h-[170px] xl:h-[196px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={img3}
              alt="img"
            />
          </div>
          <div className="absolute top-0 right-0 w-[200px] h-full bg-[--white-color] pl-[16px] pr-[12px] pt-[30px] rounded-r-[10px]">
            <div className="text-[22px] font-[500] text-[--primary-color]">
              ĐẶT LỊCH KHÁM
            </div>
            <div className="text-[30px] font-[700] text-[--primary-color] mt-[14px] mb-[8px]">
              Ứng dụng
            </div>
            <div className="text-[16px] font-[700] text-[--primary-color]">
              Chăm sóc sức khoẻ
            </div>
          </div>
        </div>
      </div>
      <div className="w-[280px] h-[350px] xl:h-[411px] relative box-shadow-hover transition rounded-[10px]">
        <div className="w-[280px] h-[234px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={img4}
            alt="img"
          />
        </div>
        <div className="absolute bottom-[-1px] left-0 bg-[--white-color] h-[177px] w-full rounded-b-[10px] px-[20px] py-[11px]">
          <div className="text-[30px] font-[700] text-[--primary-color] mt-[27px]">
            GIẢI PHÁP <br /> TỰ ĐỘNG HOÁ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
