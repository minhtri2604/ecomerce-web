/* eslint-disable react/prop-types */
import { useState } from "react";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import { IoIosArrowDown } from "react-icons/io";
import { PiNotepad } from "react-icons/pi";

export const ItemAddress = ({ sendDataToParent, ...props }) => {
  const handleClick = (data) => {
    sendDataToParent(data);
  };
  return (
    <div className={`${props.className} relative`}>
      <div
        onClick={props.data != null ? () => props.onClick() : null}
        className="cursor-pointer flex flex-col gap-y-[5px]"
      >
        <div className="flex items-center gap-x-[5px]">
          <div className="text-[--sub-color] text-[16px]">{props.title}</div>
        </div>
        <div
          className={`${
            props.active ? "rounded-t-[12px]" : "rounded-[12px]"
          } border-[#9b9b9b] border-[1px] border-solid flex-between px-[16px] py-[10px] focus-within-input`}
        >
          <div className="text-[16px] text-[--sub-color] focus-input">
            {props.desc}
          </div>
          <IoIosArrowDown
            className={`${
              props.active ? "rotate-[180deg]" : ""
            } text-[20px] transition`}
          />
        </div>
      </div>
      <div
        className={`${
          props.active ? "block" : "hidden"
        } absolute top-[100%] left-0 pl-[16px] pr-[8px] bg-[--white-color] border-[--sub-color] border-[1px] border-t-0 border-solid rounded-b-[12px] w-full z-[1]`}
      >
        <div className="max-h-[310px] overflow-y-scroll scroll-noti">
          {props?.data?.map((item, id) => {
            return (
              <div
                key={id}
                onClick={() => handleClick(item.name)}
                className="text-[16px] text-[--sub-color] hover:text-[--primary-color] my-[10px] cursor-pointer"
              >
                {item?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ItemAccountName = ({ ...props }) => {
  return (
    <div className={`${props.className3} flex flex-col gap-y-[5px]`}>
      <div className="flex items-center gap-x-[5px]">
        <label className={`${props.className} text-[--sub-color] text-[16px]`}>
          {props.title}
        </label>
      </div>
      <input
        className={`${props.className2} border-[--sub-color] border-[1px] border-solid text-[16px] text-[--sub-color] rounded-[12px] px-[12px] py-[10px] focus-input placeholder:text-[--sub-color]`}
        placeholder={props.placeholder}
        ref={props.refs}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autoComplete="off"
        type={props.type}
        name={props.name}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
};

export const InputDate = ({ ...props }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col gap-y-[5px]">
      <div className="flex items-center gap-x-[5px]">
        <div className="text-[--sub-color] text-[16px]">{props.title}</div>
      </div>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        locale={locale}
        format="DD/MM/YYYY"
        // picker="date"
        showToday={false}
        suffixIcon={
          <PiNotepad className="text-[28px] text-[--primary-color]" />
        }
        placeholder="dd/mm/yyyy"
        className="border-[#9b9b9b] border-[1px] border-solid text-[16px] text-[--sub-color] rounded-[12px] px-[12px] py-[8px] focus-input custom cursor-pointer"
      />
    </div>
  );
};
