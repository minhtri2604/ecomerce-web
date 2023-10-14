import TitleCart from "../titleCart";

/* eslint-disable react/prop-types */
const InfoCart = ({ dataBuy, handleSetActive }) => {
  const totalPrice = dataBuy?.reduce(
    (i, item) =>
      (i += (item.quantity * (item.price * (100 - item.discount))) / 100),
    0
  );

  return (
    <div className="w-[280px] p-[20px] bg-[--white-color] rounded-[10px]">
      <TitleCart>Thông tin giỏ hàng</TitleCart>
      <div className="flex items-start justify-between border-y-[1px] border-solid border-[--border-cart] mt-[20px] mb-[15px] py-[15px]">
        <div className="text-[14px] font-[500] text-[--sub-color]">
          Số lượng:
        </div>
        <div className="text-[--primary-color] flex flex-col items-end">
          <span className="text-[14px] font-[500]">{dataBuy?.length || 0}</span>
          <span className="text-[12px]">(+ 5 sản phẩm tặng) </span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-[20px] font-[500] text-[--sub-color]">
          Tạm tính :
        </span>
        <span className="text-[20px] font-[500] text-[--primary-color]">
          {totalPrice?.toLocaleString("vi") || 0}đ
        </span>
      </div>
      <div
        onClick={dataBuy?.length > 0 ? () => handleSetActive("pay") : null}
        className={`${
          dataBuy?.length > 0
            ? "bg-[--primary-color] cursor-pointer"
            : "cursor-not-allowed bg-[--border-cart]"
        } text-[16px] font-[500] text-[--white-color]  rounded-[10px] text-center py-[6px] mt-[20px]`}
      >
        Tiến hành thanh toán
      </div>
    </div>
  );
};

export default InfoCart;
