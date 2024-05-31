import axiosConfig from "../controller/axios.config";

export const silentRefresh = async (email, currentRefreshToken) => {
  try {
    const response = await axiosConfig.post("/auth/token/reissuance", {
      email,
      currentRefreshToken,
    });

    return response.data; // 새 JWT 토큰 반환
  } catch (error) {
    console.error("Error refreshing JWT:", error);
    throw error;
  }
};
