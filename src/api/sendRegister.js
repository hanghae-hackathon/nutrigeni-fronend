import axiosConfig from "../controller/axios.config";

export const sendRegister = async (data) => {
  try {
    const response = await axiosConfig.post("/auth/create-user", data);
    return response.data; // 서버 응답 데이터 반환
  } catch (error) {
    console.error("Error sending user health data:", error);
    throw error;
  }
};
