import axiosConfig from "../controller/axios.config";

export const loginAPI = async (email, password) => {
  try {
    const response = await axiosConfig.post("/auth/login", {
      email,
      password,
    });

    return response.data; // 로그인 응답 데이터 반환
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logoutAPI = async (email) => {
  try {
    const response = await axiosConfig.post("/auth/logout", {
      email,
    });

    return response.data; // 로그인 응답 데이터 반환
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const silentRefresh = async (email, currentRefreshToken) => {
  /* try {
    const response = await axiosConfig.post("/auth/token/reissuance", {
      email,
      currentRefreshToken,
    });

    return response.data; // 새 JWT 토큰 반환
  } catch (error) {
    console.error("Error refreshing JWT:", error);
    throw error;
  } */
};
