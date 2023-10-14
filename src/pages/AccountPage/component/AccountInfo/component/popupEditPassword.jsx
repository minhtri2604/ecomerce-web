/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import Popup from "../../../../../components/Popup";
// eslint-disable-next-line no-unused-vars
import BtnContinue from "../../../../../components/BtnContinue";
import {
  postOTP,
  postRegister,
  postValidate,
} from "../../../../../services/api";
import attention from "../../../../../assets/images/signup/step1/attention.svg";
import Loading from "../../../../../components/Loading";
import CountDownOTP from "../../../../../components/CountDownOTP";

const PopupEditPassword = ({ data, sendDataToParent }) => {
  const [dataSignUp, setDataSignUp] = useState(data);
  const inputRefs = useRef([]);
  const [valueInputs, setValueInputs] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [flag, setFlag] = useState(false);
  const [message, setMassage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResendText, setShowResendText] = useState(false);
  const [resetCountdown, setResetCountdown] = useState(false);

  const numberOfInputs = 6;

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

    // Automatically trigger the submit action
    // if (isFilled) {
    //   handleContinue();
    // }
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
        const data = await postValidate(
          dataSignUp.id,
          dataSignUp.emailValue,
          valueInputs
        );

        if (data?.data?.validate === true) {
          let formattedPhoneNumber = dataSignUp.phoneValue;

          if (formattedPhoneNumber.startsWith("0")) {
            formattedPhoneNumber = "+84" + formattedPhoneNumber.slice(1);
          }
          try {
            await postRegister(
              dataSignUp.nameValue,
              dataSignUp.emailValue,
              formattedPhoneNumber,
              dataSignUp.passwordValue
            );
            sendDataToParent({
              //   success: true,
              popup: false,
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          setMassage("Mã OTP chưa đúng");
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setMassage("Yêu cầu không thành công");
      setLoading(false);
    }
  };

  const handleSendTo = async () => {
    try {
      const data = await postOTP(dataSignUp?.emailValue);
      setDataSignUp({
        ...dataSignUp,
        id: data?.data?.data?.ID,
        value: data?.data?.data?.value,
      });
      setShowResendText(false);
      setResetCountdown((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDataSignUp(data);
  }, [data]);

  useEffect(() => {
    if (valueInputs && valueInputs.length === 6) {
      handleContinue();
    }
  }, [valueInputs]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Popup className="fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col items-center mx-[86px]">
          <>
            <div className="text-[--primary-color] text-[24px] font-[700] mt-[64px]">
              Vui lòng nhập mã xác minh
            </div>
            <div className="text-[--sub-color] text-[16px] text-center max-w-[362px]">
              Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến{" "}
              {dataSignUp?.emailValue.charAt(0)} *** ***{" "}
              {dataSignUp?.emailValue.charAt(dataSignUp?.emailValue.length - 1)}
            </div>
            <div className="my-[25px]">
              <div className="flex gap-x-[18px]">
                {[...Array(numberOfInputs)].map((_, id) => (
                  <input
                    key={id}
                    ref={(ref) => (inputRefs.current[id] = ref)}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleChange(e, id)}
                    onKeyDown={(e) => handleKeyDown(e, id)}
                    onPaste={handlePaste}
                    onFocus={(e) => e.target.classList.add("input-focus")}
                    onBlur={(e) => e.target.classList.remove("input-focus")}
                    className="text-center text-[--sub-color] text-[36px] font-[700] w-[45px] h-[57px] border-[1px] border-solid border-[--sub-color] rounded-[12px]"
                  />
                ))}
              </div>
              {message && (
                <div className="flex-center gap-x-[5px] mt-[6px]">
                  <div className="w-[16px] h-[16px]">
                    <img
                      className="w-full h-full"
                      src={attention}
                      alt="icon errorr"
                    />
                  </div>
                  <div className="text-[12px] text-[--primary-color] tracking-[0.6px]">
                    {message}
                  </div>
                </div>
              )}
            </div>
            <div className="text-[--sub-color] text-[14px] font-[500]">
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
            <div className="text-[--sub-color] text-[12px] mb-[33px]">
              (Nếu chưa nhận được mã, vui lòng chờ trong{" "}
              <span className="text-[--primary-color]">60</span> giây để gửi
              lại)
            </div>
          </>
        </div>
      </Popup>
    </>
  );
};

export default PopupEditPassword;
