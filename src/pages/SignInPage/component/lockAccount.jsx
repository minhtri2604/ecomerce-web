import Popup from "../../../components/Popup";
import { LazyLoadImage } from "react-lazy-load-image-component";

import attention from "../../../assets/images/signin/attention.svg";

const LockAccount = () => {
  return (
    <Popup className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col items-center px-[41px]">
        <div className="text-[--primary-color] text-[24px] font-[700] mt-[68px] mb-[12px]">
          Tài khoản của bạn đang tạm khóa
        </div>
        <div className="text-[--sub-color] text-[14px] max-w-[432px] text-center">
          Vì lí do quá thời gian bổ sung thông tin nên tài khoản của bạn bị tạm
          khóa. Vui lòng liên hệ đến bộ phận CSKH để được hỗ trợ ngay.
        </div>
        <div className="flex items-center gap-x-[7px] mt-[25px] mb-[16px]">
          <div className="w-[25px] h-[25px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={attention}
              alt="img"
            />
          </div>
          <div className="text-[--primary-color] text-[14px]">
            Các lí do khiến tài khoản bị khóa
          </div>
        </div>
        <div className="py-[10px] px-[24px] font-[500] text-[14px] text-[--white-color] bg-[--primary-color] rounded-[32px] w-fit mb-[16px] cursor-pointer">
          Liên hệ ngay
        </div>
      </div>
    </Popup>
  );
};

export default LockAccount;
