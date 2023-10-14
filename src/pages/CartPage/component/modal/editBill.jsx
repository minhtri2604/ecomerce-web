/* eslint-disable react/prop-types */
import { FaPencil } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateInputInvoice } from "../../../../helpers/validation";
import { setInvoice } from "../../../../redux/comment/comment.slice";
import NotiCheckInfo from "../../../../components/NotiCheck";
import { ItemAccountName } from "../../../AccountPage/component/BusinessInfo/component/itemInput";
import { ButtonInfo } from "../../../../components/Button";
import SelectAddress from "../../../AccountPage/component/BusinessInfo/component/invoice/selectAddress";

const EditBill = ({ handleCloseModalEdit, data, ...props }) => {
  const [check, setCheck] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValidReset, setIsFormValidReset] = useState(false);
  let currentId = parseInt(localStorage.getItem("currentId")) || 1;

  const dispatch = useDispatch();

  const [dataCity, setDataCity] = useState("");

  const [error, setError] = useState({
    nameUser: "",
    nameBusiness: "",
    city: "",
    address: "",
    taxCode: "",
    email: "",
  });

  const inputRef = useRef({
    nameUser: null,
    nameBusiness: null,
    address: null,
    taxCode: null,
    email: null,
  });

  const validation = () => {
    const { nameUser, nameBusiness, address, taxCode, email } =
      inputRef.current;
    const input = {
      nameUser: nameUser?.value,
      nameBusiness: nameBusiness?.value,
      address: address?.value,
      taxCode: taxCode?.value,
      email: email?.value,
    };

    const msg = validateInputInvoice(input);
    setError(msg);

    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleInputChange = () => {
    const { nameUser, nameBusiness, address, taxCode, email } =
      inputRef.current;

    const isValid =
      nameBusiness.value &&
      nameUser.value &&
      address.value &&
      taxCode.value &&
      email.value;

    const isValidReset =
      nameBusiness.value ||
      nameUser.value ||
      address.value ||
      taxCode.value ||
      email.value;

    setIsFormValid(isValid);
    setIsFormValidReset(isValidReset);
  };

  const handleSendDataSelectAddress = (value) => {
    setDataCity(value);
  };

  const handleSave = () => {
    // const isValid = validation();
    // const { nameUser, nameBusiness, address, taxCode, email } =
    //   inputRef.current;
    // if (isValid && dataCity != "") {
    //   const existingInvoice =
    //     JSON.parse(localStorage.getItem("dataInvoice")) || [];

    //   const parts = dataCity.split(", ");
    //   const modifiedString = `${parts[2]}, ${parts[1]}, ${parts[0]}`;
    //   const dataInvoice = {
    //     id: currentId,
    //     nameUser: nameUser.value,
    //     nameBusiness: nameBusiness.value,
    //     city: modifiedString,
    //     address: address.value,
    //     taxCode: taxCode.value,
    //     email: email.value,
    //     check: check,
    //   };

    //   const updatedInvoice = [...existingInvoice, dataInvoice];

    //   localStorage.setItem("dataInvoice", JSON.stringify(updatedInvoice));
    //   dispatch(setInvoice({ dataInvoice: updatedInvoice }));
    //   currentId++;
    //   localStorage.setItem("currentId", currentId);
    // }
    handleCloseModalEdit(null);
  };

  const handleReset = () => {
    const { nameUser, nameBusiness, address, taxCode, email } =
      inputRef.current;
    nameBusiness.value = "";
    nameUser.value = "";
    address.value = "";
    taxCode.value = "";
    email.value = "";
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
          className={`rounded-[10px] border-[1px] border-solid border-[--primary-color] px-[15px] ${props.className}`}
        >
          <div className="text-24px leading-[26px] font-[700] text-[--sub-color] text-center mt-[40px]">
            Thêm thông tin xuất hóa đơn
          </div>
          <NotiCheckInfo
            title="Chưa điền đủ thông tin bắt buộc. Vui lòng nhập và kiểm tra lại thông tin."
            className="my-[20px]"
          />
          <div className="flex items-start justify-between gap-x-[10px]">
            <div className="flex flex-col w-[50%]">
              <ItemAccountName
                refs={(el) => (inputRef.current.nameUser = el)}
                defaultValue={data.name}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                className="font-[500]"
                className2="font-[400] text-[14px]"
                title="Tên người mua hàng"
                placeholder="Vui lòng nhập thông tin"
                type="text"
                name="userName"
              />
              <div className="text-[14px] text-[--primary-color]">
                {error.nameUser}
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <ItemAccountName
                refs={(el) => (inputRef.current.nameBusiness = el)}
                defaultValue={data.user}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                className="font-[500]"
                className2="font-[400] text-[14px]"
                title="Tên doanh nghiệp (*)"
                placeholder="Vui lòng nhập tên doanh nghiệp"
                type="text"
                name="userName"
              />
              <div className="text-[14px] text-[--primary-color]">
                {error.nameBusiness}
              </div>
            </div>
          </div>
          <SelectAddress
            handleSendDataSelectAddress={handleSendDataSelectAddress}
            defaultValue={data.address}
            dataCity={dataCity}
          />
          <div>
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
          </div>
          <div className="flex items-start justify-between gap-x-[10px] my-[20px]">
            <div className="w-[50%] flex flex-col">
              <ItemAccountName
                refs={(el) => (inputRef.current.taxCode = el)}
                defaultValue={data.code}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                className="font-[500]"
                className2="font-[400] text-[14px]"
                title="Mã số thuế (*)"
                placeholder="Vui lòng nhập mã số thuế"
                type="text"
                name="userName"
              />
              <div className="text-[14px] text-[--primary-color]">
                {error.taxCode}
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <ItemAccountName
                refs={(el) => (inputRef.current.email = el)}
                defaultValue={data.email}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                className="font-[500]"
                className2="font-[400] text-[14px]"
                title="Email nhận hóa đơn (*)"
                placeholder="Vui lòng nhập email"
                type="text"
                name="userName"
              />
              <div className="text-[14px] text-[--primary-color]">
                {error.email}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-[20px]">
            {!check ? (
              <MdOutlineCheckBoxOutlineBlank
                onClick={() => setCheck(!check)}
                className="text-[22px] text-[--primary-color] cursor-pointer"
              />
            ) : (
              <MdOutlineCheckBox
                onClick={() => setCheck(!check)}
                className="text-[22px] text-[--primary-color] cursor-pointer"
              />
            )}

            <span className="text-[16px] font-[500] text-[--sub-color]">
              Thông tin xuất hóa đơn mặc định
            </span>
          </div>
          <div className="flex-center gap-x-[15px] mt-[35px] mb-[30px]">
            <ButtonInfo
              onClick={() => handleReset()}
              className={`bg-[--white-color] border-[--primary-color] text-[--primary-color] cursor-pointer border-[1px] border-solid rounded-[10px]`}
            >
              Thiết lập lại
            </ButtonInfo>
            <ButtonInfo
              onClick={() => handleSave()}
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

export default EditBill;
