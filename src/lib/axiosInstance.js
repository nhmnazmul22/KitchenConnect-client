import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://kitchen-connect-server.vercel.app",
});

const axiosSecureInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://kitchen-connect-server.vercel.app",
  withCredentials: true,
});

export { axiosInstance, axiosSecureInstance };
