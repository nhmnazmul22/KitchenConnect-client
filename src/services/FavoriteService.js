import { axiosSecureInstance } from "@/lib/axiosInstance";

export const getFavoriteMeals = async () => {
  try {
    const response = await axiosSecureInstance.get(`/favorite-meals`);
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved favorite meals data"
    );
  }
};

export const saveIntoFavorite = async (data) => {
  try {
    const response = await axiosSecureInstance.post(`/favorite-meals`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to save into favorite",
    };
  }
};

export const getFavoriteDetails = async (id) => {
  try {
    const response = await axiosSecureInstance.get(`/favorite-meals/${id}`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message || "Failed to retrieved favorite data",
    };
  }
};

export const deleteFavoriteMeal = async (id) => {
  try {
    const response = await axiosSecureInstance.delete(`/favorite-meals/${id}`);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to delete favorite meal",
    };
  }
};
