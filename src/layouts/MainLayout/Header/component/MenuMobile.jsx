import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { dataCategory } from "../../../../data/dataCategory";
// import hot from "../../../../assets/images/category/hot.svg";

const MenuMobile = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:items-center gap-[40px] py-[15px] px-[15px] z-[-1]">
      {dataCategory.map((item) => (
        <Link
          to={"/"}
          key={item.id}
          className="flex lg:items-center gap-[10px] relative"
        >
          <div className="w-[20px] h-[20px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={item.img}
              alt={item.title}
            />
          </div>
          <span className="font-[500] text-[#4d4d4f] text-[14px] leading-[16px]">
            {item.title}
          </span>
          {/* {item.hot && (
            <div className="absolute top-[-60%] right-[-22%] w-[35px] h-[22px] hot">
              <LazyLoadImage
                 
                effect="blur"
                src={hot}
                alt="hot"
              />
            </div>
          )} */}
        </Link>
      ))}
    </div>
  );
};

export default MenuMobile;
