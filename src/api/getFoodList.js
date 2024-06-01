import axiosConfig from "../controller/axios.config";

export const getFoodList = async (token) => {
  try {
    const response = await axiosConfig.get("/api/food/upload-food", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // 사용자 정보 반환
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
