import { axiosSecureInstance } from "@/lib/axiosInstance";

export const getStatistics = async () => {
  try {
    const response = await axiosSecureInstance.get(`/platform-statistics`);
    return response.data.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message ||
        err.response.statusText ||
        "Failed to retrieved platform statistics"
    );
  }
};
