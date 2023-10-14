/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import { SubButton } from "../Button";
import successImg from "../../assets/images/signup/success/success.svg";

const NotiSuccess = ({ sendDataToParent, ...props }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/signin");
    if (sendDataToParent) {
      sendDataToParent({
        success: false,
        popup: false,
      });
    }
  };
  return (
    <div className="flex items-center gap-x-[12px] pl-[42px] pr-[50px] py-[100px] 2xl:py-[150px] mb-[20px]">
      <div className="w-[337px] h-[360px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full"
          src={successImg}
          alt="success"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[36px] font-[700] text-[--primary-color]">
          {props.title}
        </div>
        <div className="text-[16px] text-[--sub-color] font-[800] mt-[22px] mb-[6px]">
          Bắt đầu hành trình tải nghiệm của bạn tại HTGSOFT - Application
        </div>
        <div className="text-[12px] text-[--sub-color] max-w-[538px] text-center">
          Nếu có thắc mắc hoặc cần hỗ trợ thêm, vui lòng liên hệ Hotline HTGSOFT
          - <span className="text-[--primary-color]">0 287105 6839</span> hoặc
          gửi Email đến{" "}
          <span className="text-[--primary-color]">info@htgsoft.com</span> để
          được hỗ trợ giải đáp kịp thời.
        </div>

        <SubButton
          onClick={handleRedirect}
          className="bg-[--primary-color] block w-fit mt-[30px] text-[--white-color]"
        >
          Đăng nhập
        </SubButton>
      </div>
    </div>
  );
};

export default NotiSuccess;
