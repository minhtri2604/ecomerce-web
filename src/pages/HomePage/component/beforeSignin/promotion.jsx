import Title from "../../../../components/Title";

import { dataPromotion } from "../../../../data/dataPromotion";

const Promotion = () => {
  return (
    <div className="mt-[50px] pb-[30px] flex flex-col items-center bg-[--white-color] rounded-[10px] box-shadow-hover transition">
      <Title className="text-[--sub-color] pt-[50px] mb-[56px]">
        Ưu đãi hấp dẫn
      </Title>
      <div className="grid grid-cols-4 gap-[15px]">
        {dataPromotion.map((item) => (
          <div
            key={item.id}
            className="bg-[--primary-color] rounded-[10px] shadow-shadow flex flex-col justify-between style-coupont transition"
          >
            <div className="mx-[35px] text-center">
              <div className="text-[20px] leading-[25px] font-[500] text-[--white-color] mt-[30px]">
                {item.title}
              </div>
              <div className="text-[14px] text-[--white-color] mt-[5px]">
                {item.desc}
              </div>
            </div>
            <div className="mx-[6px]">
              <div className="border-b-[3px] border-dashed border-[--white-color] mt-[20px] mb-[10px]"></div>
              <div className="text-[--primary-color] text-[16px] font-[500] px-[102px] py-[19px] rounded-[7px] bg-[--white-color] mb-[5px] cursor-pointer">
                {item.titleBtn}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
