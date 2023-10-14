import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../../../../assets/images/logo/favicon.ico";

const VoucherItem = () => {
  return (
    <div className="my-[30px] border-[1px] border-solid border-[--primary-color] rounded-[10px] w-[400px] flex items-center justify-between">
      <div className="p-[22px] bg-[--primary-color] w-fit rounded-l-[10px]">
        <div className="bg-[--white-color] rounded-[50%] p-[14px]">
          <div className="w-[28px] h-[28px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={logo}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="px-[20px] flex flex-col items-end flex-1">
        <div className="underline text-[14px] text-[--primary-color]">
          Điều kiện
        </div>
        <div className="w-full h-[8px] bg-[--border-color] rounded-[20px] my-[10px]">
          <div className="bg-voucher w-[90%] h-[8px] rounded-l-[20px]"></div>
        </div>
        <div className="text-[12px] text-[--sub-color]">90%</div>
      </div>
    </div>
  );
};

export default VoucherItem;
