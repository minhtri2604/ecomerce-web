import { LazyLoadImage } from "react-lazy-load-image-component";

import product from "../../../../assets/images/homepage/commitment-center/product.svg";
import car from "../../../../assets/images/homepage/commitment-center/car.svg";
import quality from "../../../../assets/images/homepage/commitment-center/quality.svg";
import Title from "../../../../components/Title";

const CommitmentCenter = () => {
  const dataCommitment = [
    {
      id: 1,
      img: quality,
      alt: "sản phẩm",
      title: "Dịch vụ ưu đãi 100%",
      desc: "Tư vấn miễn phí, tận tình, chu đáo",
    },
    {
      id: 2,
      img: product,
      alt: "Giao hàng",
      title: "Chất lượng đảm bảo",
      desc: "Từ phân tích, đến bàn giao uy tín",
    },
    {
      id: 3,
      img: car,
      alt: "Chất lượng",
      title: "Bàn giao đúng thời điểm",
      desc: "Dịch vụ đóng gói sản phẩm trọn gói",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[50px] bg-[--white-color] rounded-[10px] box-shadow-hover transition">
      <Title className="pt-[50px] mb-[56px] text-[--sub-color] ">
        HTGSOFT Việt Nam cam kết
      </Title>
      <div className="flex justify-between flex-wrap px-[67px] w-full">
        {dataCommitment.map((item) => (
          <div key={item.id} className="flex flex-col items-center pb-[50px]">
            <div className="max-w-[127px] max-h-[100px]">
              <LazyLoadImage
                className="w-full h-full"
                effect="blur"
                src={item.img}
                alt={item.alt}
              />
            </div>
            <div className="text-[20px] font-[500] text-[--sub-color] mt-[16px] mb-[5px]">
              {item.title}
            </div>
            <div className="text-[--gray-color] text-[14px] font-[500]">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitmentCenter;
