import { axiosSecureInstance, axiosInstance } from "@/lib/axiosInstance";

export const saveUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Saving user failed",
    };
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosSecureInstance.get("/profile");
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to get profile data",
    };
  }
};

export const getUsers = async () => {
  try {
    const response = await axiosSecureInstance.get("/users");
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved users data"
    );
  }
};

export const updateUser = async (userId, data) => {
  try {
    const response = await axiosSecureInstance.put(`/users/${userId}`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to get profile data",
    };
  }
};
