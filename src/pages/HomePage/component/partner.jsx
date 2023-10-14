import { LazyLoadImage } from "react-lazy-load-image-component";

import Title from "../../../components/Title";

import { dataPartner } from "../../../data/dataPartner";

const Partner = () => {
  return (
    <div className="px-[90px] mt-[50px] pt-[18px] pb-[30px] bg-[--white-color] rounded-[10px] box-shadow-hover transition">
      <Title className="text-center mb-[29px] text-[--sub-color]">
        Đối tác của HTGSOFT
      </Title>
      <div className="grid grid-cols-5 gap-[15px]">
        {dataPartner.map((item) => (
          <div
            key={item.id}
            className="max-w-[160px] max-h-[60px] grayscale hover:grayscale-0 transition"
          >
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
