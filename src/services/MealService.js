import { axiosSecureInstance } from "@/lib/axiosInstance";

export const getMeals = async (
  limit = 10,
  skip = 0,
  sort = "createAt",
  order = "desc",
  search = ""
) => {
  try {
    const response = await axiosSecureInstance.get(
      `/meals?limit=${limit}&skip=${skip}&sort=${sort}&order=${order}&search=${search}`
    );
    return response.data.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message || "Failed to retrieved the meals data",
    };
  }
};

export const getMealDetails = async (id) => {
  try {
    const response = await axiosSecureInstance.get(`/meals/${id}`);
    return response.data.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message || "Failed to retrieved the meal details",
    };
  }
};
