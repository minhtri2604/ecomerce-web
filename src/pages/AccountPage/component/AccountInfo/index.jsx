import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { LiaSaveSolid } from "react-icons/lia";

import DateOfBirth from "./component/dateOfBirth";
import NameItem from "./component/nameItem";
import PhoneMailItem from "./component/phoneMailItem";
import PasswordItem from "./component/passwordItem";
import PopupEditPassword from "./component/popupEditPassword";
import Gender from "./component/gender";
import { TitleAccount } from "../../../../components/Title";
import { ButtonEdit } from "../../../../components/Button";
// import SetNewPassword from "./setNewPassword";

const AccountInfo = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [edit, setEdit] = useState(false);
  const [popupPassword, setPopupPassword] = useState(false);

  const user = useSelector((state) => state.auth.infoUser);

  const phoneNumber = "0" + user?.phone_number.slice(3);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;
    if (imageFile.size > maxSize) {
      alert("Hình ảnh quá lớn. Vui lòng chọn hình ảnh có dung lượng nhỏ hơn.");
      return;
    }
    setSelectedImage(imageFile);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  const handleSendDataToParent = (data) => {
    setPopupPassword(data);
  };

  return (
    <>
      <div className="flex-between border-b-[1px] border-solid border-[--border-color] pb-[25px]">
        <TitleAccount>{user?.last_name + " " + user?.first_name}</TitleAccount>
        {!edit ? (
          <>
            <ButtonEdit onClick={() => handleEdit()} />
          </>
        ) : (
          <div
            onClick={() => handleSave()}
            className="flex items-center gap-x-[5px] text-[--white-color] bg-[--primary-color] py-[10px] px-[25px] rounded-[10px] cursor-pointer"
          >
            <span className="text-[12px] font-[700]">Lưu</span>
            <LiaSaveSolid className="text-[18px]" />
          </div>
        )}
      </div>
      <div className="flex justify-between mt-[25px]">
        {/* <SetNewPassword /> */}
        <div className="flex flex-col gap-y-[35px]">
          <NameItem
            edit={edit}
            title="Tên tài khoản :"
            className="font-[500] py-[7px]"
            value={user?.last_name + " " + user?.first_name}
          />
          <PhoneMailItem title="Số điện thoại :" value={phoneNumber} />
          <PhoneMailItem title="Địa chỉ email :" value={user?.email} />
          <PasswordItem
            handleSendDataToParent={handleSendDataToParent}
            edit={edit}
            title="Mật khẩu :"
            value="********"
          />
          <Gender edit={edit} gender="male" />
          <DateOfBirth edit={edit} DOB="17/11/2000" />
        </div>
        <div className="w-[250px] h-[250px] border-[1px] border-solib border-[--border-color] rounded-[10px] relative">
          <img
            className="w-full h-full object-contain rounded-[10px]"
            src={`${
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "https://cdn5.f-cdn.com/contestentries/419315/18060692/5741e0246b665_thumb900.jpg"
            }`}
            alt="avt"
          />
          <div className="absolute bottom-[10px] right-[10px] bg-[--gray-color] rounded-[8px] p-[4px] cursor-pointer">
            <PiImagesSquareDuotone
              onClick={handleImageClick}
              className="text-[30px] text-[--white-color]"
            />
            <input
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              type="file"
              accept=".png, .jpg, .jpeg"
            />
          </div>
        </div>
      </div>
      {popupPassword && (
        <>
          <div
            onClick={() => setPopupPassword(false)}
            className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"
          ></div>
          <PopupEditPassword />
        </>
      )}
    </>
  );
};

export default AccountInfo;
