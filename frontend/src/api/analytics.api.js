// import axios from "axios";

// const API = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/analytics`,
// });

// // Get analytics for one URL
// export const getUrlAnalytics = async (urlId, token) => {
//   const response = await API.get(`/${urlId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

import axiosInstance from "./axiosInstance";

export const getUrlAnalytics = async (urlId) => {
  const response = await axiosInstance.get(`/analytics/${urlId}`);
  return response.data;
};