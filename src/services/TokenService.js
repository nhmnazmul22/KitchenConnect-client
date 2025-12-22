import { axiosInstance } from "@/lib/axiosInstance";

export const generateToken = async (email) => {
  try {
    const response = await axiosInstance.get(`/get-token/${email}`);
    return response.data;
  } catch (err) {
    throw new Error(err?.message || "Something went wrong!!");
  }
};
