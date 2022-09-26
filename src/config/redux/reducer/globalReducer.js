const initialState = { user: {}, buttonLoading: false };
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "SET_BUTTON_LOADING":
      return { ...state, buttonLoading: action.payload };
    default:
      return { ...state };
  }
};

export default globalReducer;
