/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import BtnContinue from "../../../components/BtnContinue";
import CountDownOTP from "../../../components/CountDownOTP";
import Loading from "../../../components/Loading";

import { postOTP, postValidate } from "../../../services/api";

const OTP = ({ dataOTP, sendDataToParent, sendNewPasswordToParent }) => {
  const numberOfInputs = 6;

  const inputRefs = useRef([]);
  // eslint-disable-next-line no-unused-vars
  const [valueInputs, setValueInputs] = useState(null);
  const [showResendText, setShowResendText] = useState(false);
  const [resetCountdown, setResetCountdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState(dataOTP);

  const handleCountdownComplete = () => {
    setShowResendText(true);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value !== "") {
      if (index < numberOfInputs - 1) {
        inputRefs.current[index + 1].focus();
      } else {
        handleGetInputValues();
      }
    }
  };

  const handleGetInputValues = () => {
    const inputValues = inputRefs.current.map((ref) => ref.value);
    const isFilled = inputValues.every((value) => value !== "");

    setFlag(isFilled);
    setValueInputs(inputValues.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (index > 0 && e.target.value === "") {
        inputRefs.current[index - 1].focus();
      } else if (e.target.value !== "") {
        e.target.value = "";
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text/plain");
    const otpArray = pasteData.split("");

    otpArray.forEach((value, index) => {
      if (index < numberOfInputs) {
        inputRefs.current[index].value = value;

        if (index < numberOfInputs - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    });

    handleGetInputValues();

    e.preventDefault();
  };

  const handleContinue = async () => {
    try {
      setLoading(true);
      if (valueInputs?.length === 6) {
        const res = await postValidate(data.id, data.value, valueInputs);
        if (res?.data?.validate === true) {
          sendDataToParent("resetNewPassword");
          sendNewPasswordToParent({
            value: data.value,
            code: valueInputs,
          });
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSendTo = async (e) => {
    e.preventDefault();
    const res = await postOTP(data?.emailValue);
    setData({
      ...data,
      id: res?.data?.data?.ID,
      value: res?.data?.data?.value,
    });
    setShowResendText(false);
    setResetCountdown((prevState) => !prevState);
  };

  const handleBack = () => {
    sendDataToParent("resetPassword");
  };

  // useEffect(() => {
  //   if (valueInputs && valueInputs.length === 6) {
  //     handleContinue();
  //   }
  // }, [valueInputs]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="flex flex-col items-center justify-between">
        <div className="text-[30px] font-[700] text-[--sub-color] mt-[25px] 2xl:mt-[81px] mb-[20px] 2xl:mb-[27px]">
          Vui lòng nhập mã xác minh
        </div>
        <div className="text-[24px] leading-[28px] font-[700] text-[--gray-color] max-w-[563px] text-center">
          Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến{" "}
          {dataOTP?.emailValue.charAt(0)} *** ***{" "}
          {dataOTP?.emailValue.charAt(dataOTP?.emailValue.length - 1)}
        </div>
        <div className="flex-center gap-x-[22px] mt-[30px] xl:mt-[80px] mb-[30px] xl:mb-[63px]">
          {[...Array(numberOfInputs)].map((_, id) => (
            <input
              key={id}
              ref={(ref) => (inputRefs.current[id] = ref)}
              type="text"
              maxLength={1}
              onFocus={(e) => e.target.classList.add("input-focus")}
              onBlur={(e) => e.target.classList.remove("input-focus")}
              onChange={(e) => handleChange(e, id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              onPaste={handlePaste}
              className="text-center text-[--sub-color] text-[36px] font-[700] w-[55px] h-[70px] border-[1px] border-solid border-[--sub-color] rounded-[15px]"
            />
          ))}
        </div>
        <div className="text-[14px] font-[500] text-[--gray-color]">
          Không nhận được mã xác thực?{" "}
          {showResendText ? (
            <span
              className={`${
                showResendText
                  ? "text-[--primary-color]"
                  : "text-[--gray-color]"
              }`}
              onClick={showResendText ? handleSendTo : null}
            >
              Gửi lại
            </span>
          ) : (
            <CountDownOTP
              onCountdownComplete={handleCountdownComplete}
              resetCountdown={resetCountdown}
            />
          )}
        </div>
        <div className="text-[12px] text-[--gray-color]">
          (Nếu chưa nhận được mã, vui lòng chờ trong{" "}
          <span className="text-[--primary-color]">60</span> giây để gửi lại)
        </div>
        <div className="flex-center gap-x-[156px] mt-[30px] xl:mt-[81px] mb-[45px]">
          <BtnContinue
            onClick={handleBack}
            title="Quay lại"
            classNameTitle="text-[24px] leading-[28px]"
            classNameImg="w-[23px] h-[18px] rotate-180"
            className={`px-[45px] py-[18px] w-fit flex items-center flex-row-reverse gap-x-[33px] rounded-[32px] cursor-not-allowed bg-[#A7A9AC]`}
          />
          <BtnContinue
            onClick={handleContinue}
            title="Tiếp theo"
            classNameTitle="text-[24px] leading-[28px]"
            classNameImg="w-[23px] h-[18px]"
            className={`${
              flag
                ? "cursor-pointer bg-[--primary-color]"
                : "cursor-not-allowed bg-[--border-color]"
            } px-[35px] py-[18px] w-fit flex-center gap-x-[33px] rounded-[32px]`}
          />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default OTP;
