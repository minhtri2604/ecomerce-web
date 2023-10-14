/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

import next from "../../assets/images/signup/step1/next.svg";

const BtnContinue = ({ ...props }) => {
  return (
    <div onClick={props.onClick} className={`${props.className}`}>
      <div
        className={`font-[700] text-[--white-color] ${props.classNameTitle}`}
      >
        {props.title}
      </div>
      <div className={` ${props.classNameImg}`}>
        <LazyLoadImage
          effect="blur"
          className="w-full h-full"
          src={next}
          alt="img"
        />
      </div>
    </div>
  );
};

export default BtnContinue;
