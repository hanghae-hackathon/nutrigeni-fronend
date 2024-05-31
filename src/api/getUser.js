import axiosConfig from "../controller/axios.config";

export const getUser = async (token) => {
  try {
    const response = await axiosConfig.get("/profile", {
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
