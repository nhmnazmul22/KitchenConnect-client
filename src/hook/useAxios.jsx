// import auth from "@/firebase/firebase.init";
import axios from "axios";
// import { signOut } from "firebase/auth";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL ||
      "https://kitchen-connect-server.vercel.app",
  });

  return axiosInstance;
};

export default useAxios;
