import axios from "axios";
import toast from "react-hot-toast";
import { setButtonLoading } from "./globalAction";

export const setForm = (formType, formValue) => {
  return { type: "CREATE_BLOG", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const createBlogAPI = (form) => async (dispatch) => {
  const newData = new FormData();
  newData.append("title", form.title);
  newData.append("body", form.body);
  newData.append("image", form.image);

  const BASE_URL = process.env.REACT_APP_API_URL;

  try {
    const { data } = await axios.post(BASE_URL + "/v1/blog/post", newData, {
      headers: { "content-type": "multipart/form-data" },
    });
    dispatch(setButtonLoading(true));
    toast.success(data.message);
    dispatch(setButtonLoading(false));
  } catch (error) {
    toast.error(error);
  }
};
