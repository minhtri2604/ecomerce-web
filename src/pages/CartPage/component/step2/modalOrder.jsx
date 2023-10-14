/* eslint-disable react/prop-types */
import InfoModalOrder from "./infoModalOrder";
import { IoCloseCircleOutline } from "react-icons/io5";
import ModalOrderSuccess from "./modalOrderSuccess";
import { useState } from "react";

const ModalOrder = ({ handleOffModal, handleSetActive, dataBuy }) => {
  const [changeModal, setChangeModal] = useState(false);
  const handleChangeModal = (data) => {
    setChangeModal(data);
  };
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"></div>
      <div
        className={`bg-[--white-color] rounded-[20px] border-[1px] border-solid border-[--sub-color] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 px-[35px] py-[25px] w-[580px]`}
      >
        <IoCloseCircleOutline
          onClick={() => handleOffModal(false)}
          className="text-[--primary-color] text-[40px] absolute top-[2%] right-[2%] cursor-pointer"
        />
        {!changeModal ? (
          <InfoModalOrder
            dataBuy={dataBuy}
            handleChangeModal={handleChangeModal}
          />
        ) : (
          <ModalOrderSuccess handleSetActive={handleSetActive} />
        )}
      </div>
    </>
  );
};

export default ModalOrder;
