const initialState = { user: {} };
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default globalReducer;
