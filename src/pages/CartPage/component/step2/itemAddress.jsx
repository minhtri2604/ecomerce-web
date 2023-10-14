import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { ButtonAdd } from "../../../../components/Button";
import { useState } from "react";
import { TitleStar } from "../titleCart";
import ModalAdd from "../../../AccountPage/component/AddressBook/component/modalAdd";
import EditAddress from "../modal/editAddress";

const data = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    phone: "0966579658",
    address: "Phường 4, Quận 8, TP.HCM",
    homeNumber: "88 Phạm Thị Tánh",
    default: true,
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    phone: "0966579658",
    address: "Phường 4, Quận 8, TP.HCM",
    homeNumber: "88 Phạm Thị Tánh",
    default: false,
  },
];

const ItemAddress = () => {
  const [check, setCheck] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleCloseModal = (data) => {
    setOpenModal(data);
  };

  const handleCloseModalEdit = (data) => {
    setOpenModalEdit(data);
  };
  return (
    <div className="bg-[--white-color] rounded-[10px] px-[30px] py-[15px]">
      <TitleStar>Địa chỉ nhận hàng</TitleStar>
      {data.map((item) => (
        <div key={item.id} className="flex items-start gap-x-[10px] my-[15px]">
          {check === item.id ? (
            <MdRadioButtonChecked
              // onClick={() => setCheck(null)}
              className="text-[20px] cursor-pointer text-[--primary-color]"
            />
          ) : (
            <MdRadioButtonUnchecked
              onClick={() => setCheck(item.id)}
              className="text-[20px] cursor-pointer"
            />
          )}

          <div>
            <div className="flex items-center gap-x-[15px]">
              <span className="text-[16px] leading-[16px] font-[500] text-[--sub-color]">
                {item.name} - {item.phone}
              </span>
              {item.default && (
                <span className="text-[14px] font-[500] text-[--title-table-color]">
                  #Mặc định
                </span>
              )}
              <span
                onClick={() => setOpenModalEdit(item.id)}
                className="underline text-[14px] text-[--primary-color] cursor-pointer"
              >
                Chỉnh sửa
              </span>
            </div>
            <div className="text-[14px] text-[--sub-color]">
              {item.homeNumber}, {item.address}
            </div>
          </div>

          {openModalEdit === item.id && (
            <EditAddress
              handleCloseModalEdit={handleCloseModalEdit}
              data={item}
            />
          )}
        </div>
      ))}

      <ButtonAdd onClick={() => setOpenModal(!openModal)} />
      {openModal && <ModalAdd handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default ItemAddress;
