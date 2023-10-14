import { useState } from "react";
import {
  DiamondIcon,
  GoldIcon,
  SliverIcon,
} from "../../../../../assets/images/acount/Medal";
import { ChevronRight, DropDown } from "../../../../../assets/images/acount/dropdown";
import Pagination from "./Pagination";
import SubContent from "./SubContent";

const Benefit = () => {
  const [show, setShow] = useState(false);
  const handeleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="bg-[--white-color]  rounded-[10px] px-[30px] mt-[18px] border-1 "
        style={{
          boxShadow:
            "0px 2.72402px 2.17921px 0px rgba(0, 0, 0, 0.02), 0px 6.54619px 5.23696px 0px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="text-[20px] font-[500] text-[--sub-color] py-[24px] ">
          Danh sách cấp bậc và quyền lợi
        </div>
        <div className="flex justify-between items-center border-t-[2px] border-solid border-[--border-color]"></div>

        <div className="mt-[20px] flex ">
          <div className="flex flex-col w-[30%] border-2 border-[#E6E7E8] text-center items-center pt-[24px] rounded-[8px]">
            <SliverIcon></SliverIcon>
            <p className="font-medium text-xl">Bạc</p>
            <p className="font-medium text-base">500 điểm</p>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[px]">
              Miễn phí vận chuyển
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Sản phẩm giá hạng Bạc
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Ngày hội thành viên{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia chương tình từ nhà sản xuất đặc biệt{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia các chương trình quay số trúng thưởng
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-y-2 py-[15px] px-[20px]">
              Các ưu đãi - mã khuyến mãi hạng Bạc{" "}
            </div>
            <div className="pb-[140px]"></div>
          </div>
          <div className="flex flex-col w-[30%] border-2 border-[#FF6B00] text-center items-center pt-[24px] mx-[40px] rounded-[8px]">
            <GoldIcon></GoldIcon>
            <p className="font-medium text-xl">Vàng</p>
            <p className="font-medium text-base">1000 điểm</p>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Miễn phí vận chuyển
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Sản phẩm giá hạng Vàng
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Ngày hội thành viên{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia chương tình từ nhà sản xuất đặc biệt{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia các chương trình quay số trúng thưởng
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-y-2 py-[15px] px-[20px]">
              Các ưu đãi - mã khuyến mãi hạng Vàng{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-bottom-2 py-[15px] px-[20px]">
              Tham gia các chương trình quay số trúng thưởng hàng năm
            </div>
          </div>
          <div className="flex flex-col w-[30%] border-2 border-[#E6E7E8] text-center items-center pt-[24px] rounded-[8px]">
            <DiamondIcon></DiamondIcon>
            <p className="font-medium text-xl">Kim Cương</p>
            <p className="font-medium text-base">500 điểm</p>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Miễn phí vận chuyển
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Sản phẩm giá hạng Kim Cương
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Ngày hội thành viên{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia chương tình từ nhà sản xuất đặc biệt{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-t-2 py-[15px] px-[20px]">
              Tham gia các chương trình quay số trúng thưởng
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-y-2 py-[15px] px-[20px]">
              Các ưu đãi - mã khuyến mãi hạng Kim Cương{" "}
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full border-b-2 py-[15px] px-[20px]">
              Cơ hội tham gia các chương trình dán poster, khuyến mãi ngành hàng
            </div>
            <div className="font-normal text-sm leading-[16.41px] w-full  py-[15px] px-[20px]">
              Khuyến mãi thêm khi ở thứ hạng cao nhất
            </div>
          </div>
        </div>
        <Pagination></Pagination>
        <div className="border-t-[2px] border-solid border-[--border-color]  "></div>
        <button
          onClick={() => handeleShow()}
          className="font-medium text-[#4D4D4F] flex items-center py-[16px]  "
        >
          Cách tính cấp bậc
          <span className="ml-[8px]">
          {show ? <DropDown></DropDown> : <ChevronRight></ChevronRight>}
          </span>
        </button>
      </div>

      {show && (
        <SubContent>
          <div className="bg-[#fff] relative mt-[-2px] z-[-1] rounded-[10px]">
            <div className="p-[30px] text-[#4D4D4F]">
              <h6 className="text-base font-medium leading-normal not-italic mb-[16px]">
                Vào 0h mỗi ngày sẽ tính lại cấp bậc của khách hàng
              </h6>
              <h6 className="text-base font-medium leading-normal not-italic">
                Quy đổi điểm theo:
              </h6>
              <ul className="list-disc pl-4 mb-[16px]">
                <li className="text-sm font-normal leading-normal not-italic">
                  100.000 vnđ sẽ được 1 điểm hoặc theo điểm tích lũy được quy
                  định cho sản phẩm đó
                </li>
                <li className="text-sm font-normal leading-normal not-italic">
                  Nếu sản phẩm có hệ số nhân sẽ nhân lên tương ứng theo điểm quy
                  đổi
                </li>
              </ul>
              <h6 className="text-base font-medium leading-normal">
                Điếm sẽ được cộng tương ứng với từng sản phẩm:
              </h6>

              <ul className="list-disc pl-4 mb-[16px]">
                <li className="text-sm font-normal leading-normal not-italic">
                  Đã giao hàng thành công
                </li>
                <li className="text-sm font-normal leading-normal not-italic">
                  Đơn hàng đã hoàn tất
                </li>
                <li className="text-sm font-normal leading-normal not-italic">
                  Hệ thống sẽ dựa trên số đơn đã hoàn tất từ 3 tháng gần nhất
                  đến thời điểm hiện tại để tính
                </li>
              </ul>
              <h6 className="text-base font-medium leading-normal">
                Ví dụ: Tính cấp bậc cho khách hàng vào lúc 0h ngày 26/5/2021, hệ
                thống sẽ tính tất cả đơn hàng hoàn tất từ ngày 01/01/2021 đến
                26/05/2021
              </h6>
            </div>
          </div>
        </SubContent>
      )}
    </>
  );
};

export default Benefit;
