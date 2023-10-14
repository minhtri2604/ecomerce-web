import { useState } from "react";
import {
  ChevronRight,
  DropDown,
} from "../../../../../assets/images/acount/dropdown";
import { GoldIcon } from "../../../../../assets/images/acount/Medal";
import {
  TicketIconWhite,
  WaitCart,
  TicketIconBlack,
} from "../../../../../assets/images/acount/ticket";
import SubContent from "./SubContent";
import { dataHistoryPoint } from "../../../../../data/dataHistoryPoint";

const RankingScore = () => {
  const [show, setShow] = useState(false);
  const handeleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="bg-[--white-color] rounded-[10px] px-[30px] "
        style={{
          boxShadow:
            "0px 2.72402px 2.17921px 0px rgba(0, 0, 0, 0.02), 0px 6.54619px 5.23696px 0px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="text-[20px] font-[500] text-[--sub-color] py-[24px]">
          Hạng thành viên
        </div>
        <div className="flex justify-between items-center border-t-[2px] border-solid border-[--border-color]"></div>
        <div className="flex justify-between  mt-[25px]">
          <span className="flex items-center ">
            <GoldIcon></GoldIcon>
            <p className="text-[26px] text-[#FF6B00] ml-[15px] font-bolds">
              VÀNG
            </p>
          </span>
          <span className="flex bg-[#FF6B00] px-[20px] py-[10px] rounded-[6px] w-[180px] h-[39px] items-center text-sm  ">
            <TicketIconWhite></TicketIconWhite>
            <p className="ml-[10px] text-[#fff]">Ưu đãi cấp bậc</p>
          </span>
        </div>
        <div className="flex justify-between pt-[40px] font-[500]">
          <div className="flex">
            <h3 className=" font-medium text-base text-[#4D4D4F]">
              Tích luỹ hiện tại :
            </h3>
            <span className="text-[#FF6B00] ml-[8px]">2500</span>
          </div>
          <div className="font-bold text-sm text-[#4D4D4F] not-italic leading-normal">
            <p>2500/3000</p>
          </div>
        </div>

        <div className="w-full h-[14px] bg-[#E6E7E8] rounded-[8px] my-[8px] ">
          <div className="w-[75%] h-[14px] bg-[#FF6B00] rounded-[8px] "></div>
        </div>
        <h3 className="font-medium text-base text-[#4D4D4F] mt-[4px] mb-[24px]">
          Điểm cần lên hạng Kim Cương: 500
        </h3>
        <div className="flex justify-between items-center border-t-[2px] border-solid border-[--border-color] py-[14px]"></div>
        <button
          className="font-medium text-[#4D4D4F] flex items-center pb-[16px] "
          onClick={() => handeleShow()}
        >
          Xem lịch sử tích điểm
          <span className="ml-[8px]">
            {show ? <DropDown></DropDown> : <ChevronRight></ChevronRight>}
          </span>
        </button>
      </div>
      {show && (
        <SubContent>
          <div className="bg-[#fff] relative mt-[-2px] z-[-1] rounded-[10px]">
            <div className="p-[30px]">
              {dataHistoryPoint.map((data, key) => (
                <ul key={key}>
                  <li className="flex justify-between border-b-[1px] border-[#E6E7E8] py-[8px] ">
                   
                      <div className="flex w-[70%]">
                        <span className="w-[10%] flex items-center">
                          {data.id === 3 || data.id === 6 ? (
                            <TicketIconBlack></TicketIconBlack>
                          ) : (
                            <WaitCart></WaitCart>
                          )}
                        </span>
                        <div className="flex flex-col ml-[28px] ">
                          <span className="text-base leading-normal font-medium text-[#4D4D4F]">
                            {data.title}
                          </span>
                          <span className="text-sm leading-normal font-norma text-[#4D4D4F]">
                            {data.orders}
                          </span>
                        </div>
                      </div>
                      <span className="text-xl leading-normal font-medium text-[#FF6B00] flex items-center ">
                        {data.point}
                      </span>
                      <div className="flex flex-col items-center">
                        <span className="text-sm leading-normal font-bold text-[#4D4D4F]">
                          {data.date}
                        </span>
                        <span className="text-xs font-normal  leading-normal text-[#4D4D4F]">
                          {data.time}
                        </span>
                      </div>
                    
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </SubContent>
      )}
    </>
  );
};

export default RankingScore;
