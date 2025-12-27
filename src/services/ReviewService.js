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

export const getReviews = async (limit = 10, skip = 0) => {
  try {
    const response = await axiosSecureInstance.get(
      `/reviews?limit=${limit}&skip=${skip}`
    );
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved reviews"
    );
  }
};

export const updateReview = async (reviewId, data) => {
  try {
    const response = await axiosSecureInstance.put(
      `/update-review/${reviewId}`,
      data
    );
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to update review",
    };
  }
};

export const removeReview = async (reviewId) => {
  try {
    const response = await axiosSecureInstance.delete(
      `/delete-review/${reviewId}`
    );
    return response.data;
  } catch (err) {
    return {
      success: false,
      message:
        err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to delete review",
    };
  }
};
