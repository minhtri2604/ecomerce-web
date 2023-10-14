import { BiSolidChevronDown } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useRef, useState } from "react";

import useClickOutSide from "../../../../hooks/useClickOutSide";
import { dataSearch } from "../../../../data/dataSearch";

import search from "../../../../assets/images/header/search.svg";
import qr from "../../../../assets/images/header/QR.svg";
import ModalSearch from "./ModalSearch";

const Search = () => {
  const [showModalSearch, setShowModalSearch] = useState(false);

  const handleClickSearch = () => {
    setShowModalSearch(!showModalSearch);
  };

  const onClose = () => {
    if (showModalSearch) {
      setShowModalSearch(false);
    }
  };

  const searchRef = useRef(null);

  useClickOutSide(onClose, searchRef);

  return (
    <>
      <div className="flex-center gap-x-[8px] border-[1px] border-[--border-color] border-solid rounded-[62px] lg:ml-[14px] relative z-[1]">
        <div className="w-[20px] h-[20px] ml-[14px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={search}
            alt="icon search"
          />
        </div>
        <input
          onClick={handleClickSearch}
          ref={searchRef}
          className="text-[12px] text-[--sub-color] w-[250px] 2xl:w-[450px]"
          placeholder="Tìm kiếm tất cả"
          autoComplete="off"
        />
        <div className="w-[25px] h-[25px]">
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={qr}
            alt="qr"
          />
        </div>
        <div className="text-[--white-color] text-[11px] font-[700] flex-center gap-x-[5px] bg-[--primary-color] py-[8px] px-[20px] lg:px-[40px] rounded-tr-[26px] rounded-br-[26px] relative cursor-pointer hover-all transition">
          <span>Tất cả</span>
          <BiSolidChevronDown className="text-[15px]" />
          <div className="absolute top-[100%] border-[0.5px] border-[--primary-color] border-solid rounded-br-[10px] rounded-bl-[10px] w-full text-center hidden hover-children z-10 bg-[--white-color]">
            {dataSearch.map((item) => (
              <div
                key={item.id}
                className="text-[12px] leading-[13px] text-[#818181] border-b-[0.5px] last:border-b-0 border-[#818181] border-solid py-[10px] mx-[10px] cursor-pointer hover:text-[--primary-color]"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`absolute w-full top-[68%] z-[-1] ${
            showModalSearch ? "block" : "hidden"
          }`}
        >
          <ModalSearch />
        </div>
      </div>
    </>
  );
};

export default Search;
