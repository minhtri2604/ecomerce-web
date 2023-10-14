import SelectImage from "./selectImage";

/* eslint-disable react/prop-types */
const ItemImage = ({ ...props }) => {
  return (
    <div className={`${props.className}`}>
      <div className="business-info">{props.title}</div>
      <div className="border-[1px] border-solid border-[--sub-color] rounded-[12px] p-[12px]">
        <SelectImage title={props.desc} />
      </div>
    </div>
  );
};

export default ItemImage;
