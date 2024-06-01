import axiosConfig from "../controller/axios.config";

export const getExerciseList = async (foodName) => {
  try {
    const response = await axiosConfig.get("/api/food/food-exercise-method", {
      params: {
        foodName: foodName,
      },
    });

    return response.data; // 운동 목록 반환
  } catch (error) {
    console.error("Error fetching exercise list:", error);
    throw error;
  }
};
