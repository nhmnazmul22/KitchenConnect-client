import { axiosInstance } from "@/lib/axiosInstance";

export const makePayment = async (data) => {
  try {
    const response = await axiosInstance.post(
      `/payment-checkout-session`,
      data
    );
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Payment initialize failed",
    };
  }
};

export const paymentSuccess = async (sessionId) => {
  try {
    const response = await axiosInstance.patch(
      `/payment-success?session_id=${sessionId}`
    );
    return response.data.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Payment failed",
    };
  }
};

export const paymentCancel = async (sessionId) => {
  try {
    const response = await axiosInstance.patch(
      `/payment-cancel?session_id=${sessionId}`
    );
    return response.data.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Payment cancel failed",
    };
  }
};
