/* eslint-disable react/prop-types */
const InfoModalOrder = ({ handleChangeModal, dataBuy }) => {
  const totalPrice = dataBuy?.reduce(
    (i, item) =>
      (i += (item.quantity * (item.price * (100 - item.discount))) / 100),
    0
  );
  return (
    <>
      <div className="text-[16px] text-[--sub-color] font-[500]">
        Xác nhận đặt đơn hàng
      </div>
      <div className="mt-[25px]">
        <div className="text-[18px] font-[700] text-[--primary]">
          Thông tin đơn hàng - 220808KHHDH999
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Số lượng sản phẩm:{" "}
          <span className="text-[--primary-color] font-[700]">
            {dataBuy?.length}
          </span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Tổng thanh toán:{" "}
          <span className="text-[--primary-color] font-[700]">
            {totalPrice.toLocaleString("vi")}đ
          </span>
        </div>
      </div>
      <div className="my-[15px]">
        <div className="text-[18px] font-[700] text-[--primary]">
          Thông tin đơn hàng
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Tên khách hàng:{" "}
          <span className="text-[--primary-color] font-[700]">
            Nguyễn Văn A
          </span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Số điện thoại:{" "}
          <span className="text-[--primary-color] font-[700]">0328579658</span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Địa chỉ:{" "}
          <span className="text-[--primary-color] font-[700]">
            88, Phạm Thị Tánh, Phường 4, Quận 8 ,TP.HCM
          </span>
        </div>
      </div>
      <div>
        <div className="text-[18px] font-[700] text-[--primary]">
          Thông tin xuất hóa đơn
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Tên công ty :{" "}
          <span className="text-[--primary-color] font-[700]">Công ty ABC</span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Mã số thuế :{" "}
          <span className="text-[--primary-color] font-[700]">0000000000</span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Email :{" "}
          <span className="text-[--primary-color] font-[700]">
            trungtamduocpham@company.com
          </span>
        </div>
        <div className="text-[14px] text-[--sub-color]">
          Địa chỉ:{" "}
          <span className="text-[--primary-color] font-[700]">
            88, Phạm Thị Tánh, Phường 4, Quận 8 ,TP.HCM
          </span>
        </div>
        <div className="flex-between gap-x-[20px] mt-[25px]">
          <div
            className={`border-[1px] border-solid border-[--primary-color] text-[16px] font-[500] text-[--primary-color]  rounded-[10px] text-center py-[6px] w-[50%]`}
          >
            Tiếp tục đặt hàng
          </div>
          <div
            onClick={() => handleChangeModal(true)}
            className={`bg-[--primary-color] text-[16px] font-[500] text-[--white-color]  rounded-[10px] text-center py-[6px] w-[50%] cursor-pointer`}
          >
            Xác nhận đặt hàng
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoModalOrder;
