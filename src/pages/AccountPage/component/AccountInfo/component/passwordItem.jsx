import { useRef } from "react";

/* eslint-disable react/prop-types */
const PasswordItem = ({ handleSendDataToParent, ...props }) => {
  const nameRef = useRef();

  const handleValueName = () => {
    const valueName = nameRef.current.value;
    console.log("valueName", valueName);
  };

  const handleChangePassword = () => {
    handleSendDataToParent(true);
  };

  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        {props.title}
      </div>
      <div
        className={`${
          props.edit
            ? "border-[1px] border-solid border-[--gray-color] rounded-[10px] focus-input pl-[10px] focus-within-input"
            : "border-[1px] border-solid border-[transparent]"
        } flex items-center`}
      >
        <input
          ref={nameRef}
          onChange={handleValueName}
          type="password"
          name="password"
          readOnly
          className={`text-[--sub-color] text-[16px] font-[500] flex-1 caret-[--primary-color] focus:text-[--primary-color]`}
          defaultValue={props.value || ""}
        />
        {props.edit && (
          <div
            onClick={handleChangePassword}
            className="font-[700] text-[12px] text-[--white-color] px-[12px] py-[8px] my-[2px] mr-[2px] bg-[--primary-color] rounded-[10px] w-fit cursor-pointer"
          >
            Đổi mật khẩu
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordItem;
