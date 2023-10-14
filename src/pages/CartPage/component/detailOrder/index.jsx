/* eslint-disable react/prop-types */
import InfoCustomer from "./infoCustomer";
import InfoOrder from "./infoOrder";

const DetailOrder = ({ dataBuy }) => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-[20px] bg-[--white-color] rounded-[10px] px-[30px] py-[15px]">
        <InfoOrder dataBuy={dataBuy} />
      </div>
      <InfoCustomer />
    </>
  );
};

export default DetailOrder;
