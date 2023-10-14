/* eslint-disable react/prop-types */
import FormTransport from "./formTransport";
import InfoBill from "./infoBill";
import InfoCart from "./infoCart";
import ItemAddress from "./itemAddress";
import Note from "./note";
import Payment from "./payment";

const Step2 = ({ dataBuy, handleSetActive }) => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-[20px]">
        <ItemAddress />
        <InfoBill />
        <Note />
        <FormTransport />
        <Payment />
      </div>
      <InfoCart handleSetActive={handleSetActive} dataBuy={dataBuy} />
    </>
  );
};

export default Step2;
