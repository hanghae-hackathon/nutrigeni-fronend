import axiosConfig from "./axios.config";

const defaultForm = async () => {
  try {
    const res = await axiosConfig({
      url: "/api/",
      method: "get",
    });

    return res;
  } catch (error) {
    return error;
  }
};

const APIs = {
  defaultForm,
};

export default APIs;
