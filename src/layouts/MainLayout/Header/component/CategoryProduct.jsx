import { GiHamburgerMenu } from "react-icons/gi";

import Container from "../../../../components/Container";

import Categories from "./Categories";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

export const CategoryProduct = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="hidden lg:block border-y-[1px] border-[--border-color] border-solid">
        <Container>
          <div className="flex items-center gap-x-[40px]">
            <div
              className="flex-center gap-x-[10px] bg-[--primary-color] w-[182px] py-[15px] relative cursor-pointer transition"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <GiHamburgerMenu className="text-[--white-color]" />
              <span className="font-[700] text-[--white-color] text-[14px] leading-[16px]">
                Danh mục sản phẩm
              </span>
              {isHovered && <Categories />}
            </div>

            <MenuMobile />
          </div>
        </Container>
      </div>
    </>
  );
};
