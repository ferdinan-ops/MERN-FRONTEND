const initiaState = { blog: {} };
const detailBlogReducer = (state = initiaState, action) => {
  switch (action.type) {
    case "UPDATE_BLOG_DETAIL":
      return { ...state, blog: action.payload };
    default:
      return { ...state };
  }
};

export default detailBlogReducer;
