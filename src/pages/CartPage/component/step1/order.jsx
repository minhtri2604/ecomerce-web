import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ItemOder from "./itemOder";
import { TitleCart } from "../../../../components/Title";

const Order = () => {
  return (
    <div className="my-[50px]">
      <TitleCart>Đơn hàng đã đặt</TitleCart>
      <div className="flex-between">
        <div className="bg-[--white-color] p-[8px] w-[180px] rounded-[10px] flex items-center justify-between">
          <div className="text-[16px] font-[500] text-[--sub-color]">
            Tất cả
          </div>
          <MdOutlineKeyboardArrowDown className="cursor-pointer text-[20px]" />
        </div>
        <div className="flex items-center text-[--sub-color]">
          <div className="text-[16px] font-[500]">Xem tất cả đơn hàng</div>
          <MdKeyboardDoubleArrowRight />
        </div>
      </div>
      <div className="mt-[15px]">
        <ItemOder />
      </div>
    </div>
  );
};

export default Order;
