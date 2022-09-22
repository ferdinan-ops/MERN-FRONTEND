const globalState = { user: {} };
const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default globalReducer;
