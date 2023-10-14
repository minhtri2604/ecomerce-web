import { LazyLoadImage } from "react-lazy-load-image-component";

import { dataLeft } from "../../../../data/dataPharmacyCenter";

import logo from "../../../../assets/images/logo/logo.svg";
import mobile from "../../../../assets/images/homepage/pharmacy-center/1.svg";

const PharmacyCenter = () => {
  return (
    <div className="my-[50px] h-[587px] bg-[--white-color] rounded-[10px] flex justify-between items-center box-shadow-hover transition px-[100px]">
      <div className="flex flex-col w-[55%] pt-[35px]">
        <div className="w-[198px] h-[48px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-contain"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="mt-[8px] mb-[20px] text-[--primary-color] text-[16px] font-[500]">
          Nhà phát triển công nghệ & giải pháp số hoá
        </div>
        <div className="mb-[24px] text-[--text-gray] text-[16px] leading-[18px] font-[500]">
          Được thành lập từ năm 2008, chúng tôi tập trung 100% cung cấp các giải
          pháp thiết kế sản phẩm phần cứng và phần mềm cho nhiều công ty hàng
          đầu thế giới trong nhiều lĩnh vực khác nhau. Công ty có trụ sở chính
          tại Việt Nam, văn phòng đại diện tại Mỹ và Pháp.
        </div>
        {dataLeft.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-x-[10px] mb-[20px] w-[80%]"
          >
            <div className="w-[15px] h-[15px]">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full"
                src={item.icon}
                alt={item.alt}
              />
            </div>
            <div className="flex-1">
              <div className="text-[--text-gray] text-[18px] leading-[20px] font-[500] mb-[8px]">
                {item.title}
              </div>
              <div className="text-[14px] leading-[18px] text-[#A7A9AC]">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center pt-[35px]">
        <div className="w-[330px] h-[300px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-contain"
            src={mobile}
            alt="mobile"
          />
        </div>
        <div className="text-[24px] font-[700] text-[--primary-color] py-[11px] px-[30px] mt-[96px] border-[4px] border-solid border-[--primary-color] rounded-[99px] w-fit pulse">
          Đăng ký ngay
        </div>
      </div>
    </div>
  );
};

export default PharmacyCenter;
