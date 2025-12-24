import { axiosSecureInstance } from "@/lib/axiosInstance";

export const createOrder = async (data) => {
  try {
    const response = await axiosSecureInstance.post(`/orders`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to create order",
    };
  }
};
