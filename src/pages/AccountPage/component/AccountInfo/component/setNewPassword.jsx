import { useState } from "react";
import { InputPassword } from "../../../../../components/Input";
import BtnContinue from "../../../../../components/BtnContinue";

const SetNewPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownRetype, setPasswordShownRetype] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordRetype = () => {
    setPasswordShownRetype(!passwordShownRetype);
  };
  return (
    <div className="w-[380px] text-center mx-auto">
      <div className="text-[24px] font-[700] text-[--primary-color]">
        Đặt mật khẩu mới
      </div>
      <InputPassword
        passwordShown={passwordShown}
        title="Mật khẩu"
        name="password"
        placeholder="Vui lòng nhập mật khẩu mới"
        classNameOne="flex flex-col gap-y-[8px] w-full mb-[8px] lg:mb-[30px]"
        classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
        classNameThree="text-[16px]"
        onClick={togglePassword}
      />
      <InputPassword
        passwordShown={passwordShownRetype}
        title="Xác nhận mật khẩu"
        onClick={togglePasswordRetype}
        name="password"
        placeholder="Vui lòng nhập lại mật khẩu"
        classNameOne="flex flex-col gap-y-[8px] w-full mb-[8px] lg:mb-0"
        classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
        classNameThree="text-[16px]"
      />
      <div className="text-[10px] text-[#F00] text-left">
        Sử dụng 6 ký tự trở lên với tổ hợp các chữ cái, số & ký hiệu
      </div>
      <BtnContinue
        title="Xác nhận"
        classNameTitle="text-[14px] leading-[16px] font-[700]"
        classNameImg="w-[12px] h-[10px] flex-center"
        className={`px-[20px] py-[10px] w-fit flex-center gap-x-[18px] rounded-[18px] cursor-not-allowed bg-[--border-color] mt-[30px] mb-[30px] mx-auto`}
      />
    </div>
  );
};

export default SetNewPassword;
