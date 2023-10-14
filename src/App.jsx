import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoUser } from "./redux/auth/auth.slice";
import useWindowSize from "./hooks/useWindowSize";
import PopupSignIn from "./components/PopupSignIn";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const accessToken = useSelector((state) => state.auth.accessToken);
  const isPopupSignIn = useSelector((state) => state.popup.isPopupSignIn);

  const handleWarning = () => {
    console.log(
      "%cDừng lại 🐞🐞",
      "color: red; font-size: 40px; font-weight: bold"
    );
    console.warn(
      "%cĐây là một tính năng của trình duyệt dành cho các nhà phát triển. Nếu ai đó bảo bạn sao chép-dán nội dung nào đó vào đây để bật một tính năng của HTG SOFT hoặc “hack” tài khoản của người khác, thì đó là hành vi lừa đảo và sẽ khiến họ có thể truy cập vào tài khoản HTG SOFT của bạn.",
      "font-size: 16px; letter-spacing:0.05px"
    );
    console.warn(
      "%cTruy cập https://htgsoft.com để biết thêm thông tin",
      "font-size: 16px; letter-spacing:0.05px"
    );
  };

  useEffect(() => {
    dispatch(infoUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  useEffect(() => {
    handleWarning();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const width = useWindowSize();

  return (
    <>
      {width > 1025 ? (
        <BrowserRouter>
          <Router />
          <ToastContainer />
          {isPopupSignIn && (
            <PopupSignIn
              title="Phiên làm việc của bạn đã hết hạn"
              desc="Bạn vui lòng chuyển đến trang đăng nhập để tiếp tục phiên làm việc
            của mình."
            />
          )}
          {loading && <Loading />}
        </BrowserRouter>
      ) : (
        <div className="h-screen w-full flex flex-col justify-center items-center px-[10px]">
          <div className="logo">
            <h2>HTGSOFT</h2>
            <h2>HTGSOFT</h2>
          </div>
          <div className="content">
            Trang web hiện tại chưa hỗ trợ cho mobile và tablet
          </div>
        </div>
      )}
    </>
  );
}

export default App;
