/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import attention from "../../assets/images/signup/step1/attention.svg";

const NotiCheckInfo = ({ ...props }) => {
  return (
    <div
      className={`${props.className} bg-[#F0F3F2] rounded-[56px] flex items-center gap-x-[10px] py-[10px] 2xl:py-[15px] px-[15px]`}
    >
      <div className="w-[22px] h-[22px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full"
          src={attention}
          alt="img"
        />
      </div>
      <div className="text-[12px] tracking-[0.7px] text-[#3B394F] flex-1">
        {props.title}
      </div>
    </div>
  );
};

export default NotiCheckInfo;
