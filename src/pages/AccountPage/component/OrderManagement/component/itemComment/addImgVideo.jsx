/* eslint-disable react/prop-types */

const AddImgVideo = ({ Tag, ...props }) => {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col w-fit items-center border-[1px] border-dashed border-[--sub-color] rounded-[8px] p-[20px] cursor-pointer"
    >
      {Tag}
      <span className="text-[12px] text-[--sub-color] font-[500]">
        {props.title}
      </span>
      <input
        ref={props.refs}
        onChange={props.onChange}
        className="hidden"
        type="file"
        multiple
        accept={props.accept}
      />
    </div>
  );
};

export default AddImgVideo;
