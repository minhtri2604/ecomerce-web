/* eslint-disable react/prop-types */
import { GiStarSattelites } from "react-icons/gi";

const ModalOrderSuccess = ({ handleSetActive }) => {
  return (
    <>
      <div className="text-[16px] text-[--sub-color] font-[500]">
        Xác nhận đặt hàng thành công
      </div>
      <div className="flex justify-center my-[30px]">
        <GiStarSattelites className="text-[100px] text-[--primary-color]" />
      </div>
      <div className="text-[20px] text-[--sub-color] font-[500]">
        Đơn hàng của bạn đã được chuyển đến nhà cung cấp
      </div>
      <div className="text-[14px] text-[--sub-color] mt-[10px] mb-[30px]">
        Tình trạng đơn hàng chúng tôi sẽ liên tục cập nhật tại quản lý đơn hàng.
        Mọi thắc mắc vui lòng liên hệ với chúng tôi để được giải quyết kịp thời.
      </div>
      <div className="flex-between gap-x-[20px]">
        <div
          className={`border-[1px] border-solid border-[--primary-color] text-[16px] font-[500] text-[--primary-color]  rounded-[10px] text-center py-[6px] w-[50%]`}
        >
          Tiếp tục đặt hàng
        </div>
        <div
          onClick={() => handleSetActive("detailOder")}
          className={`bg-[--primary-color] text-[16px] font-[500] text-[--white-color]  rounded-[10px] text-center py-[6px] w-[50%] cursor-pointer`}
        >
          Xem xác nhận đặt hàng
        </div>
      </div>
    </>
  );
};

export default ModalOrderSuccess;
