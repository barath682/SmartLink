// import axios from "axios";

// const API = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/url`,
// });

// // Create short URL
// export const createShortUrl = async (urlData, token) => {
//   const response = await API.post("/create", urlData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

// // Get all user URLs
// export const getMyUrls = async (token) => {
//   const response = await API.get("/my-urls", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

// // Delete URL
// export const deleteUrl = async (urlId, token) => {
//   const response = await API.delete(`/${urlId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

import axiosInstance from "./axiosInstance";

export const createShortUrl = async (urlData) => {
  const response = await axiosInstance.post("/url/create", urlData);
  return response.data;
};

export const getMyUrls = async () => {
  const response = await axiosInstance.get("/url/my-urls");
  return response.data;
};

export const deleteUrl = async (urlId) => {
  const response = await axiosInstance.delete(`/url/${urlId}`);
  return response.data;
};