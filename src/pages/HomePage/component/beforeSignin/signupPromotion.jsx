import { Link } from "react-router-dom";
import Title from "../../../../components/Title";
import LazyBackgroundImage from "../../../../components/LazyBackgroundImage";

// import bgSignup from "../../../../assets/images/homepage/signup/dangky.png";

import bg from "../../../../assets/images/homepage/pharmacy-center/bg.svg";

const SignupPromotion = () => {
  return (
    <div className="h-[275px] flex-center flex-col my-[50px] bg-[--white-color] rounded-[10px] box-shadow-hover transition">
      <LazyBackgroundImage
        imageUrl={bg}
        className="flex-center flex-col bg-size rounded-[10px]"
      >
        <Title className="mb-[35px] text-[--primary-color]">
          Đăng ký ngay để nhận nhiều ưu đãi hấp dẫn
        </Title>
        <div className="flex-center gap-x-[24px]">
          <Link
            className="text-[28px] leading-[28px] text-[--primary-color] font-[500] px-[27px] py-[13px] border-[3px] border-solid border-[--primary-color] rounded-[30px] hover:bg-[--primary-color] hover:text-[--white-color] transition"
            to={"/signin"}
          >
            Đăng nhập
          </Link>
          <Link
            className="text-[28px] leading-[28px] font-[500] text-[--white-color] px-[27px] py-[13px] bg-[--primary-color] border-[3px] border-solid border-[--primary-color] rounded-[30px] hover:text-[--primary-color] hover:bg-[--white-color] transition pulse"
            to={"/signup"}
          >
            Đăng ký
          </Link>
        </div>
      </LazyBackgroundImage>
    </div>
  );
};

export default SignupPromotion;
