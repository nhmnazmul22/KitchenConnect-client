import axios from "axios";

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        params: {
          key: import.meta.env.VITE_IMGBB_API_KEY,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return {
      success: true,
      url: response.data.data.url || "",
    };
  } catch (err) {
    return {
      success: false,
      message: err.message || "File upload failed",
    };
  }
};
