/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalCancelOrder from "./modalCancelOrder";
import { InfoWaitConfirm, WaitConfirm } from "./status/waitConfirm";
import { InfoWaitGoods, WaitGoods } from "./status/waitGoods";
import { BeingTransport, InfoBeingTransport } from "./status/beingTransport";
import { Delivered, InfoDelivered } from "./status/delivered";
import { InfoRating, Rating } from "./status/rating";

const StatusOrder = ({ data, location }) => {
  const [openModalCencel, setOpenModalCancel] = useState(false);

  const handleSendDataOpen = (data) => {
    setOpenModalCancel(data);
  };

  return (
    <div className="border-t-[1px] border-solid border-[--border-cart] p-[30px] mt-[25px]">
      <div className="grid grid-cols-5 border-[2px] border-solid border-[--border-cart] rounded-[50px]">
        <WaitConfirm data={data} location={location} />
        <WaitGoods data={data} location={location} />
        <BeingTransport data={data} location={location} />
        <Delivered data={data} location={location} />
        <Rating data={data} location={location} />
      </div>
      <div className="flex-between mt-[60px] mb-[30px]">
        <InfoWaitConfirm
          location={location}
          handleSendDataOpen={handleSendDataOpen}
        />
        <InfoWaitGoods location={location} />
        <InfoBeingTransport location={location} />
        <InfoDelivered location={location} />
        <InfoRating location={location} />
      </div>

      {openModalCencel && (
        <ModalCancelOrder handleSendDataOpen={handleSendDataOpen} />
      )}
    </div>
  );
};

export default StatusOrder;
