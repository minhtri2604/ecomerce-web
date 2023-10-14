import search from "../../../../../assets/images/header/search.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SearchList = () => {
  return (
    <div className="flex items-center w-fit">
      <div className="flex items-center border-[1px] border-solid border-[--border-cart] rounded-l-[60px]">
        <div className="w-[20px] h-[20px] ml-[14px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={search}
            alt="icon search"
          />
        </div>
        <input
          className="text-[14px] text-[--sub-color] py-[10px] w-[300px] px-[10px]"
          placeholder="Tìm kiếm tất cả"
          autoComplete="off"
        />
      </div>
      <div className="text-[14px] font-[500] text-[--white-color] bg-[--primary-color] py-[10px] px-[20px] border-[1px] border-solid border-[--primary-color] rounded-r-[60px] cursor-pointer">
        Tìm kiếm
      </div>
    </div>
  );
};

export default SearchList;
