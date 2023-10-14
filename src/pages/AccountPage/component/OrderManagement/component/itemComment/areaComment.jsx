/* eslint-disable react/prop-types */
const AreaComment = ({ ...props }) => {
  return (
    <>
      <textarea
        className="w-full text-[14px] text-[--sub-color] p-[15px] bg-[#F1F2F2] rounded-[8px] min-h-[80px] my-[25px]"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default AreaComment;
