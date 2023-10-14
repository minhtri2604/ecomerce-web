const ProductOrder = () => {
  return (
    <>
      <div className="border-y-[1px] border-solid border-[--border-color] my-[25px] px-[30px] pb-[20px]">
        <div className="grid grid-cols-9 pt-[20px] gap-2">
          <div className="text-[14px] font-[700] text-[--sub-color] col-span-2 two-line">
            Gel silicone làm mờ sẹo SCARmed Gel silicone làm mờ sẹo SCARmed
          </div>
          <div className="flex flex-col col-span-2">
            <span className="text-[14px] text-[--blue-color]">
              Polysiloxane ...
            </span>
            <span className="text-[14px] text-[--sub-color]">
              Hạn dùng: 36 tháng
            </span>
          </div>
          <div className="flex flex-col justify-center col-span-2">
            <span className="text-[12px] text-[--sub-color] font-[500]">
              Gel
            </span>
            <span className="text-[12px] text-[--sub-color]">
              Hộp 1 tuýp x 15g
            </span>
          </div>
          <div className="text-[14px] font-[500] text-[--sub-color] col-span-1 flex items-center">
            SL: 01
          </div>
          <div className="flex items-center justify-end gap-x-[5px] col-span-2">
            <span className="text-[12px] leading-[16px] font-[500] text-[--gray-color] line-through">
              330.000đ
            </span>
            <span className="text-[16px] font-[500] text-[--primary-color]">
              165.000đ
            </span>
          </div>
        </div>
        <div className="grid grid-cols-9 pt-[20px] gap-2">
          <div className="text-[14px] font-[700] text-[--sub-color] col-span-2 two-line">
            Gel silicone làm mờ sẹo SCARmed Gel silicone làm mờ sẹo SCARmed
          </div>
          <div className="flex flex-col col-span-2">
            <span className="text-[14px] text-[--blue-color]">
              Polysiloxane ...
            </span>
            <span className="text-[14px] text-[--sub-color]">
              Hạn dùng: 36 tháng
            </span>
          </div>
          <div className="flex flex-col justify-center col-span-2">
            <span className="text-[12px] text-[--sub-color] font-[500]">
              Gel
            </span>
            <span className="text-[12px] text-[--sub-color]">
              Hộp 1 tuýp x 15g
            </span>
          </div>
          <div className="text-[14px] font-[500] text-[--sub-color] col-span-1 flex items-center">
            SL: 01
          </div>
          <div className="flex items-center justify-end gap-x-[5px] col-span-2">
            <span className="text-[12px] leading-[16px] font-[500] text-[--gray-color] line-through">
              330.000đ
            </span>
            <span className="text-[16px] font-[500] text-[--primary-color]">
              165.000đ
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-end gap-y-[5px] px-[30px] mb-[30px]">
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Tổng tiền hàng :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block">
            665.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Phí vận chuyển :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block">
            20.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Giảm phí vận chuyển :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block">
            -20.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Voucher từ Trung Tâm Dược Phẩm :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block">
            -50.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Voucher từ Nhà cung xấp :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block">
            -15.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Tổng tiền hàng :</span>
          <span className="font-[700] text-end ml-auto min-w-[165px] block text-[--primary-color]">
            600.000đ
          </span>
        </div>
        <div className="text-[14px] flex justify-end gap-x-[105px] text-[--sub-color]">
          <span>Phương thức thanh toán :</span>
          <span className="min-w-[165px] text-end">
            Thanh toán khi nhận hàng
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductOrder;
