/* eslint-disable react/prop-types */
const InfoOrder = ({ dataBuy }) => {
  const totalPrice = dataBuy?.reduce(
    (i, item) =>
      (i += (item.quantity * (item.price * (100 - item.discount))) / 100),
    0
  );
  return (
    <div>
      <div className="flex-between">
        <div className="text-[20px] text-[--sub-color] font-[500]">
          Chi tiết đơn hàng - 220808KHHDH999
        </div>
        <div className="text-[14px] text-[--primary-color]">
          Dự kiến ngày giao hàng :{" "}
          <span className="font-[700]">25/12/2022</span>
        </div>
      </div>
      <div className="border-y-[1px] border-solid border-[--border-cart] py-[20px] my-[20px] flex flex-col gap-y-[20px]">
        {dataBuy?.map((item, id) => (
          <div key={item.id} className="flex-between">
            <div className="text-[14px] font-[700] text-[--sub-color] min-w-[450px]">
              {id + 1}. {item.title}
            </div>
            <div className="text-[14px] text-[--sub-color]">
              SL: {item.quantity}
            </div>
            <div className="text-[14px] font-[700] text-[--sub-color] min-w-[100px] text-right">
              {(
                item.quantity *
                ((item.price * (100 - item.discount)) / 100)
              ).toLocaleString("vi")}
              đ
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-[20px] border-b-[1px] border-solid border-[--border-cart] pb-[20px] mb-[20px]">
        <div className="flex-between">
          <div className="text-[16px] text-[--sub-color] font-[500]">
            Đơn vị vận chuyển
          </div>
          <div className="text-[14px] text-[--sub-color]">HTG</div>
        </div>
        <div className="flex-between">
          <div className="text-[16px] text-[--sub-color] font-[500]">
            Phí vận chuyển
          </div>
          <div className="text-[14px] text-[--sub-color]">Miễn phí</div>
        </div>
        <div className="flex-between">
          <div className="text-[16px] text-[--sub-color] font-[500]">
            Giảm giá áp dựng
          </div>
          <div className="text-[14px] text-[--sub-color]">-123.000đ</div>
        </div>
        <div className="flex-between">
          <div className="text-[16px] text-[--sub-color] font-[500]">
            Phương thức thanh toán
          </div>
          <div className="text-[14px] text-[--sub-color]">
            Trả tiền mặt khi nhận hàng
          </div>
        </div>
      </div>
      <div className="flex-between">
        <div className="text-[20px] text-[--sub-color] font-[700]">
          Tổng cộng
        </div>
        <div className="text-[20px] text-[--primary-color] font-[500]">
          {totalPrice.toLocaleString("vi")}đ
        </div>
      </div>
    </div>
  );
};

export default InfoOrder;
