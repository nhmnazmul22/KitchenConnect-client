import { axiosSecureInstance } from "@/lib/axiosInstance";

export const sendRoleRequest = async (data) => {
  try {
    const response = await axiosSecureInstance.post(`/role-requests`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to send role request",
    };
  }
};

export const getRoleRequests = async () => {
  try {
    const response = await axiosSecureInstance.get(`/role-requests`);
    return response.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved role requests"
    );
  }
};

export const updateRoleRequests = async (requestId) => {
  try {
    const response = await axiosSecureInstance.patch(
      `/role-requests/${requestId}`
    );
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to update role request",
    };
  }
};
