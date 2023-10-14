import { TitleAccount } from "../../../../components/Title";
import search from "../../../../assets/images/header/search.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import VoucherItem from "./component/voucherItem";
import Promotions from "./component/promotions";

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("center");
  return (
    <>
      <div className="bg-[--white-color] rounded-[10px] py-[20px] px-[30px]">
        <TitleAccount>Quản lý voucher</TitleAccount>
        <div className="my-[20px] border-t-[1px] border-solid border-[--border-cart]">
          <div className="flex-between px-[20px] mt-[20px]">
            <div
              onClick={() => setActiveTab("center")}
              className={`${
                activeTab === "center"
                  ? "text-[--primary-color] border-[--primary-color]"
                  : "text-[--border-cart] border-[--border-cart]"
              } w-[360px] border-[1px] border-solid text-[16px] font-[500] text-center py-[10px] rounded-[60px] cursor-pointer transition`}
            >
              Voucher từ Trung Tâm Dược Phẩm
            </div>
            <div
              onClick={() => setActiveTab("salesman")}
              className={`${
                activeTab === "salesman"
                  ? "text-[--primary-color] border-[--primary-color]"
                  : "text-[--border-cart] border-[--border-cart]"
              } text-[--border-cart] w-[360px] border-[1px] border-solid border-[--border-cart] text-[16px] font-[500] text-center py-[10px] rounded-[60px] cursor-pointer transition`}
            >
              Voucher từ Nhà Bán Hàng
            </div>
          </div>
        </div>
        <div className="flex items-center bg-[#F1F2F2] rounded-[60px] w-[60%] mx-auto">
          <div className="w-[20px] h-[20px] ml-[14px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={search}
              alt="icon search"
            />
          </div>
          <input
            className="text-[16px] text-[--sub-color] py-[10px] px-[10px] flex-1"
            placeholder="Tìm kiếm tất cả"
            autoComplete="off"
          />
        </div>
        {activeTab === "center" && <VoucherItem />}
      </div>
      <Promotions />
    </>
  );
};

export default Voucher;
