import apiService from "../app/apiService";

const accessToken = localStorage.getItem("accessToken");

// eslint-disable-next-line no-unused-vars
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getInfoUser = async () => {
  const data = await apiService.get(`/user/me/get-personal-info`, config);
  return data;
};

export const getMenu = async () => {
  const data = await apiService.get(`/menu`, config);
  return data;
};

export const loginUser = async (user_login, user_pass) => {
  const data = await apiService.post(`/auth/login`, { user_login, user_pass });
  return data;
};

export const postCheckUser = async (email, phone) => {
  const data = await apiService.post(`/auth/check`, { email, phone });
  return data;
};

export const postRegister = async (
  last_name,
  email,
  phone_number,
  password
) => {
  const data = await apiService.post(`/auth/register`, {
    last_name,
    email,
    phone_number,
    password,
  });
  return data;
};

export const postResetPassword = async (user_pass, value, code) => {
  const data = await apiService.post(`/auth/reset`, { user_pass, value, code });
  return data;
};

export const postOTP = async (value) => {
  const data = await apiService.post(`/otp/send`, { value });
  return data;
};

export const postValidate = async (ID, value, code) => {
  const data = await apiService.post(`/otp/validate`, { ID, value, code });
  return data;
};   
