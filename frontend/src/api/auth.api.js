// import axios from "axios";

// const API = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/auth`,
// });

// export const loginUser = async (userData) => {
//   const response = await API.post("/login", userData);
//   return response.data;
// };

// export const registerUser = async (userData) => {
//   const response = await API.post("/register", userData);
//   return response.data;
// };

// export const getCurrentUser = async (token) => {
//   const response = await API.get("/me", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

import axiosInstance from "./axiosInstance";

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};