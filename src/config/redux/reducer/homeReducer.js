const initialState = {
  blogs: [],
  page: { current_page: 1, total_page: 1 },
  user: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BLOG":
      return { ...state, blogs: action.payload };
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "UPDATE_PAGE":
      return { ...state, page: action.payload };
    default:
      return { ...state };
  }
};

export default homeReducer;
