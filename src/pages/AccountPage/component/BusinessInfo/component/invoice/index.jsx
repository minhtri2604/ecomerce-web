import { useState } from "react";
import { ButtonAdd } from "../../../../../../components/Button";
import Bill from "./bill";
import ModalAdd from "./modalAdd";

const Invoice = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (data) => {
    setOpenModal(data);
  };

  return (
    <>
      <div className="text-[20px] font-[500] text-[--sub-color] my-[30px]">
        Thông tin xuất hóa đơn
      </div>
      <Bill />
      <ButtonAdd
        onClick={() => setOpenModal(!openModal)}
        className="mt-[30px]"
      />
      {openModal && <ModalAdd handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Invoice;
