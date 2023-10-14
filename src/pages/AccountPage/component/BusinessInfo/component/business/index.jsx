/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { ButtonInfo } from "../../../../../../components/Button";
import ItemImage from "../itemImage";
import { ItemAccountName } from "../itemInput";
import Address from "./address";
import BusinessClass from "./businessClass";
import BusinessLicenseNumber from "./businessLicenseNumber";
import ProfileGPP from "./profileGPP";

const Business = () => {
  const [businessClass, setBussinessClass] = useState("Nhà thuốc");

  const nameRef = useRef();

  const handleChangeAccountName = () => {
    const abc = nameRef.current.value;
  };

  const sendDataBussinessClass = (data) => {
    setBussinessClass(data);
  };

  return (
    <>
      <BusinessClass sendDataBussinessClass={sendDataBussinessClass} />
      <ItemAccountName
        refs={nameRef}
        onChange={handleChangeAccountName}
        className="font-[500]"
        className2="font-[400]"
        title="Tên nhà thuốc"
        placeholder="Vui lòng nhập tên cơ sở"
        type="text"
        name="userName"
      />
      <Address />
      <BusinessLicenseNumber title="Số giấy phép kinh doanh" />
      <BusinessLicenseNumber title="Số giấy chứng nhận đủ điều kiện kinh doanh dược" />
      <ProfileGPP title="Hồ sơ GPP/ GDP" />
      <ItemImage
        title="Chứng chỉ hành nghề dược của quản lí chuyên môn"
        desc="Hình ảnh/ file đính kèm chứng chỉ hành nghề"
      />
      <ItemImage
        title="Hình ảnh bảng hiệu / cơ sở kinh doanh"
        desc="Hình ảnh/ file đính kèm hình ảnh nhà thuốc"
        className="mt-[20px] mb-[30px]"
      />
      <div className="flex items-center justify-center gap-x-[20px]">
        <ButtonInfo className="bg-[--title-table-color] text-[--white-color] cursor-pointer rounded-[10px]">
          Làm lại
        </ButtonInfo>
        <ButtonInfo className="bg-[--primary-color] text-[--white-color] cursor-pointer rounded-[10px]">
          Gửi và lưu thay đổi
        </ButtonInfo>
      </div>
    </>
  );
};

export default Business;
