import a from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export const axiosPrivate = a.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axios;
