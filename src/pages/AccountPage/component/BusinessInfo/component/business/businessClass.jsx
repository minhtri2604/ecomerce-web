/* eslint-disable react/prop-types */
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { dataAccountClass } from "../../../../../../data/dataBussinessInfo";

const BusinessClass = ({ sendDataBussinessClass }) => {
  const [active, setActive] = useState(false);
  const [accountClass, setAccountClass] = useState("Nhà thuốc");

  const handleClick = (title) => {
    setAccountClass(title);
    sendDataBussinessClass(title);
    setActive(false);
  };

  return (
    <div className="my-[30px]">
      <div className="business-info">Phân loại tài khoản doanh nghiệp</div>
      <div
        className={`${
          active ? "rounded-t-[12px]" : "rounded-[12px]"
        } flex-between bg-[--primary-color] relative transition z-[1]`}
      >
        <div
          onClick={() => setActive(!active)}
          className="flex-between w-full cursor-pointer px-[16px] py-[10px]"
        >
          <div className="text-[16px] font-[500] text-[--white-color]">
            {accountClass}
          </div>
          <IoIosArrowDown
            className={`${
              active ? "rotate-[180deg]" : ""
            } text-[25px] text-[--white-color] transition`}
          />
        </div>
        <div
          className={`${
            active ? "block" : "hidden"
          } transition absolute top-[100%] left-0 bg-[--white-color] w-full border-[1px] border-t-0 border-solid border-[--primary-color] rounded-b-[12px]`}
        >
          {dataAccountClass.map((item) => (
            <div
              onClick={() => handleClick(item.title)}
              key={item.id}
              className="text-[16px] text-[--sub-color] py-[10px] hover:text-[--white-color] hover:bg-[--primary-color] hover:last:rounded-b-[12px] transition px-[16px] cursor-pointer"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessClass;
