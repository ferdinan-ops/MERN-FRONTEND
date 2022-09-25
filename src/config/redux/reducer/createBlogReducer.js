const initialState = {
  form: { title: "", body: "", image: "" },
  imgPreview: null,
};

const createBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      return {
        ...state,
        form: { ...state.form, [action.formType]: action.formValue },
      };
    case "SET_IMAGE_PREVIEW":
      return { ...state, imgPreview: action.payload };
    default:
      return { ...state };
  }
};

export default createBlogReducer;
