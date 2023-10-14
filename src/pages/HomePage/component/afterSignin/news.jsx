import { LazyLoadImage } from "react-lazy-load-image-component";

import Title from "../../../../components/Title";

import { dataNews } from "../../../../data/dataNews";

const News = () => {
  return (
    <>
      <div className="flex-between">
        <Title className="text-[--sub-color]">Tin tức mới nhất</Title>
        <div className="text-[--gray-color] text-[16px] font-[500]">
          Xem thêm &#62;&#62;
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-[32px] mb-[50px]">
        {dataNews.map((item) => (
          <div
            key={item.id}
            className="w-[280px] bg-[--white-color] rounded-[10px] item-product-shadow"
          >
            <div className="h-[196px]">
              <LazyLoadImage
                effect="blur"
                className="w-full h-full"
                src={item.img}
                alt={item.alt}
              />
            </div>
            <div className="px-[13px] text-[--sub-color]">
              <div className="text-[12px] my-[18px]">{item.news}</div>
              <div className="text-[16px] font-[500]">{item.title}</div>
              <div className="text-[12px] mt-[12px] mb-[18px]">{item.desc}</div>
              <div className="text-[12px] text-[--gray-color] pb-[18px]">
                {item.readMore}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
