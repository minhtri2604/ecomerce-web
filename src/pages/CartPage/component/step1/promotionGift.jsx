import { FiGift } from "react-icons/fi";
import TitleCart from "../titleCart";

const data = [
  {
    id: 1,
    title: "Sản phẩm A",
    quantity: "1",
  },
  {
    id: 2,
    title: "Sản phẩm B",
    quantity: "2",
  },
  {
    id: 3,
    title: "Sản phẩm C",
    quantity: "3",
  },
];

const PromotionGift = () => {
  return (
    <div className="w-[280px] p-[20px] bg-[--white-color] rounded-[10px]">
      <TitleCart>Khuyến mãi - Quà tặng</TitleCart>
      <div className="mt-[24px] mb-[15px] flex flex-col gap-y-[10px]">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-[5px]">
            <FiGift className="text-[20px] text-[--primary-color]" />
            <span className="text-[--sub-color] text-[14px] font-[500]">
              x {item.quantity}
            </span>
            <span className="text-[--sub-color] text-[14px] font-[500]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[10px] border-y-[1px] border-solid border-[--border-cart] py-[15px] mb-[15px]">
        <div className="text-[10px] text-[--primary-color] font-[700] px-[6px] py-[3px] border-[1px] border-solid border-[--primary-color] rounded-[23px] w-fit flex-1">
          Hoàn 10%
        </div>
        <div className="text-[14px] text-[--sub-color] font-[500]">AYALE -</div>
        <div className="text-[12px] text-[--primary-color]">
          Hoàn 27.000đ vào ví
        </div>
      </div>
      <div className="flex items-center gap-[10px] border-b-[1px] border-solid border-[--border-cart] py-[15px]">
        <div className="text-[10px] text-[--green-color] font-[700] px-[5px] py-[3px] border-[1px] border-solid border-[--green-color] rounded-[23px] w-fit flex-1">
          Hoàn 10%
        </div>
        <div className="text-[--green-color] text-[12px] leading-[14px] max-w-[170px]">
          Miễn phí vận chuyển cho đơn hàng trên 1.000.000đ
        </div>
      </div>
      <div className="mt-[15px] flex flex-col gap-y-[10px]">
        {[...Array(2)].map((_, id) => (
          <div
            key={id}
            className="text-[12px] leading-[14px] text-[--primary-color] three-line"
          >
            Mua thêm x 1 Bổ Mắt Não Và Thần Kinh Omega 369 Coenzym Q10... để
            nhận quà tặng x 1 Bổ Mắt Não Và Thần Kinh Omega 369 Coenzym Q10...
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionGift;
