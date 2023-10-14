import { useRef } from "react";

/* eslint-disable react/prop-types */
const NameItem = ({ ...props }) => {
  const nameRef = useRef();

  const handleValueName = () => {
    const valueName = nameRef.current.value;
  };

  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        {props.title}
      </div>
      <input
        ref={nameRef}
        onChange={handleValueName}
        type="text"
        name="name"
        readOnly={props.edit ? false : true}
        className={`${
          props.edit
            ? "border-[1px] border-solid border-[--gray-color] rounded-[10px] px-[10px] focus-input"
            : "border-[1px] border-solid border-[transparent]"
        } text-[--sub-color] text-[16px] flex-1 ${props.className}`}
        defaultValue={props.value || ""}
      />
    </div>
  );
};

export default NameItem;

export const NameItemInput = ({ ...props }) => {
  // const handleValueName = () => {
  //   const valueName = props.ref.current.value;
  //   console.log("valueName", valueName);
  // };

  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        {props.title}
      </div>
      <input
        ref={props.refs}
        onChange={props.onChange}
        type="text"
        name="name"
        readOnly={props.edit ? false : true}
        className={`${
          props.edit
            ? "border-[1px] border-solid border-[--gray-color] rounded-[10px] px-[10px] focus-input"
            : "border-[1px] border-solid border-[transparent]"
        } text-[--sub-color] text-[16px] flex-1 ${props.className}`}
        defaultValue={props.value || ""}
      />
    </div>
  );
};
