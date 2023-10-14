import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const GoToTop = () => {
  const [y, setY] = useState(0);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // eslint-disable-next-line no-unused-vars
  useScrollPosition(({ prevPos, currPos }) => {
    setY(currPos.y);
  });

  return (
    <div
      className={`${
        y < -600 ? "gotop" : "hidegotop opacity-0 pointer-events-none"
      } fixed right-[1rem] md:right-[3.6rem] bottom-[3rem] cursor-pointer z-[999999]`}
      onClick={scrollToTop}
    >
      <div className="p-[0.2rem] rounded-[50%] bg-[--primary-color] border-[1px] border-[--white-color] border-solid scaleGoToTop">
        <MdOutlineKeyboardDoubleArrowUp className="text-[--white-color] text-[2rem] md:text-[3rem]" />
      </div>
    </div>
  );
};

export default GoToTop;
