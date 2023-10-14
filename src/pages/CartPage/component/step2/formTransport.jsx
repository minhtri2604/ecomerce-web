import { useState } from "react";
import { TitleStar } from "../titleCart";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineFieldTime } from "react-icons/ai";
import logo from "../../../../assets/images/logo/favicon.ico";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FormTransport = () => {
  const [check, setCheck] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="bg-[--white-color] rounded-[10px] px-[30px] py-[15px]">
      <div className="flex items-center gap-x-[40px]">
        <TitleStar>Hình thức vận chuyển</TitleStar>
        <div className="flex items-center gap-x-[5px]">
          {check === "normal" ? (
            <MdRadioButtonChecked
              onClick={() => setCheck(null)}
              className="text-[20px] text-[--primary-color] cursor-pointer"
            />
          ) : (
            <MdRadioButtonUnchecked
              onClick={() => setCheck("normal")}
              className="text-[20px] cursor-pointer"
            />
          )}

          <div className="text-[14px] text-[--sub-color]">Giao hàng thường</div>
        </div>
        <div className="flex items-center gap-x-[5px]">
          {check === "super" ? (
            <MdRadioButtonChecked
              onClick={() => setCheck(null)}
              className="text-[20px] text-[--primary-color] cursor-pointer"
            />
          ) : (
            <MdRadioButtonUnchecked
              onClick={() => setCheck("super")}
              className="text-[20px] cursor-pointer"
            />
          )}

          <div className="text-[14px] text-[--sub-color]">
            Giao hàng siêu tốc
          </div>
          <div className="relative">
            <BsQuestionCircle
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="text-[20px] text-[--primary-color] cursor-pointer"
            />
            {isHovered && (
              <div className="absolute bottom-[150%] left-[50%] translate-x-[-50%] w-[160px] text-[14px] leading-[18px] text-[--sub-color] border-[1px] border-solid border-[--sub-color] rounded-[10px] p-[10px] bg-[--white-color]">
                Giao hàng trong 2 giờ{" "}
                <span className="font-[700]">Điều kiện:</span> Đặt trước 14:00
                trong ngày
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-[15px] my-[10px]">
        <TbTruckDelivery className="text-[30px] text-[--primary-color]" />
        <div className="text-[16px] text-[--sub-color]">
          Dịch vụ được cung cấp bởi
        </div>
        <div className="border-[1px] border-solid border-[--primary-color] px-[25px] py-[3px] rounded-[10px]">
          <div className="w-[25px] h-[25px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={logo}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-[15px] border-y-[1px] border-solid border-[--primary-color] py-[8px]">
        <div className="text-[12px] font-[700] text-[--primary-color] border-[1px] border-solid border-[--primary-color] w-fit px-[10px] py-[3px] rounded-[10px]">
          Freeship
        </div>
        <div className="text-[14px] text-[--primary-color]">
          Giao hàng miễn phí
        </div>
        <div className="flex items-center gap-x-[5px]">
          <AiOutlineFieldTime className="text-[30px] text-[--primary-color]" />
          <div className="text-[14px] text-[--sub-color]">
            Thời gian dự kiến giao hàng{" "}
            <span className="font-[700]">27/12/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTransport;
