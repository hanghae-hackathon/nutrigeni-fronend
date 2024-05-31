import axiosConfig from "../controller/axios.config";

export const loginAPI = async (id, password) => {
  try {
    const response = await axiosConfig.post("/login", {
      id,
      password,
    });

    return response.data; // 로그인 응답 데이터 반환
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

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
