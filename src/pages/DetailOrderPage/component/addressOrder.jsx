/* eslint-disable react/prop-types */
import { AiOutlineMessage } from "react-icons/ai";
import { PiPencilLineDuotone } from "react-icons/pi";
import TrackingOrder from "./trackingOrder";

const AddressOrder = ({ location }) => {
  return (
    <>
      <div className="border-y-[1px] border-solid border-[--border-cart] flex">
        <div className="border-r-[1px] border-solid border-[--border-cart] w-fit py-[30px]">
          <div className="border-b-[1px] border-solid border-[--border-cart] pb-[30px] pl-[30px] pr-[20px]">
            <div className="text-[--primary-color] flex items-center gap-x-[5px]">
              <div className="text-[16px] font-[500]">Địa chỉ giao hàng</div>
              <PiPencilLineDuotone className="text-[20px]" />
            </div>
            <div className="text-[--sub-color] mt-[10px] mb-[5px] flex gap-x-[20px]">
              <span className="text-[14px] font-[500]">Nguyễn Văn A</span>
              <span className="text-[14px]">0 23456789</span>
            </div>
            <div className="text-[--sub-color] text-[14px]">
              88 Phạm Thị Tánh, Phường 4, Quận 8, TP. Hồ Chí Minh
            </div>
          </div>
          <div className="pl-[30px] pr-[20px] pt-[30px]">
            <div className="text-[--primary-color] flex items-center gap-x-[5px]">
              <div className="text-[16px] font-[500]">
                Thông tin xuất hóa đơn
              </div>
              <PiPencilLineDuotone className="text-[20px]" />
            </div>
            <div className="text-[14px] font-[500] text-[--sub-color] mt-[10px]">
              Công ty ABC
            </div>
            <div className="text-[14px] text-[--sub-color]">
              MST: 0000000000
            </div>
            <div className="text-[--sub-color] text-[14px]">
              Email: ABC@company.com
            </div>
            <div className="text-[--sub-color] text-[14px]">
              88 Phạm Thị Tánh, Phường 4, Quận 8, TP. Hồ Chí Minh
            </div>
          </div>
        </div>
        <div className="py-[30px] pl-[20px]">
          <div className="text-[16px] font-[500] text-[--primary-color] mb-[10px]">
            Địa chỉ giao hàng
          </div>
          <div className="text-[--sub-color] text-[14px] font-[500]">
            GONSA EXPRESS
          </div>
          <div className="text-[--sub-color] text-[14px]">
            Mã vận đơn : 221225 - 02568
          </div>
          <div className="mt-[30px]">
            <div className="text-[16px] font-[500] text-[--primary-color]">
              Tiến trình giao hàng
            </div>
            {location ===
              "/account/order-management/detail/being-transport" && (
              <TrackingOrder />
            )}
          </div>
        </div>
      </div>
      <div className="flex-between px-[30px] my-[15px]">
        <div className="text-[16px] font-[500] text-[--primary-color]">
          GONSA
        </div>
        <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-fit px-[16px] py-[8px] cursor-pointer">
          <AiOutlineMessage className="text-[22px]" />
        </div>
      </div>
    </>
  );
};

export default AddressOrder;
