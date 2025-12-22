// import auth from "@/firebase/firebase.init";
import axios from "axios";
// import { signOut } from "firebase/auth";

const useSecureAxios = () => {
  const axiosInstance = axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL ||
      "https://kitchen-connect-server.vercel.app",
  });

  //   axiosInstance.interceptors.request.use((config) => {
  //     const token = localStorage.getItem("accessToken");

  //     if (token) {
  //       config.headers.authorization = `Bearer ${token}`;
  //     }

  //     return config;
  //   });

  //   axiosInstance.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       const status = error?.response?.status;

  //       if (status === 401 || status === 403) {
  //         signOut(auth).then(() => {
  //           localStorage.removeItem("accessToken");
  //           window.location.href = "/auth/login";
  //         });
  //       }

  //       return Promise.reject(error);
  //     }
  //   );

  return axiosInstance;
};

export default useSecureAxios;
