import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "CREATE_BLOG", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const createBlogAPI = async ({ title, body, image }) => {
  const newData = new FormData();
  newData.append("title", title);
  newData.append("body", body);
  newData.append("image", image);

  const BASE_URL = process.env.REACT_APP_API_URL;

  try {
    const { data } = await axios.post(BASE_URL + "/v1/blog/post", newData, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
