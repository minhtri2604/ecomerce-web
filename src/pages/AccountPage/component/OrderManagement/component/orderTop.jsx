const OrderTop = () => {
  return (
    <div className="bg-[--white-color] rounded-[10px]">
      <div className="text-[20px] font-[500] text-[--sub-color] pl-[30px] py-[25px]">
        Quản lý đơn hàng
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-solid border-[--border-color]">
        <div className="text-[14px] font-[500] text-[--white-color] bg-[--primary-color] rounded-bl-[10px] py-[15px] px-[15px] text-center">
          Tất cả
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Chờ xác nhận <span className="text-[--primary-color]">(1)</span>
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Chờ lấy hàng <span className="text-[--primary-color]">(1)</span>
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Đang giao <span className="text-[--primary-color]">(1)</span>
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Đã giao <span className="text-[--primary-color]">(1)</span>
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Đã hủy <span className="text-[--primary-color]">(1)</span>
        </div>
        <div className="text-[14px] font-[500] text-[--title-table-color] py-[15px] px-[15px] text-center">
          Trả hàng/ Hoàn tiền{" "}
          <span className="text-[--primary-color]">(1)</span>
        </div>
      </div>
    </div>
  );
};

export default OrderTop;
