/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const RatingStar = ({ value, ...props }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, id) => (
        <AiFillStar
          style={{ color: id < value ? "#FADB14" : "#E8E8E8" }}
          className={`${props.className}`}
          key={id}
        />
      ))}
    </div>
  );
};

export default RatingStar;
