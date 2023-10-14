import { useState } from "react";
import { ButtonAdd } from "../../../../components/Button";
import Address from "./component/address";
import ModalAdd from "./component/modalAdd";

const AddressBook = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (data) => {
    setOpenModal(data);
  };

  return (
    <>
      <div className="text-[20px] font-[500] text-[--sub-color] my-[30px]">
        Sổ địa chỉ
      </div>
      <Address />
      <ButtonAdd
        onClick={() => setOpenModal(!openModal)}
        className="mt-[30px]"
      />
      {openModal && <ModalAdd handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default AddressBook;
