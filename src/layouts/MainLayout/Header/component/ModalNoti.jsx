/* eslint-disable react/prop-types */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { dataNoti } from "../../../../data/dataNoti";

const ModalNoti = ({ ...props }) => {
  return (
    <div
      className={`w-[363px] bg-[--white-color] modal-shadow hover-modal-noti border-left-bottom ${props.className}`}
    >
      <div className="flex-between px-[30px] pt-[30px] pb-[16px]">
        <div className="text-[14px] font-[500] text-[--sub-color]">
          Thông báo
        </div>
        <div className="text-[12px] leading-[16px] text-[--blue-color]">
          Đánh dấu đọc tất cả
        </div>
      </div>
      <div className="pr-[11px]">
        <div className="pl-[30px] pr-[11px] max-h-[500px] overflow-y-scroll scroll-noti">
          {dataNoti.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-x-[20px] py-[15px] border-y-[1px] border-solid border-[ --border-color]"
            >
              <div className="w-[71px]">
                <LazyLoadImage
                  effect="blur"
                  className="w-full"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <div className="font-[500] text-[--primary-color] text-[12px] leading-[14px]">
                  {item.promotion}
                </div>
                <div className="text-[12px] font-[500] leading-[19px] text-[--sub-color]">
                  {item.desc}
                </div>
                <div className="flex items-center">
                  <div className="w-[24px] h-[24px]">
                    <LazyLoadImage
                      effect="blur"
                      className="w-full h-full"
                      src={item.imgExpires}
                      alt={item.altExpires}
                    />
                  </div>
                  <div className="text-[--sub-color] text-[12px] leading-[14px]">
                    {item.expires}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-[20px] pb-[23px] text-[--sub-color] text-[14px] noti-shadow">
        <div>Xem tất cả thông báo &#62;&#62;</div>
      </div>
    </div>
  );
};

export default ModalNoti;
