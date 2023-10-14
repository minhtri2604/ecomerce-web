import { Steps } from "antd";

const TrackingOrder = () => {
  return (
    <Steps
      progressDot
      current={0}
      direction="vertical"
      items={[
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                11:30 - 24/12/2022
              </div>
              <div className="text-[14px] leading-[16px] font-[500] text-[--sub-color]">
                Giao hàng thành công - Người nhận hàng: Nguyễn văn A
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                07:30 - 24/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Đơn hàng đang giao
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                16:00 - 23/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Đơn hàng đến kho chuyển giao
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                16:00 - 22/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Đơn hàng xuất kho trung chuyển
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                22:00 - 22/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Đơn hàng xuất kho trung chuyển
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                10:30 - 22/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Chuyển giao ĐVVC
              </div>
            </div>
          ),
        },
        {
          title: (
            <div className="flex items-baseline">
              <div className="text-[14px] text-[--sub-color] min-w-[130px]">
                07:00 - 22/12/2022
              </div>
              <div className="text-[14px] leading-[16px] text-[--sub-color]">
                Người gửi đang chuẩn bị hàng
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default TrackingOrder;
