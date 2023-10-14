import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowUpRightBold, PiArrowDownRightBold } from "react-icons/pi";

const FilterList = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div
      onClick={() => setOpenFilter(!openFilter)}
      className="relative flex items-center gap-x-[80px] border-[1px] border-solid border-[--primary-color] rounded-[60px] px-[30px] py-[10px] cursor-pointer"
    >
      <div className="text-[14px] font-[500] text-[--primary-color]">
        Sắp xếp theo giá
      </div>
      <IoIosArrowDown
        className={`${
          openFilter ? "rotate-[180deg]" : ""
        } text-[20px] text-[--primary-color] transition`}
      />
      <div
        className={`${
          openFilter ? "block" : "hidden"
        } absolute top-[102%] left-0 bg-[--white-color] w-full pb-[10px] pt-[20px] px-[20px] rounded-b-[10px] z-10`}
      >
        <div className="flex items-center gap-x-[10px] py-[10px] hover:text-[--primary-color] transition">
          <div className="text-[14px]">Sắp xếp theo thứ tự tăng dần</div>
          <PiArrowUpRightBold />
        </div>
        <div className="flex items-center gap-x-[10px] py-[10px] hover:text-[--primary-color] transition">
          <div className="text-[14px]">Sắp xếp theo thứ tự giảm dần</div>
          <PiArrowDownRightBold />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
