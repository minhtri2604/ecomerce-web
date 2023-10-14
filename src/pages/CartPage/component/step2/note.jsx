import { TitleStar } from "../titleCart";

const Note = () => {
  return (
    <div className="bg-[--white-color] rounded-[10px] px-[30px] py-[15px]">
      <TitleStar>Ghi chú</TitleStar>
      <textarea
        placeholder="Nhập thông tin..."
        className="min-h-[120px] rounded-[8px] bg-[#f1f2f2] w-full text-[--sub-color] text-[14px] px-[20px] py-[15px] mt-[10px]"
      />
      <div className="text-[14px] text-[--sub-color]">
        *** tối đa 1000 ký tự
      </div>
    </div>
  );
};

export default Note;
