/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { FaPencil } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";
import { validateInputAddress } from "../../../../helpers/validation";
import { setAddress } from "../../../../redux/comment/comment.slice";
import NotiCheckInfo from "../../../../components/NotiCheck";
import { ItemAccountName } from "../../../AccountPage/component/BusinessInfo/component/itemInput";
import SelectAddress from "../../../AccountPage/component/BusinessInfo/component/invoice/selectAddress";
import { ButtonInfo } from "../../../../components/Button";

const EditAddress = ({ handleCloseModalEdit, data, ...props }) => {
  const [check, setCheck] = useState(false);
  const [titleCheck, setTitleCheck] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValidReset, setIsFormValidReset] = useState(false);
  let currentId = parseInt(localStorage.getItem("currentId")) || 1;

  const dispatch = useDispatch();

  const [dataCity, setDataCity] = useState("");

  const [error, setError] = useState({
    nameUser: "",
    phone: "",
    city: "",
    address: "",
  });

  const inputRef = useRef({
    nameUser: null,
    nameBusiness: null,
    address: null,
    phone: null,
  });

  const validation = () => {
    const { nameUser, address, phone } = inputRef.current;
    const input = {
      nameUser: nameUser?.value,
      address: address?.value,
      phone: phone?.value,
    };

    const msg = validateInputAddress(input);
    setError(msg);

    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleInputChange = () => {
    const { nameUser, address, phone } = inputRef.current;

    const isValid = nameUser.value && address.value && phone.value;

    const isValidReset = nameUser.value || address.value || phone.value;

    setIsFormValid(isValid);
    setIsFormValidReset(isValidReset);
  };

  const handleSendDataSelectAddress = (value) => {
    setDataCity(value);
  };

  const handleSave = () => {
    // const isValid = validation();
    // const { nameUser, address, phone } = inputRef.current;
    // if (isValid && dataCity != "") {
    //   const existingInvoice =
    //     JSON.parse(localStorage.getItem("dataAddress")) || [];
    //   console.log(11111);

    //   const parts = dataCity.split(", ");
    //   const modifiedString = `${parts[2]}, ${parts[1]}, ${parts[0]}`;
    //   const dataInvoice = {
    //     id: currentId,
    //     nameUser: nameUser.value,
    //     city: modifiedString,
    //     address: address.value,
    //     phone: phone.value,
    //     check: check,
    //     type: titleCheck,
    //   };

    //   const updatedInvoice = [...existingInvoice, dataInvoice];

    //   localStorage.setItem("dataAddress", JSON.stringify(updatedInvoice));
    //   dispatch(setAddress({ dataAddress: updatedInvoice }));
    //   handleCloseModalEdit(null);
    //   currentId++;
    //   localStorage.setItem("currentId", currentId);
    // }
    handleCloseModalEdit(null);
  };

  const handleReset = () => {
    const { nameUser, address, phone } = inputRef.current;
    nameUser.value = "";
    address.value = "";
    phone.value = "";
    setDataCity("");
  };

  return (
    <>
      <div
        onClick={() => handleCloseModalEdit(null)}
        className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"
      ></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[580px] bg-[--white-color] px-[20px] py-[22px] rounded-[20px] z-20">
        <div className="absolute top-[-5%] left-[50%] translate-x-[-50%] bg-[--white-color] rounded-[50%] p-[20px]">
          <FaPencil className="text-[50px] text-[--primary-color]" />
        </div>
        <div
          className={`rounded-[10px] border-[2px] border-solid border-[--primary-color] px-[15px] ${props.className}`}
        >
          <div className="text-24px leading-[26px] font-[700] text-[--sub-color] text-center mt-[40px]">
            Chỉnh sửa địa chỉ
          </div>
          <NotiCheckInfo
            title="Chưa điền đủ thông tin bắt buộc. Vui lòng nhập và kiểm tra lại thông tin."
            className="my-[20px]"
          />
          <ItemAccountName
            refs={(el) => (inputRef.current.nameUser = el)}
            defaultValue={data.name}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className="font-[500]"
            className2="font-[400] text-[14px]"
            title="Tên người nhận hàng (*)"
            placeholder="Vui lòng nhập thông tin"
            type="text"
            name="userName"
          />
          <div className="text-[14px] text-[--primary-color]">
            {error.nameUser}
          </div>
          <SelectAddress
            handleSendDataSelectAddress={handleSendDataSelectAddress}
            defaultValue={data.address}
            dataCity={dataCity}
          />
          <ItemAccountName
            refs={(el) => (inputRef.current.address = el)}
            defaultValue={data.homeNumber}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className="font-[500]"
            className2="font-[400] text-[14px]"
            className3=""
            title="Địa chỉ (*)"
            placeholder="Vui lòng nhập địa chỉ"
            type="text"
            name="userName"
          />
          <div className="text-[14px] text-[--primary-color]">
            {error.address}
          </div>
          <ItemAccountName
            refs={(el) => (inputRef.current.phone = el)}
            defaultValue={data.phone}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className="font-[500]"
            className2="font-[400] text-[14px]"
            className3="mt-[20px]"
            title="Số điện thoại (*)"
            placeholder="Vui lòng nhập số điện thoại"
            type="text"
            name="userName"
          />
          <div className="text-[14px] text-[--primary-color]">
            {error.phone}
          </div>

          <div className="flex justify-between items-center my-[20px] border-b-[1px] border-solid border-[--border-cart] pb-[20px]">
            <div>Loại địa chỉ</div>
            <div className="flex items-center gap-x-[10px]">
              <div
                onClick={() => setTitleCheck("home")}
                className={`${
                  titleCheck === "home"
                    ? "border-[--primary-color] text-[--primary-color]"
                    : "border-[--sub-color] text-[--sub-color]"
                } border-[1px] border-solid rounded-[20px] px-[30px] py-[5px] cursor-pointer relative transition`}
              >
                <span>Nhà</span>
                {titleCheck === "home" && (
                  <PiSealCheckFill className="text-[18px] text-[--primary-color] absolute top-[50%] right-[5%] translate-y-[-50%]" />
                )}
              </div>
              <div
                onClick={() => setTitleCheck("office")}
                className={`${
                  titleCheck === "office"
                    ? "border-[--primary-color] text-[--primary-color]"
                    : "border-[--sub-color] text-[--sub-color]"
                } border-[1px] border-solid rounded-[20px] px-[30px] py-[5px] cursor-pointer relative transition`}
              >
                <span>Văn phòng</span>
                {titleCheck === "office" && (
                  <PiSealCheckFill className="text-[18px] text-[--primary-color] absolute top-[50%] right-[5%] translate-y-[-50%]" />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-[20px]">
            {check ? (
              <MdOutlineCheckBox
                onClick={() => setCheck(!check)}
                className="text-[22px] text-[--primary-color] cursor-pointer"
              />
            ) : (
              <MdOutlineCheckBoxOutlineBlank
                onClick={() => setCheck(!check)}
                className="text-[22px] text-[--primary-color] cursor-pointer"
              />
            )}

            <span className="text-[16px] font-[500] text-[--sub-color]">
              Đặt làm địa chỉ mặc định
            </span>
          </div>
          <div className="flex-center gap-x-[15px] mt-[35px] mb-[30px]">
            <ButtonInfo
              onClick={
                isFormValidReset || dataCity ? () => handleReset() : null
              }
              className={`${
                isFormValidReset || dataCity
                  ? "bg-[--white-color] border-[--primary-color] text-[--primary-color] cursor-pointer"
                  : "bg-[--border-color] border-[--border-color] text-[--white-color]"
              } border-[1px] border-solid rounded-[10px]`}
            >
              Thiết lập lại
            </ButtonInfo>
            <ButtonInfo
              onClick={
                isFormValid && dataCity && titleCheck != null
                  ? () => handleSave()
                  : () => handleSave()
              }
              className={`bg-[--primary-color] cursor-pointer text-[--white-color] rounded-[10px]`}
            >
              Lưu
            </ButtonInfo>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAddress;
