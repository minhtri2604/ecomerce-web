import axios from "axios";
import { API_URL } from "./environment";
import { setAuth } from "../redux/auth/auth.slice";
import { setPopup } from "../redux/popup/popup.slice";
import { store } from "./store";

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  (request) => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    const message = error || "Unknown Error";
    // error?.response?.data?.message || error?.message || "Unknown Error";
    return Promise.reject({ message });
  }
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },

  function (error) {
    console.log("RESPONSE ERROR", error?.response?.data?.statusCode);
    const message = error || "Unknown Error";

    //xử lý khi token hết hạn
    if (error?.response?.data?.statusCode === 403) {
      // window.location.href = "/signin";
      localStorage.removeItem("accessToken");
      store.dispatch(setAuth({ accessToken: null, infoUser: null }));
      store.dispatch(setPopup({ isPopupSignIn: true }));
    }

    return Promise.reject({ message });
  }
);

export default apiService;
