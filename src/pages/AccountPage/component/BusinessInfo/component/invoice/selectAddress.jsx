/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TabAddress from "./tabAddress";

const SelectAddress = ({ handleSendDataSelectAddress, dataCity, ...props }) => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  const [data, setData] = useState(null);
  const [valueInput, setValueInput] = useState("");

  const inputRef = useRef(null);

  const handleSendDataToParent = (newData) => {
    setActive(newData.active);
    setData(newData.data);

    let addressString = "";

    if (newData.data.city) {
      addressString += `${newData.data.city}`;
    }

    if (newData.data.districts) {
      if (addressString) {
        addressString += `, ${newData.data.districts}`;
      } else {
        addressString += `${newData.data.districts}`;
      }
    }

    if (newData.data.wards) {
      if (addressString) {
        addressString += `, ${newData.data.wards}`;
      } else {
        addressString += `${newData.data.wards}`;
      }
    }

    setValueInput(addressString);
    handleSendDataSelectAddress(addressString);

    if (inputRef.current) {
      inputRef.current.value = addressString;
    }
  };

  const handleSendActiveTabToParent = (data) => {
    setActiveTab(data);
  };

  const handleOpenTabAddress = () => {
    setActive(!active);
  };

  const handleClearInput = (event) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
      setValueInput("");
      setActiveTab(true);
      setActive(true);
    }
  };

  // useEffect(() => {
  //   if (dataCity === "") {
  //     inputRef.current.value = "";
  //     setValueInput("");
  //     setActiveTab(true);
  //   }
  // }, [dataCity]);

  return (
    <div className={`flex flex-col gap-y-[5px] my-[20px] relative`}>
      <div className="flex items-center gap-x-[5px]">
        <label className={`text-[--sub-color] text-[16px] font-[500]`}>
          Tỉnh/ Thành phố; Quận/ Huyện; Phường/ Xã (*)
        </label>
      </div>
      <div
        onClick={handleOpenTabAddress}
        className="border-[--sub-color] border-[1px] border-solid w-full rounded-[12px] px-[12px] py-[10px] flex items-center justify-between focus-within-input"
      >
        <input
          ref={inputRef}
          defaultValue={props.defaultValue}
          readOnly
          className={`text-[16px] text-[--sub-color] focus-input placeholder:text-[--sub-color] w-[90%]`}
          placeholder="Vui lòng chọn ..."
        />
        {valueInput && (
          <AiOutlineCloseCircle
            onClick={handleClearInput}
            className="text-[18px] cursor-pointer"
          />
        )}

        <IoIosArrowDown
          className={`${
            active ? "rotate-[180deg]" : ""
          } text-[18px] cursor-pointer transition`}
        />
      </div>
      {active && (
        <TabAddress
          handleSendDataToParent={handleSendDataToParent}
          handleSendActiveTabToParent={handleSendActiveTabToParent}
          activeTab={activeTab}
        />
      )}
    </div>
  );
};

export default SelectAddress;
