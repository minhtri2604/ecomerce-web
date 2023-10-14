/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router";

const ItemLeft = ({ data, location }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(location);

  const handleClick = (item) => {
    navigate(item.url);
    setActive(item.url);
  };

  return (
    <div className="bg-[--white-color] w-[280px] py-[20px] rounded-[10px] h-fit">
      {data?.map((item) => (
        <div
          onClick={() => handleClick(item)}
          key={item.id}
          className={`${
            active === item.url
              ? "bg-[--primary-color] text-[--white-color]"
              : ""
          } flex items-center gap-x-[10px] px-[15px] py-[20px] text-[--sub-color] hover:bg-[--primary-color] hover:text-[--white-color] transition cursor-pointer`}
        >
          <item.img className="text-[30px]" />
          <div className="text-[16px] font-[500]">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemLeft;
