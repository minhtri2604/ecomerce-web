import { Link } from "react-router-dom";
import { useRef, useState } from "react";

// import ReCAPTCHA from "react-google-recaptcha";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import { InputPassword, InputSignUp } from "../../../components/Input";

import bg from "../../../assets/images/signin/bg.jpg";
// import Step from "./step";
import PopupOTP from "./popupOTP";
import BtnContinue from "../../../components/BtnContinue";
import { postCheckUser, postOTP } from "../../../services/api";
import Loading from "../../../components/Loading";
import LazyBackgroundImage from "../../../components/LazyBackgroundImage";
import Container from "../../../components/Container";
import NotiSuccess from "../../../components/NotiSuccess";
import { validateInput } from "../../../helpers/validation";
import NotiCheckInfo from "../../../components/NotiCheck";

const BasicSignup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownRetype, setPasswordShownRetype] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  // const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataOTP, setDataOTP] = useState({
    id: "",
    value: "",
    nameValue: "",
    phoneValue: "",
    emailValue: "",
    passwordValue: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [screenSuccess, setScreenSuccess] = useState({
    success: false,
    popup: false,
  });

  const inputRef = useRef({
    name: null,
    phone: null,
    email: null,
    password: null,
    accept: null,
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordRetype = () => {
    setPasswordShownRetype(!passwordShownRetype);
  };

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleScreenSuccess = (data) => {
    setScreenSuccess(data);
  };

  const handleInputChange = () => {
    const { phone, email, password, accept } = inputRef.current;
    const isValid =
      email.value && phone.value && password.value && accept.value;

    setIsFormValid(isValid);
  };

  // const onChange = () => {
  //   setIsVerified(true);
  // };

  const [error, setError] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validation = () => {
    const { phone, email, password, accept } = inputRef.current;
    const input = {
      phone: phone?.value,
      email: email?.value,
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

  const handleContinueStepOne = async () => {
    const { name, phone, email, password } = inputRef.current;
    const isValid = validation();
    let formattedPhoneNumber = phone.value.trim();

    if (formattedPhoneNumber.startsWith("0")) {
      formattedPhoneNumber = "+84" + formattedPhoneNumber.slice(1);
    }
    try {
      if (isValid) {
        setLoading(true);
        const data = await postCheckUser(
          email.value.trim(),
          formattedPhoneNumber
        );

        if (data?.data?.validate) {
          try {
            if (email.value.trim()) {
              const res = await postOTP(email.value.trim());
              setDataOTP({
                id: res.data.data.ID,
                value: res.data.data.value,
                nameValue: name.value.trim(),
                phoneValue: phone.value.trim(),
                emailValue: email.value.trim(),
                passwordValue: password.value.trim(),
              });
              setScreenSuccess({ ...screenSuccess, popup: true });
            }
          } catch (error) {
            console.log(error);
          }
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (
        error.message.response.data.message ===
        `Phone ${formattedPhoneNumber} exist !`
      ) {
        setMessage("Số điện thoại đã tồn tại");
      }
      if (
        error.message.response.data.message === `Email ${email.value} exist !`
      ) {
        setMessage("Email đã tồn tại");
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="h-[calc(100vh-var(--height-header))] w-full">
        <LazyBackgroundImage imageUrl={bg} className="w-full bg-100%">
          <Container className="h-full flex flex-col items-center justify-between py-[10px] 2xl:py-[30px]">
            <div className="w-full flex flex-col items-center max-w-[880px] 2xl:max-w-[980px] bg-[--white-color] rounded-[10px]">
              {!screenSuccess.success ? (
                <>
                  <NotiCheckInfo
                    title="Tài khoản của quý khách chỉ được kích hoạt khi cung cấp
                      đầy đủ các thông tin."
                    className="mb-[10px]"
                  />
                  {/* <div className="mt-[25px] flex-center gap-x-[10px] lg:gap-x-[30px]">
          <Step />
        </div> */}
                  <div className="my-[20px] lg:mx-[100px]">
                    <div className="relative border-[3px] border-solid border-[--primary-color] rounded-[40px] px-[50px] 2xl:px-[100px] pb-[10px] 2xl:pb-[60px]">
                      <div className="text-[--primary-color] font-[700] text-[24px] text-center absolute left-[50%] translate-x-[-50%] top-[-3.5%] bg-[--white-color] px-[10px]">
                        Đăng ký thành viên
                      </div>
                      <div className="text-[16px] text-[--sub-color] text-center mt-[20px]">
                        Bạn đã có tài khoản vui lòng
                        <Link
                          className="text-[--primary-color] ml-[5px]"
                          to={"/signin"}
                        >
                          Đăng nhập
                        </Link>
                      </div>
                      <div className="lg:w-[600px] mt-[13px]">
                        <InputSignUp
                          error={message}
                          title="Tên tài khoản (Tùy chọn)"
                          placeholder="Vui lòng nhập tên tài khoản"
                          type="text"
                          name="userName"
                          refs={(el) => (inputRef.current.name = el)}
                          onChange={handleInputChange}
                          onKeyUp={handleKeyUp}
                        />
                        <InputSignUp
                          title="Số điện thoại"
                          placeholder="Vui lòng nhập số điện thoại của bạn"
                          type="text"
                          name="phone"
                          error={error.phone}
                          refs={(el) => (inputRef.current.phone = el)}
                          onChange={handleInputChange}
                          onKeyUp={handleKeyUp}
                        />
                        <InputSignUp
                          title="Email"
                          placeholder="Vui lòng nhập địa chỉ email"
                          type="text"
                          name="email"
                          refs={(el) => (inputRef.current.email = el)}
                          error={error.email}
                          onChange={handleInputChange}
                          onKeyUp={handleKeyUp}
                        />
                        <div className="flex flex-col lg:flex-row gap-x-[20px]">
                          <InputPassword
                            passwordShown={passwordShown}
                            refs={(el) => (inputRef.current.password = el)}
                            error={error.password}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyUp}
                            title="Mật khẩu"
                            onClick={togglePassword}
                            name="password"
                            placeholder="Vui lòng nhập mật khẩu"
                            classNameOne="flex flex-col gap-y-[8px] w-full lg:w-[50%] mb-[8px] lg:mb-0"
                            classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
                            classNameThree="text-[16px]"
                          />
                          <InputPassword
                            passwordShown={passwordShownRetype}
                            refs={(el) => (inputRef.current.accept = el)}
                            onChange={handleInputChange}
                            error={error.confirmPassword}
                            onKeyUp={handleKeyUp}
                            title="Xác nhận mật khẩu"
                            onClick={togglePasswordRetype}
                            name="password"
                            placeholder="Vui lòng nhập lại mật khẩu"
                            classNameOne="flex flex-col gap-y-[8px] w-full lg:w-[50%] mb-[8px] lg:mb-0"
                            classNameTwo="flex-between border-[#9b9b9b] border-[1px] border-solid rounded-[12px] px-[12px] py-[10px] 2xl:py-[17px]"
                            classNameThree="text-[16px]"
                          />
                        </div>
                        <div className="text-[14px] text-[--primary-color] mt-[8px]">
                          Sử dụng 8 ký tự trở lên và không được dài quá 64 ký tự
                        </div>
                        <div className="mt-[10px] 2xl:mt-[24px] mb-[10px]">
                          <div className="flex items-center gap-x-[5px] cursor-pointer">
                            {checkbox ? (
                              <MdCheckBox
                                onClick={toggleCheckbox}
                                className="text-[--primary-color] text-[30px] lg:text-[22px]"
                              />
                            ) : (
                              <MdCheckBoxOutlineBlank
                                onClick={toggleCheckbox}
                                className="text-[--sub-color] text-[30px] lg:text-[22px]"
                              />
                            )}
                            <span className="text-[16x] leading-[19px]">
                              Đồng ý với{" "}
                              <Link className="text-[--primary-color]" to={"/"}>
                                Điều khoản sử dụng
                              </Link>{" "}
                              và{" "}
                              <Link className="text-[--primary-color]" to={"/"}>
                                Chính sách quyền riêng tư
                              </Link>{" "}
                              của chúng tôi{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-center mt-[15px]">
                      {/* <ReCAPTCHA
              sitekey="6LfOvhcnAAAAAKtC5Iv52qWay1bxsvbdk4eopbRy"
              onChange={onChange}
            /> */}
                      <BtnContinue
                        title="Tiếp theo"
                        classNameTitle="text-[24px] leading-[28px]"
                        classNameImg="w-[24px] h-[18px]"
                        onClick={
                          isFormValid && checkbox ? handleContinueStepOne : null
                        }
                        className={` px-[32px] py-[10px] 2xl:py-[18px] w-fit flex-center gap-x-[32px] rounded-[32px] ${
                          isFormValid && checkbox
                            ? "cursor-pointer bg-[--primary-color]"
                            : "cursor-not-allowed bg-[--border-color]"
                        }`}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <NotiSuccess
                  title="Bạn đã đăng ký thành công."
                  sendDataToParent={handleScreenSuccess}
                />
              )}
            </div>
            <div className="text-[--white-color] text-[14px] font-[500] text-center">
              @ 2022 HTGSOFT JSC
            </div>
          </Container>
        </LazyBackgroundImage>
      </div>
      {screenSuccess.popup && (
        <>
          <div className="fixed w-full h-full top-0 left-0 bg-[#0000005c]"></div>
          <PopupOTP data={dataOTP} sendDataToParent={handleScreenSuccess} />
        </>
      )}
    </>
  );
};

export default BasicSignup;
