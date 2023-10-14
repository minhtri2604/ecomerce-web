import { LazyLoadImage } from "react-lazy-load-image-component";

import information from "../../../../assets/images/category/information.svg";

const Describe = () => {
  return (
    <div className="flex items-center justify-center gap-x-[8px] bg-[#FFE1CC] py-[10px] px-[10px] lg:px-0 text-[14px]">
      <div className="w-[22px] h-[22px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full"
          src={information}
          alt="img"
        />
      </div>
      <div className="w-fit">
        Chú ý: Website đang hoạt động ở chế độ thử nghiệm, đang thực hiện đăng
        ký với Bộ Công Thương
      </div>
    </div>
  );
};

export default Describe;
