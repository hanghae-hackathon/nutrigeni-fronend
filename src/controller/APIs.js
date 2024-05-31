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

const imageSend = async (image) => {
  try {
    const res = await axiosConfig({
      url: "api/image-upload",
      method: "post",
      body: {
        file: image,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};

const APIs = {
  defaultForm,
  imageSend,
};

export default APIs;
