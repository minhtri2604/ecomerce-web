import { Line } from "../../../../../assets/images/acount/line";
import { dataPreferential } from "../../../../../data/dataPreferential";
import Pagination from "./Pagination";
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "..."; // Cắt nội dung và thêm dấu chấm
  }
  return text;
}
const PreferentialLow = () => {
  return (
    <div className="bg-[--white-color]  rounded-[10px] px-[30px] mt-[18px] pb-[14px] ">
      <div className="text-[20px] font-[500] text-[--sub-color] py-[24px]">
        Ưu đãi cấp bậc
      </div>
      <div className="flex justify-between items-center border-t-[2px] border-solid border-[--border-color]"></div>

      <div className="mt-[20px]  grid  grid-cols-4 gap-x-6  ">
        {dataPreferential.map((data, key) => (
          <div
            key={key}
            className="border-2 bg-[#C7C8CA] flex flex-col items-center  text-center pt-[24px] rounded-[8px] "
          >
            <p className="font-bold text-base leading-[16px] px-[4px]  text-[#FFFFFF]">
              {data.title}
            </p>
            <p className="font-normal text-[12px] px-[8px] mt-[8px] mb-[30px] h-[70px] text-[#FFFFFF]">
              {truncateText(data.content, 114)}
            </p>
            <div className="flex justify-center  px-[20px] my-[8px]">
              <Line></Line>
            </div>
            <div className="px-[8px] w-[96%] h-[43px] rounded-[5px] flex items-center justify-center bg-[#FFFFFF] mb-[8px]">
              <span className="bg-[#FFFFFF] text-[#FF6B00]">
                Thăng cấp ngay
              </span>
            </div>
          </div>
        ))}
      </div>

      <Pagination></Pagination>
    </div>
  );
};

export default PreferentialLow;
