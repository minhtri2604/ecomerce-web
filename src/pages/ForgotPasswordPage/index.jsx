import { useState } from "react";
import LazyBackgroundImage from "../../components/LazyBackgroundImage";
import Container from "../../components/Container";
import ResetPassword from "./component/resetPassword";
import OTP from "./component/OTP";

import bg from "../../assets/images/signin/bg.jpg";
import ResetNewPassword from "./component/resetNewPassword";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import NotiSuccess from "../../components/NotiSuccess";

const ForgotPasswordPage = () => {
  useDocumentTitle("Đặt lại mật khẩu");

  const [activeStep, setActiveStep] = useState("resetPassword");
  const [dataOTP, setDataOTP] = useState(null);
  const [dataNewPassword, setDataNewPassword] = useState(null);
  const [screenSuccess, setScreenSuccess] = useState(false);

  const handleClick = (data) => {
    setActiveStep(data);
  };

  const handleOTP = (data) => {
    setDataOTP(data);
  };

  const handleNewPassword = (data) => {
    setDataNewPassword(data);
  };

  const handleScreenSuccess = (data) => {
    setScreenSuccess(data);
  };

  return (
    <div className="h-[calc(100vh-var(--height-header))] w-full">
      <LazyBackgroundImage imageUrl={bg} className="w-full h-full bg-100%">
        <Container className="flex flex-col items-center justify-between h-full py-[50px] 2xl:py-[50px]">
          <div className="w-[820px] xl:w-[980px] bg-[--white-color] rounded-[10px] modal-shadow">
            {!screenSuccess ? (
              <>
                {activeStep === "resetPassword" && (
                  <ResetPassword
                    sendDataToParent={handleClick}
                    sendOTPToParent={handleOTP}
                  />
                )}

                {activeStep === "otp" && (
                  <OTP
                    dataOTP={dataOTP}
                    sendDataToParent={handleClick}
                    sendNewPasswordToParent={handleNewPassword}
                  />
                )}

                {activeStep === "resetNewPassword" && (
                  <ResetNewPassword
                    dataNewPassword={dataNewPassword}
                    sendSuccessToParent={handleScreenSuccess}
                  />
                )}
              </>
            ) : (
              <NotiSuccess
                title="Bạn đã đặt lại mật khẩu
                  thành công."
                // sendDataToParent={handleScreenSuccess}
              />
            )}
          </div>
          <div className="text-[14px] text-[--white-color] font-[500]">
            @ 2022 HTGSOFT JSC
          </div>
        </Container>
      </LazyBackgroundImage>
    </div>
  );
};

export default ForgotPasswordPage;
