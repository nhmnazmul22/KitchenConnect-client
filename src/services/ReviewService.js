import { axiosSecureInstance } from "@/lib/axiosInstance";

export const getReviewsByMealId = async (id) => {
  try {
    const response = await axiosSecureInstance.get(`/reviewsByFoodId/${id}`);
    return response.data.data;
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Failed to retrieved food reviews",
    };
  }
};

export const createReview = async (data) => {
  try {
    const response = await axiosSecureInstance.post(`/create-review`, data);
    return response.data;
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Failed to create food reviews",
    };
  }
};
