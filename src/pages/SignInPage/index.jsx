import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { InputPassword } from "../../components/Input";
import LazyBackgroundImage from "../../components/LazyBackgroundImage";
import Social from "./component/social";
import { TitleForm } from "../../components/Title";
import LockAccount from "./component/lockAccount";

import { loginUser } from "../../services/api";
import { setAuth } from "../../redux/auth/auth.slice";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";

import attention from "../../assets/images/signin/attention.svg";
import bg from "../../assets/images/signin/bg.jpg";
import { regexPhoneNumber, validateSignin } from "../../helpers/validation";

const SignInPage = () => {
  useDocumentTitle("Đăng nhập");
  const [passwordShown, setPasswordShown] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [lockAccount, setLockAccount] = useState(false);

  const [infoSignIn, setInfoSignIn] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    phone: "",
    password: "",
    checked: false,
  });

  const inputRef = useRef({
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validation = () => {
    const { email, password } = inputRef.current;
    let inputEmail = email?.value;
    const input = {
      email: inputEmail,
      password: password?.value,
    };

    if (regexPhoneNumber.test(inputEmail)) {
      inputEmail = inputEmail.replace(/\D/g, "");

      if (inputEmail.startsWith("0") && inputEmail.length >= 10) {
        inputEmail = "+84" + inputEmail.substring(1);
      }
    }

    input.email = inputEmail;

    const msg = validateSignin(input);
    setError(msg);

    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleKeyUp = () => {
    validation();
  };

  const handleInputChange = () => {
    const { email, password } = inputRef.current;
    const isValid = email.value && password.value;
    setIsFormValid(isValid);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const isValid = validation();
    const { email, password } = inputRef.current;
    let emailInput = email.value.trim();

    try {
      if (isValid) {
        setLoading(true);

        if (regexPhoneNumber.test(emailInput)) {
          if (emailInput.startsWith("0") && emailInput.length >= 10) {
            emailInput = "+84" + emailInput.substring(1);
          }
        }
        const result = await loginUser(emailInput, password?.value.trim());

        if (checkbox === true) {
          const userInfo = {
            email: email?.value.trim(),
            password: password?.value.trim(),
            checked: true,
          };
          localStorage.setItem("infoSignin", JSON.stringify(userInfo));
        } else {
          localStorage.removeItem("infoSignin");
        }
        dispatch(setAuth({ accessToken: result?.data?.data?.accessToken }));

        localStorage.setItem("accessToken", result?.data?.data?.accessToken);
        // toast.success("Đăng nhập thành công !!!");
        setInfoSignIn("Đăng nhập thành công !!!");
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      if (error.message?.response?.data?.message === "User Blocked") {
        setLockAccount(true);
        setLoading(false);
      } else {
        setInfoSignIn("Sai thông tin đăng nhập");
      }
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("infoSignin"));
    setSignupInfo(userInfo);
    setCheckbox(userInfo?.checked);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="h-[calc(100vh-var(--height-header))] w-full">
        <LazyBackgroundImage imageUrl={bg} className="w-full bg-100%">
          <Container className="h-full flex flex-col justify-between items-center py-[10px] 2xl:py-[50px]">
            <div className="pt-[20px] pb-[10px] 2xl:pt-[50px] 2xl:pb-[30px] lg:px-[100px] w-[780px] bg-[--white-color] rounded-[10px] box-shadow-hover transition modal-shadow">
              <TitleForm className="leading-[40px] text-center">
                Đăng nhập
              </TitleForm>
              <div className="text-[16px] leading-[19px] text-[--sub-color] mt-[10px] mb-[16px] text-center">
                Bạn chưa có tài khoản?{" "}
                <Link to={"/signup"} className="text-[--primary-color]">
                  Đăng ký
                </Link>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="flex flex-col gap-y-[10px] text-[16px] leading-[19px]">
                  <div className="flex item-center gap-x-[15px]">
                    <label className="text-[--sub-color] font-[700]">
                      Số điện thoại / Email
                    </label>
                    {(infoSignIn || error.email) && (
                      <div className="flex items-center gap-x-[5px]">
                        <div className="w-[16px] h-[16px]">
                          <LazyLoadImage
                            effect="blur"
                            className="w-full h-full"
                            src={attention}
                            alt="img"
                          />
                        </div>
                        <div className="text-[12px] leading-[18px] tracking-[0.05em] text-[--primary-color] flex-1">
                          {infoSignIn || error.email || error.phone}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    onKeyUp={handleKeyUp}
                    ref={(el) => (inputRef.current.email = el)}
                    onChange={handleInputChange}
                    defaultValue={signupInfo?.email || ""}
                    type="text"
                    name="email"
                    className="border-[1px] border-[--border-color] border-solid px-[15px] py-[10px] 2xl:py-[14px] rounded-[12px] text-[12px] caret-[--primary-color] focus:border-[--primary-color] focus:text-[--primary-color]"
                    placeholder="Vui lòng nhập số điện thoại/Email"
                    autoComplete="off"
                  />
                  {/* <p className="text-[#eb3838] text-[14px]">{error.email}</p> */}
                </div>

                <InputPassword
                  error={error.password}
                  passwordShown={passwordShown}
                  title="Mật khẩu"
                  onKeyUp={handleKeyUp}
                  onClick={togglePassword}
                  refs={(el) => (inputRef.current.password = el)}
                  onChange={handleInputChange}
                  defaultValue={signupInfo?.password || ""}
                  name="password"
                  placeholder="Vui lòng nhập mật khẩu"
                  classNameOne="flex flex-col gap-y-[10px] text-[16px] leading-[19px] mt-[23px]"
                  classNameTwo="border-[1px] border-[--border-color] border-solid px-[15px] py-[10px] 2xl:py-[14px] rounded-[12px] flex-between"
                  classNameThree="text-[12px]"
                />
                <div className="flex-between mt-[13px]">
                  <div className="flex items-center gap-x-[5px] cursor-pointer">
                    {checkbox ? (
                      <MdCheckBox
                        onClick={toggleCheckbox}
                        className="text-[--primary-color] text-[22px]"
                      />
                    ) : (
                      <MdCheckBoxOutlineBlank
                        onClick={toggleCheckbox}
                        className="text-[--sub-color] text-[22px]"
                      />
                    )}
                    <span className="text-[14px] font-[700] leading-[17px] text-[--sub-color]">
                      Ghi nhớ đăng nhập của tôi
                    </span>
                  </div>
                  <Link
                    className="text-[--primary-color] text-[12px] leading-[14px] pr-[10px]"
                    to={"/forgot-password"}
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`mt-[38px] text-[--white-color] text-[24px] font-[700] rounded-[32px] py-[10px] 2xl:py-[13px] px-[60px] w-fit block mx-auto ${
                    !isFormValid && signupInfo === null
                      ? "cursor-not-allowed bg-[#E6E7E8]"
                      : "cursor-pointer bg-[--primary-color]"
                  }`}
                >
                  Đăng nhập
                </button>

                <Social />
              </form>
            </div>
            <div className="text-[14px] text-[--white-color] font-[500] text-center">
              @ 2022 HTGSOFT JSC
            </div>
          </Container>
          {lockAccount && (
            <>
              <div
                onClick={() => setLockAccount(false)}
                className="fixed w-full h-full top-0 left-0 bg-[#0000005c]"
              ></div>
              <LockAccount />
            </>
          )}
        </LazyBackgroundImage>
      </div>
    </>
  );
};

export default SignInPage;
