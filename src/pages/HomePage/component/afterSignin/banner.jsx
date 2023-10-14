import { LazyLoadImage } from "react-lazy-load-image-component";

import banner1 from "../../../../assets/images/header-signin/banner/banner1.svg";
import banner2 from "../../../../assets/images/header-signin/banner/banner2.svg";
import banner3 from "../../../../assets/images/header-signin/banner/banner3.svg";

const BannerAfterSignin = () => {
  const dataBanner = [
    {
      id: 1,
      img: banner1,
      alt: "banner",
    },
    {
      id: 2,
      img: banner2,
      alt: "banner",
    },
    {
      id: 3,
      img: banner3,
      alt: "banner",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[20px] my-[50px]">
      {dataBanner.map((item) => (
        <div className="w-[380px] h-[267px]" key={item.id}>
          <LazyLoadImage
            effect="blur"
            className="w-full h-full"
            src={item.img}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerAfterSignin;
