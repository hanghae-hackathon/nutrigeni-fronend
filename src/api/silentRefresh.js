import axiosConfig from "../controller/axios.config";

export const silentRefresh = async (refreshToken) => {
  try {
    const response = await axiosConfig.post("/refreshToken", {
      refreshToken,
    });

    return response.data.token; // 새 JWT 토큰 반환
  } catch (error) {
    console.error("Error refreshing JWT:", error);
    throw error;
  }
};
