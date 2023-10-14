import { LazyLoadImage } from "react-lazy-load-image-component";
import { dataSocial } from "../../../data/dataSignin";

const Social = () => {
  return (
    <>
      <div className="text-[--sub-color] text-[13px] font-[500] text-center my-[13px]">
        Hoặc đăng nhập với:
      </div>
      <div className="flex justify-center items-center gap-x-[30px] pb-[21px]">
        {dataSocial.map((item) => (
          <div key={item.id} className="w-[37px] h-[37px] cursor-pointer">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Social;
