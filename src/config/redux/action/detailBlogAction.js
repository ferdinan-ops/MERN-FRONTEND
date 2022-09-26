import axios from "axios";
import toast from "react-hot-toast";

export const getBlogById = (id) => async (dispatch) => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  try {
    const { data } = await axios.get(BASE_URL + "/v1/blog/post/" + id);
    dispatch({ type: "UPDATE_BLOG_DETAIL", payload: data.data });
  } catch (error) {
    toast.error(error);
  }
};
