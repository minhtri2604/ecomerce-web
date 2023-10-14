/* eslint-disable react/prop-types */
import Container from "../Container";

import attention from "../../assets/images/signup/step1/attention.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const TitlePage = ({ children, ...props }) => {
  return (
    <div
      className={`bg-[--border-color] w-full h-[38px] flex items-center ${props.className}`}
    >
      <Container>
        <div className="text-[--gray-color] text-[14px] font-[700]">
          {children}
        </div>
      </Container>
    </div>
  );
};

export const NotiPage = ({ children, ...props }) => {
  return (
    <div className={`bg-bg-notipage w-full ${props.className}`}>
      <Container>
        <div className="flex items-center gap-x-[10px] py-[7px]">
          <div className="w-[16px] h-[16px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={attention}
              alt="img"
            />
          </div>
          <div className="text-[12px] text-[--gray-color]">{children}</div>
        </div>
      </Container>
    </div>
  );
};
