import { axiosSecureInstance } from "@/lib/axiosInstance";

export const generateToken = async (email) => {
  try {
    const response = await axiosSecureInstance.get(`/get-token/${email}`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Something went wrong!!",
    };
  }
};

export const clearCookie = async () => {
  try {
    const response = await axiosSecureInstance.get(`/clear-cookies`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to clear cookies",
    };
  }
};
