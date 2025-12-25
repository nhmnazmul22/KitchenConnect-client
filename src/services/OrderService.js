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

export const getMyOrders = async () => {
  try {
    const response = await axiosSecureInstance.get(`/my-orders`);
    return response.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved orders"
    );
  }
};

export const updateOrder = async (orderId, data) => {
  try {
    const response = await axiosSecureInstance.put(`/orders/${orderId}`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to update order",
    };
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await axiosSecureInstance.put(`/order-status/${orderId}`, {
      orderStatus: status,
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to update order status",
    };
  }
};

export const getOrders = async () => {
  try {
    const response = await axiosSecureInstance.get(`/orders`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to retrieved orders",
    };
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axiosSecureInstance.delete(`/orders/${orderId}`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to delete order",
    };
  }
};
