import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import useClickOutSide from "../../../../../hooks/useClickOutSide";

const dataFilter = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Tháng 02/2023",
  },
  {
    id: 3,
    title: "Tháng 01/2023",
  },
  {
    id: 4,
    title: "Tháng12/2022",
  },
];

const FilterOrder = () => {
  const [title, setTitle] = useState("Tất cả");
  const [check, setCheck] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);
  const onClose = () => {
    if (openFilter) {
      setOpenFilter(false);
    }
  };

  const filterRef = useRef(null);

  useClickOutSide(onClose, filterRef);

  const handleCheck = (item) => {
    setCheck(item.id);
    setTitle(item.title);
    setOpenFilter(false);
  };

  return (
    <div className="flex items-center w-fit gap-[30px] my-[10px] relative ">
      <div className="text-[16px] font-[500] text-[--gray-color]">
        Hiển thị:
      </div>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        ref={filterRef}
        className="flex items-center justify-between gap-[10px] bg-[--white-color] px-[16px] py-[10px] rounded-[12px] min-w-[180px]"
      >
        <span className="text-[14px] font-[500] text-[--gray-color]">
          {title}
        </span>
        <IoIosArrowDown
          className={`${
            openFilter ? "rotate-[180deg]" : ""
          } text-[20px] cursor-pointer transition`}
        />
      </div>
      {openFilter && (
        <div className="absolute top-[100%] right-0 bg-[--white-color] w-full border-[1px] border-solid border-[--primary-color] px-[15px] pt-[25px] pb-[15px] rounded-b-[20px] rounded-tl-[20px]">
          {dataFilter.map((item) => (
            <div key={item.id} className="flex items-center gap-x-[10px]">
              {check === item.id ? (
                <div
                  onClick={() => setCheck(null)}
                  className="flex items-center gap-x-[10px]"
                >
                  <MdCheckBox className="text-[20px] text-[--primary-color] cursor-pointer" />
                  <div className="text-[12px] text-[--sub-color]">
                    {item.title}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => handleCheck(item)}
                  className="flex items-center gap-x-[10px]"
                >
                  <MdCheckBoxOutlineBlank className="text-[20px] text-[--primary-color] cursor-pointer" />
                  <div className="text-[12px] text-[--sub-color]">
                    {item.title}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterOrder;
