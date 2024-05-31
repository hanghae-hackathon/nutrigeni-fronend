import axiosConfig from "../controller/axios.config";

export const sendUserHealthData = async (data) => {
  try {
    const response = await axiosConfig.post("/userHealthData", data);
    return response.data; // 서버 응답 데이터 반환
  } catch (error) {
    console.error("Error sending user health data:", error);
    throw error;
  }
};
