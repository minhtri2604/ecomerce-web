/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import BtnContinue from "../../../components/BtnContinue";
import Popup from "../../../components/Popup";
import { TitleForm } from "../../../components/Title";
import { postOTP } from "../../../services/api";
import Loading from "../../../components/Loading";

const ResetPassword = ({ sendDataToParent, sendOTPToParent }) => {
  const [error, setError] = useState({
    email: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);

  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validation = () => {
    const msg = {};

    if (!emailRef.current?.value.match(emailReg)) {
      msg.email = "Email không hợp lệ!";
    }

    setError(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleInputChange = () => {
    const email = emailRef.current.value;

    setIsFormValid(email);
  };

  const handleContinue = async () => {
    const isValid = validation();
    if (isValid) {
      setLoading(true);
      try {
        if (emailRef.current?.value) {
          const res = await postOTP(emailRef.current?.value);
          sendDataToParent("otp");
          sendOTPToParent({
            id: res.data.data.ID,
            value: res.data.data.value,
            emailValue: emailRef.current?.value,
          });
        }

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col items-center">
        <TitleForm className="mt-[25px] 2xl:mt-[60px] mb-[60px]">
          Đặt lại mật khẩu
        </TitleForm>
        <Popup className="relative">
          <TitleForm className="mt-[74px] mx-[86px]">
            Nhập email của bạn
          </TitleForm>
          <div className=" mx-[65px] mt-[30px] mb-[42px] w-[380px]">
            <input
              type="text"
              ref={emailRef}
              onKeyUp={handleKeyUp}
              onChange={handleInputChange}
              placeholder="abc@gmail.com"
              className="px-[16px] py-[18px] w-full rounded-[12px] border-[1px] border-solid border-[--sub-color] caret-[--primary-color] focus:border-[--primary-color] focus:text-[--primary-color]"
            />
            <div className="mt-[8px] text-[--primary-color]">{error.email}</div>
          </div>
        </Popup>
        <BtnContinue
          onClick={isFormValid ? () => handleContinue() : null}
          title="Tiếp theo"
          classNameTitle="text-[24px] leading-[28px]"
          classNameImg="w-[23px] h-[18px]"
          className={`px-[35px] py-[18px] w-fit flex-center gap-x-[33px] rounded-[32px] mt-[81px] mb-[45px] ${
            isFormValid
              ? "cursor-pointer bg-[--primary-color]"
              : "cursor-not-allowed bg-[--border-color]"
          }`}
        />
      </div>
    </>
  );
};

export default ResetPassword;
