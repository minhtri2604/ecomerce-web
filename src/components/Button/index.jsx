/* eslint-disable react/prop-types */
import { PiPencilLineDuotone } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";

export const Button = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} px-[5px] text-[16px] leading-[19px] border-[1px] border-[--primary-color] border-solid rounded-[6px] text-center py-[6px] font-[500] w-[120px] h-[36px]`}
    >
      {children}
    </div>
  );
};

export const SubButton = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} rounded-[32px] px-[34px] py-[18px] text-[24px] font-[700]`}
    >
      {children}
    </div>
  );
};

export const ButtonSmall = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} px-[24px] py-[10px] rounded-[32px] w-fit cursor-pointer`}
    >
      {children}
    </div>
  );
};

export const ButtonInfo = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} font-[500] text-[14px] w-[180px] py-[10px] text-center`}
    >
      {children}
    </div>
  );
};

export const ButtonInfoSmall = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} font-[700] text-[12px] rounded-[8px] w-[80px] py-[10px] text-center`}
    >
      {children}
    </div>
  );
};

export const ButtonEdit = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center justify-center gap-x-[5px] text-[--white-color] bg-[--primary-color] py-[10px] w-[120px] rounded-[10px] cursor-pointer hover:bg-[--white-color] hover:text-[--primary-color] border-[1px] border-solid hover:border-[--primary-color] transition`}
    >
      <PiPencilLineDuotone className="text-[18px]" />
      <span className="text-[12px] font-[700]">Chỉnh sửa</span>
    </div>
  );
};

export const ButtonDelete = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center justify-center gap-x-[5px] text-[--white-color] bg-[--title-table-color] py-[10px] w-[120px] rounded-[10px] cursor-pointer hover:bg-[--white-color] hover:text-[--primary-color] border-[1px] border-solid hover:border-[--primary-color] transition`}
    >
      <RiDeleteBin6Line className="text-[18px]" />
      <span className="text-[12px] font-[700]">Xóa</span>
    </div>
  );
};

export const ButtonAdd = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center justify-center gap-x-[5px] text-[--white-color] bg-[--primary-color] py-[10px] w-[120px] rounded-[10px] cursor-pointer hover:bg-[--white-color] hover:text-[--primary-color] border-[1px] border-solid hover:border-[--primary-color] transition`}
    >
      <IoAddCircleOutline className="text-[18px]" />
      <span className="text-[12px] font-[700]">Thêm</span>
    </div>
  );
};
