/* eslint-disable react/prop-types */
import InfoCart from "./infoCart";
import PromotionGift from "./promotionGift";
import TableShoppingCart from "./tableShoppingCart";

const Step1 = ({ handleDataBuy, dataBuy, handleSetActive }) => {
  return (
    <>
      <TableShoppingCart sendDataToParent={handleDataBuy} className="flex-1" />
      <div className="flex flex-col gap-[20px]">
        <InfoCart handleSetActive={handleSetActive} dataBuy={dataBuy} />
        <PromotionGift />
      </div>
    </>
  );
};

export default Step1;
