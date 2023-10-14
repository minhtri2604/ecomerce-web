/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";

const Gender = ({ gender, ...props }) => {
  const [selectedGender, setSelectedGender] = useState(gender);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        Giới tính :
      </div>
      <div className="text-[--sub-color] text-[16px] font-[500] flex-1 flex items-center gap-x-[25px]">
        <div
          onClick={props.edit ? () => handleGenderChange("male") : null}
          className={`${
            props.edit ? "cursor-pointer" : "cursor-not-allowed"
          } flex items-center gap-x-[10px]`}
        >
          {selectedGender === "male" ? (
            <MdRadioButtonChecked className="text-[22px] text-[--primary-color]" />
          ) : (
            <MdRadioButtonUnchecked className="text-[22px]" />
          )}

          <span>Nam</span>
        </div>
        <div
          onClick={props.edit ? () => handleGenderChange("female") : null}
          className={`${
            props.edit ? "cursor-pointer" : "cursor-not-allowed"
          } flex items-center gap-x-[10px]`}
        >
          {selectedGender === "female" ? (
            <MdRadioButtonChecked className="text-[22px] text-[--primary-color]" />
          ) : (
            <MdRadioButtonUnchecked className="text-[22px]" />
          )}
          <span>Nữ</span>
        </div>
        <div
          onClick={props.edit ? () => handleGenderChange("other") : null}
          className={`${
            props.edit ? "cursor-pointer" : "cursor-not-allowed"
          } flex items-center gap-x-[10px]`}
        >
          {selectedGender === "other" ? (
            <MdRadioButtonChecked className="text-[22px] text-[--primary-color]" />
          ) : (
            <MdRadioButtonUnchecked className="text-[22px]" />
          )}
          <span>Khác</span>
        </div>
      </div>
    </div>
  );
};

export default Gender;
