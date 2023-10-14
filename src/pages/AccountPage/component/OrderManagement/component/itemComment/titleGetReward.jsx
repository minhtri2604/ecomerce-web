/* eslint-disable react/prop-types */
const TitleGetReward = ({ ...props }) => {
  return (
    <div
      className={`${props.className} text-[--primary-color] text-[14px] bg-[#A3E7F0] rounded-[25px] px-[25px] py-[5px]`}
    >
      Thêm 50 ký tự, 1 hình ảnh và 1 video để nhận {props.point} điểm tích lũy
    </div>
  );
};

export default TitleGetReward;
