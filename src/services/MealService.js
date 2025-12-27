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
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved the meals data"
    );
  }
};

export const getMealDetails = async (id) => {
  try {
    const response = await axiosSecureInstance.get(`/meals/${id}`);
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved the meals data"
    );
  }
};

export const getMyMeals = async (
  limit = 10,
  skip = 0,
  sort = "createAt",
  order = "desc",
  search = ""
) => {
  try {
    const response = await axiosSecureInstance.get(
      `/my-meals?limit=${limit}&skip=${skip}&sort=${sort}&order=${order}&search=${search}`
    );
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved the meals data"
    );
  }
};

export const createMeal = async (data) => {
  try {
    const response = await axiosSecureInstance.post(`/meals`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to create meal",
    };
  }
};

export const updateMeal = async (mealId, data) => {
  try {
    const response = await axiosSecureInstance.put(`/meals/${mealId}`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to update meal",
    };
  }
};

export const deleteMeal = async (mealId) => {
  try {
    const response = await axiosSecureInstance.delete(`/meals/${mealId}`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to delete meal",
    };
  }
};
