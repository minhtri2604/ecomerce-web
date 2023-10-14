import { LazyLoadImage } from "react-lazy-load-image-component";

import key from "../../assets/images/signup/modal-otp/key.svg";
import logo from "../../assets/images/signup/modal-otp/logo.svg";

/* eslint-disable react/prop-types */
const Popup = ({ children, ...props }) => {
  return (
    <>
      <div
        className={`bg-[--white-color] rounded-[130px] border-[1px] border-solid border-[--sub-color] ${props.className}`}
      >
        <div className="border-[3px] border-solid border-[--primary-color] rounded-[130px] my-[20px] mx-[23px]">
          {children}
        </div>
        <div className="absolute top-[9%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[124px] h-[124px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={key}
            alt="key"
          />
        </div>
        <div className="absolute top-[13%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[22px] h-[22px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full animation-earth"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
