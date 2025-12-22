import { axiosSecureInstance, axiosInstance } from "@/lib/axiosInstance";

export const saveUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (err) {
    throw new Error(err?.message || "Saving user failed");
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosSecureInstance.get("/profile");
    return response.data;
  } catch (err) {
    throw new Error(err?.message || "Saving user failed");
  }
};
