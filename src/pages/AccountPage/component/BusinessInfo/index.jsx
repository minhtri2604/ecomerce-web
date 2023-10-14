/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useState } from "react";
import { TitleAccount } from "../../../../components/Title";
import Business from "./component/business";
import Invoice from "./component/invoice";

const BusinessInfo = () => {
  const user = useSelector((state) => state.auth.infoUser);

  const [activeTab, setActiveTab] = useState("businessInfo");

  return (
    <>
      <TitleAccount>{user?.last_name + " " + user?.first_name}</TitleAccount>
      <div className="flex-center gap-x-[20px] border-b-[1px] border-solid border-[--border-color]">
        <div
          onClick={() => setActiveTab("businessInfo")}
          className={`${
            activeTab === "businessInfo"
              ? "border-[--primary-color] text-[--primary-color]"
              : "border-transparent text-[--title-table-color]"
          } transition border-b-[3px] border-solid text-[16px] font-[500] pb-[10px] w-[40%] text-center cursor-pointer hover:text-[--primary-color] hover:border-[--primary-color]`}
        >
          Thông tin doanh nghiệp
        </div>
        <div
          onClick={() => setActiveTab("invoiceInfo")}
          className={`${
            activeTab === "invoiceInfo"
              ? "border-[--primary-color] text-[--primary-color]"
              : "border-transparent text-[--title-table-color]"
          } transition border-b-[3px] border-solid text-[16px] font-[500] pb-[10px] w-[40%] text-center cursor-pointer hover:text-[--primary-color] hover:border-[--primary-color]`}
        >
          Thông tin xuất hóa đơn
        </div>
      </div>
      {activeTab === "businessInfo" && <Business />}
      {activeTab === "invoiceInfo" && <Invoice />}
    </>
  );
};

export default BusinessInfo;
