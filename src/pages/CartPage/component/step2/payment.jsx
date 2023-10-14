import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { TitleStar } from "../titleCart";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Quét QR khi nhận hàng.",
  },
  {
    id: 2,
    title: "Tiền mặt khi nhận hàng.",
  },
  {
    id: 3,
    title: "Cà thẻ khi nhận hàng.",
  },
];

const Payment = () => {
  const [check, setCheck] = useState(false);
  const [checkPay, setCheckPay] = useState(null);
  return (
    <div className="bg-[--white-color] rounded-[10px] px-[30px] py-[15px]">
      <div className="flex items-center gap-x-[40px]">
        <TitleStar>Hình thức vận chuyển</TitleStar>
        <div className="flex items-center gap-x-[5px]">
          {check ? (
            <MdRadioButtonChecked
              onClick={() => setCheck(false)}
              className="text-[20px] text-[--primary-color] cursor-pointer"
            />
          ) : (
            <MdRadioButtonUnchecked
              onClick={() => setCheck(true)}
              className="text-[20px] cursor-pointer"
            />
          )}

          <div className="text-[14px] text-[--sub-color]">
            Thanh toán khi nhận hàng
          </div>
        </div>
      </div>
      <div className="text-[14px] text-[--sub-color]">
        Bạn có thể thanh toán bằng{" "}
        <span className="font-[500]">tiền mặt, thẻ ngân hàng, Smartpay...</span>{" "}
        Vui lòng chọn hình thức thanh toán mong muốn:
      </div>
      <div className="flex flex-col gap-y-[10px] mt-[15px]">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-x-[10px]">
            {checkPay === item.id ? (
              <MdRadioButtonChecked
                onClick={() => setCheckPay(null)}
                className="text-[20px] text-[--primary-color] cursor-pointer"
              />
            ) : (
              <MdRadioButtonUnchecked
                onClick={() => setCheckPay(item.id)}
                className="text-[20px] cursor-pointer"
              />
            )}

            <div className="text-[14px] text-[--sub-color]">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="text-[14px] text-[--primary-color] border-y-[1px] border-solid border-[--primary-color] py-[8px] mt-[15px]">
        ***Đơn vị vận chuyển [Tên ĐVVC] sẽ thu hộ qua các hình thức thanh toán
        trên.
      </div>
    </div>
  );
};

export default Payment;
