import TitleCart from "../titleCart";

const InfoCustomer = () => {
  return (
    <div className="w-[280px] p-[20px] bg-[--white-color] rounded-[10px]">
      <TitleCart>Thông tin </TitleCart>
      <div className="border-t-[1px] border-solid border-[--border-cart] pt-[20px] mt-[20px]">
        <div className="text-[14px] text-[--primary-color] font-[700]">
          Thông tin đơn hàng
        </div>
        <div className="text-[14px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Họ & tên:</span>
          <span>Nguyễn Văn A</span>
        </div>
        <div className="text-[14px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Số điện thoại:</span>
          <span>0328579658</span>
        </div>
        <div className="text-[14px] leading-[20px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Địa chỉ:</span>
          <span>88 Phạm Thị Tánh, Phường 4, Quận 8, TP.HCM</span>
        </div>
      </div>
      <div className="my-[10px]">
        <div className="text-[14px] text-[--primary-color] font-[700]">
          Thông tin xuất hóa đơn
        </div>
        <div className="text-[14px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Tên công ty:</span>
          <span>Công ty ABC</span>
        </div>
        <div className="text-[14px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Mã số thuế:</span>
          <span>0000000000</span>
        </div>
        <div className="text-[14px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Email:</span>
          <span>ABC@company.com</span>
        </div>
        <div className="text-[14px] leading-[20px] text-[--sub-color] flex gap-x-[20px]">
          <span className="min-w-[90px]">Địa chỉ:</span>
          <span>88 Phạm Thị Tánh, Phường 4, Quận 8, TP.HCM</span>
        </div>
      </div>
      <div className="text-[14px] italic text-[#F00]">
        *** Vui lòng kiểm tra lần cuối về địa chỉ nhận hàng và thông tin xuất
        hóa đơn, bạn có thể thay đổi chúng trước khi đơn hàng này giao đến đơn
        vị vận chuyển.
      </div>
      <div
        className={`border-[1px] border-solid border-[--primary-color] text-[16px] font-[500] text-[--primary-color]  rounded-[10px] text-center py-[6px] mt-[20px] cursor-pointer`}
      >
        Tiếp tục đặt hàng
      </div>
      <div
        className={`bg-[--primary-color] text-[16px] font-[500] text-[--white-color]  rounded-[10px] text-center py-[6px] mt-[10px] cursor-pointer`}
      >
        Xem đơn hàng
      </div>
    </div>
  );
};

export default InfoCustomer;
