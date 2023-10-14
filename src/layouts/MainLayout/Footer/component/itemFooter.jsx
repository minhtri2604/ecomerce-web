/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ItemFooter = ({ title, ...data }) => {
  const arrData = Object.keys(data).map((key) => data[key]);
  return (
    <div className="text-[--white-color]">
      <div className="text-[16px] font-[500] mb-[10px]">{title}</div>
      {arrData[0]?.map((item) => (
        <div key={item?.id}>
          {item.flag ? (
            <div className="text-[14px] font-[700]">{item.title}</div>
          ) : (
            <div className="text-[12px] leading-[15px] tracking-[-0.156px]">
              <div className="last:mb-[8px]">{item?.title}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const ItemImageFooter = ({
  title,
  className,
  classNameImage,
  ...data
}) => {
  const arrData = Object.keys(data).map((key) => data[key]);
  return (
    <div className={`text-[--white-color] ${className}`}>
      <div className="text-[16px] font-[500] mb-[10px]">{title}</div>
      <div className="flex flex-wrap gap-[7px]">
        {arrData[0]?.map((item) => (
          <div key={item.id} className={`${classNameImage}`}>
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={item?.img}
              alt={item?.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
