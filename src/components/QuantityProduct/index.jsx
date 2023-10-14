/* eslint-disable react/prop-types */

const QuantityProduct = ({ ...props }) => {
  return (
    <div className="flex items-center h-[24px]">
      <div
        className="w-[20px] h-full text-[--white-color] bg-[#A7A9AC] border-top-left border-bottom-left text-center cursor-pointer"
        onClick={props.decreaseQuantity}
      >
        -
      </div>
      <div className="text-[12px] font-[500] w-[40px] h-full flex-center border-[0.5px] border-solid border-t-[#e7e7e7] border-b-[#e7e7e7]">
        {props.quantity}
      </div>
      <div
        className="w-[20px] h-full text-[--white-color] bg-[--primary-color] text-center cursor-pointer border-top-right border-bottom-right"
        onClick={props.increaseQuantity}
      >
        +
      </div>
    </div>
  );
};

export default QuantityProduct;
