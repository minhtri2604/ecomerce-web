// import { AiOutlineLoading3Quarters } from "react-icons/ai";

import logo from "../../assets/images/logo/favicon.ico";

const Loading = () => {
  return (
    <div className="flex-center fixed top-0 left-0 z-[999999] bg-[#9595955c] w-full h-full">
      {/* <AiOutlineLoading3Quarters className="icon-loading text-[50px] text-[--sub-color]" /> */}
      <div className="w-[100px] h-[100px] icon-loading">
        <img className="w-full h-full" src={logo} alt="logo loading" />
      </div>
    </div>
  );
};

export default Loading;
