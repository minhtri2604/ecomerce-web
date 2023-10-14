/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

import nextStep from "../../assets/images/signup/step1/next-step.svg";
import step1 from "../../assets/images/signup/step1/icon_cart_step1.svg";
import step2 from "../../assets/images/signup/step1/icon_02.svg";
import step3 from "../../assets/images/signup/step1/icon_03.svg";

const Step = ({ ...props }) => {
  return (
    <>
      <div className="flex items-center gap-x-[10px]">
        <div className="w-[35px] h-[35px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-contain"
            src={step1}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-y-[5px] text-[--primary-color]">
          <span className="text-[16px] leading-[19px]">Bước 1</span>
          <span className="text-[14px] hidden lg:block">{props.step1}</span>
        </div>
      </div>
      <div className="w-[30px] h-[30px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full object-contain"
          src={nextStep}
          alt="arrow"
        />
      </div>
      <div className="flex items-center gap-x-[10px]">
        <div className="w-[35px] h-[35px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-contain"
            src={step2}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <span className="text-[16px] leading-[19px]">Bước 2</span>
          <span className="text-[14px] hidden lg:block">{props.step2}</span>
        </div>
      </div>
      <div className="w-[30px] h-[30px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full object-contain"
          src={nextStep}
          alt="arrow"
        />
      </div>
      <div className="flex items-center gap-x-[10px]">
        <div className="w-[35px] h-[35px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full object-contain"
            src={step3}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <span className="text-[16px] leading-[19px]">Bước 3</span>
          <span className="text-[14px] hidden lg:block">{props.step3}</span>
        </div>
      </div>
    </>
  );
};

export default Step;
