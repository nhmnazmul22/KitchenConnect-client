import axiosInstance from "@/lib/axiosInstanace";

export const saveUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (err) {
    throw new Error(err?.message || "Saving user failed");
  }
};
