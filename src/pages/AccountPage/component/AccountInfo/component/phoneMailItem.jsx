/* eslint-disable react/prop-types */
const PhoneMailItem = ({ ...props }) => {
  return (
    <div className="flex items-center">
      <div className="text-[--sub-color] text-[16px] font-[500] min-w-[160px]">
        {props.title}
      </div>
      <div className="text-[--sub-color] text-[16px] font-[500] flex-1 py-[5px]">
        {props.value}
      </div>
    </div>
  );
};

export default PhoneMailItem;
