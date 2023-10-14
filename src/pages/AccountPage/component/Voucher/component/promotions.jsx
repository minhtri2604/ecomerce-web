import { LazyLoadImage } from "react-lazy-load-image-component";
import { TitleAccount } from "../../../../../components/Title";

const Promotions = () => {
  return (
    <div className="bg-[--white-color] rounded-[10px] py-[20px] px-[30px] mt-[20px]">
      <TitleAccount>Các chương trình khuyến mãi</TitleAccount>
      <div className="grid grid-cols-3 gap-[20px] border-t-[1px] border-solid border-[--border-color] pt-[30px] my-[20px]">
        {[...Array(3)].map((_, id) => (
          <div key={id} className="filter-shadow voucher">
            <div className="w-full max-h-[168px]">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full object-cover rounded-t-[10px]"
                src="https://files.benhvien108.vn/ecm/source_files/2021/10/08/211008-2-1-084846-081021-65.jpg"
                alt="img"
              />
            </div>
            <div className="text-[14px] font-[500] text-[--sub-color] bg-[--white-color] px-[10px] py-[20px] rounded-b-[10px]">
              Duy nhất 31/08: Bật mí voucher hoá đơn lên đến 3 triệu
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
