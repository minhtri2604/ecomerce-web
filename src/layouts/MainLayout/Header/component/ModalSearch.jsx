import { RiDeleteBin6Line } from "react-icons/ri";

const ModalSearch = () => {
  return (
    <div className="border-[1px] border-[#C7C8CA] border-t-0 border-solid rounded-br-[10px] rounded-bl-[10px] px-[15px] pt-[32px] bg-[--white-color]">
      <div className="flex-between">
        <div className="text-[--sub-color] text-[14px] leading-[16px] font-[700]">
          Lịch sử
        </div>
        <div className="text-[--sub-color] flex-center gap-x-[5px]">
          <RiDeleteBin6Line />
          <span className="text-[12px] leading-[14px]">Xóa tất cả</span>
        </div>
      </div>
      <div className="text-[--sub-color] py-[10px]">
        Không có lịch sử tìm kiếm
      </div>
      <div className="text-[--sub-color] text-[14px] leading-[16px] font-[700] mt-[15px]">
        Đề xuất tìm kiếm
      </div>
      <div className="text-[--sub-color] text-[12px] leading-[14px] w-fit bg-[#F1F2F2] px-[10px] py-[4px]">
        Paracetamol
      </div>
    </div>
  );
};

export default ModalSearch;
