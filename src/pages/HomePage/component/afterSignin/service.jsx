import { LazyLoadImage } from "react-lazy-load-image-component";

import support from "../../../../assets/images/header-signin/service/247.svg";
import product from "../../../../assets/images/header-signin/service/product.svg";
import freeShip from "../../../../assets/images/header-signin/service/free-ship.svg";

const Service = () => {
  const dataService = [
    {
      id: 1,
      img: product,
      alt: "product",
      title: "SẢN PHẨM UY TÍN",
      desc: "Cam kết về chất lượng, xuất xứ và tiêu chuẩn về sản phẩm",
    },
    {
      id: 2,
      img: freeShip,
      alt: "free ship",
      title: "MIỄN PHÍ VẬN CHUYỂN",
      desc: "Miễn phí vận chuyển với đơn hàng có giá trị trên 300.00 vnd",
    },
    {
      id: 3,
      img: support,
      alt: "support",
      title: "HỖ TRỢ TRỰC TUYẾN 24/7",
      desc: "Hỗ trợ các thông tin cần thiết đến quý khách hàng nhanh chóng, kịp thời",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {dataService.map((item) => (
        <div
          key={item.id}
          className="flex gap-[22px] bg-[--white-color] w-fit py-[25px] px-[20px]"
        >
          <div className="max-w-[90px] max-h-[60px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={item.img}
              alt={item.alt}
            />
          </div>
          <div className="max-w-[245px]">
            <div className="text-[--primary-color] text-[18px] font-[600]">
              {item.title}
            </div>
            <div className="text-[--sub-color] text-[14px]">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
