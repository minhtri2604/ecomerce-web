/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { setPopup } from "../../redux/popup/popup.slice";

import Popup from "../Popup";

const PopupSignIn = ({ ...props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirectSignin = () => {
    dispatch(setPopup({ isPopupSignIn: false }));
    navigate("/signin");
  };

  const handleOffPopup = () => {
    navigate("/");
    dispatch(setPopup({ isPopupSignIn: false }));
  };

  return (
    <>
      <div
        onClick={handleOffPopup}
        className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"
      ></div>
      <Popup className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="flex flex-col items-center px-[41px]">
          <div className="text-[--primary-color] text-[24px] font-[700] mt-[68px] mb-[20px]">
            {props.title}
          </div>
          <div className="text-[--sub-color] text-[14px] max-w-[432px] text-center">
            {props.desc}
          </div>
          <div
            onClick={handleRedirectSignin}
            className="py-[10px] px-[24px] font-[500] text-[14px] text-[--white-color] bg-[--primary-color] rounded-[32px] w-fit my-[20px] cursor-pointer"
          >
            Đăng nhập
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PopupSignIn;
