import axios from "axios";

export const setBlogs = (page) => async (dispatch) => {
  const BASE_URL_API = process.env.REACT_APP_API_URL;
  const url = `${BASE_URL_API}/v1/blog/posts?page=${page}&perPage=6`;
  const { data } = await axios.get(url);
  dispatch({ type: "UPDATE_BLOG", payload: data.data });
  const { current_page, total_data, per_page } = data;
  const total_page = Math.ceil(total_data / per_page);
  dispatch({ type: "UPDATE_PAGE", payload: { current_page, total_page } });
};
