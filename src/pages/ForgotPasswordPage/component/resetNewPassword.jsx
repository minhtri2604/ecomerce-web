/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { TitleForm } from "../../../components/Title";
import { InputPassword } from "../../../components/Input";
import BtnContinue from "../../../components/BtnContinue";

import attention from "../../../assets/images/logo/favicon.ico";
import { postResetPassword } from "../../../services/api";
import Loading from "../../../components/Loading";
import { validateInput } from "../../../helpers/validation";

const ResetNewPassword = ({ dataNewPassword, sendSuccessToParent }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownRetype, setPasswordShownRetype] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const inputRef = useRef({
    password: null,
    accept: null,
  });

  const validation = () => {
    const { password, accept } = inputRef.current;
    const input = {
      password: password?.value,
      confirmPassword: accept?.value,
    };

    const msg = validateInput(input);
    setError(msg);

    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleInputChange = () => {
    const { password, accept } = inputRef.current;

    const isValid = password.value && accept.value;

    setIsFormValid(isValid);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordRetype = () => {
    setPasswordShownRetype(!passwordShownRetype);
  };

  const handleDone = async () => {
    const { password } = inputRef.current;
    try {
      setLoading(true);
      const data = await postResetPassword(
        password.value,
        dataNewPassword.value,
        dataNewPassword.code
      );
      if (data.data.statusCode === 200) {
        sendSuccessToParent(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col items-center">
        <div className="flex-center gap-x-[15px] mt-[95px] mb-[60px]">
          <div className="w-[33px] h-[33px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={attention}
              alt="img"
            />
          </div>
          <TitleForm>Đặt mật khẩu mới</TitleForm>
        </div>
        <div className="lg:w-[352px] flex flex-col items-start">
          <InputPassword
            passwordShown={passwordShown}
            title="Mật khẩu"
            name="password"
            placeholder="Vui lòng nhập mật khẩu mới"
            classNameOne="flex flex-col gap-y-[8px] w-full mb-[8px] lg:mb-[30px]"
            classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
            classNameThree="text-[16px]"
            onClick={togglePassword}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            refs={(el) => (inputRef.current.password = el)}
            error={error.password}
          />
          <InputPassword
            passwordShown={passwordShownRetype}
            title="Xác nhận mật khẩu"
            onClick={togglePasswordRetype}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            refs={(el) => (inputRef.current.accept = el)}
            error={error.confirmPassword}
            name="password"
            placeholder="Vui lòng nhập lại mật khẩu"
            classNameOne="flex flex-col gap-y-[8px] w-full mb-[8px] lg:mb-0"
            classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
            classNameThree="text-[16px]"
          />
          <div className="text-[14px] text-[--primary-color] mt-[8px]">
            Sử dụng 8 ký tự trở lên và không được dài quá 64 ký tự
          </div>
        </div>
        <BtnContinue
          onClick={handleDone}
          title="Hoàn thành"
          classNameTitle="text-[24px] leading-[28px]"
          classNameImg="w-[23px] h-[18px]"
          className={`${
            isFormValid
              ? "cursor-pointer bg-[--primary-color]"
              : "cursor-not-allowed bg-[--border-color]"
          } px-[35px] py-[18px] w-fit flex-center gap-x-[33px] rounded-[32px] cursor-not-allowed bg-[--border-color] mt-[81px] mb-[45px]`}
        />
      </div>
    </>
  );
};

export default ResetNewPassword;
