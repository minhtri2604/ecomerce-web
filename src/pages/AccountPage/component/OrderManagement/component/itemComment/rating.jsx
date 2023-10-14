/* eslint-disable react/prop-types */
import { Rate } from "antd";

const Rating = ({ ...props }) => {
  return (
    <div className={`flex items-center gap-[20px] ${props.className}`}>
      <span className="text-[14px] text-[--sub-color] font-[700] min-w-[210px]">
        {props.title}
      </span>
      <Rate
        // tooltips={desc}
        value={props.value}
        onChange={props.setValue}
        className="text-[20px] leading-[20px] custom-tooltip"
      />
    </div>
  );
};

export default Rating;
