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

const imageSend = async (file) => {
  try {
    console.log(image)
    const res = await axiosConfig({
      url: "api/image-upload",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
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
