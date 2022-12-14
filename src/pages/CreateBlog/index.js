import {
  createBlogAPI,
  getBlogById,
  setForm,
  setImgPreview,
} from "../../config/redux/action";
import { Button, Gap, Input, TinyEditor, Upload } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./createBlog.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export default function CreateBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { buttonLoading } = useSelector((state) => state.globalReducer);
  const { title, body } = form;

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    async function getDataById() {
      const { data } = await axios.get(`${BASE_URL}/v1/blog/post/${id}`);
      const setData = data.data;
      dispatch(setForm("title", setData.title));
      dispatch(setForm("body", setData.body));
      dispatch(setImgPreview(`${BASE_URL}/${setData.image}`));
    }
    if (id) {
      setIsUpdate(true);
      getDataById();
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createBlogAPI(form));
    dispatch(setForm("title", ""));
    dispatch(setForm("body", ""));
    dispatch(setImgPreview(""));
    navigate("/");
  };

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <form className="create-blog" onSubmit={submitHandler}>
      <h4 className="title">{isUpdate ? "Update" : "Create"} New Blog</h4>
      <Gap height={20} />
      <Input
        label="Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Gap height={30} />
      <p className="label">Content</p>
      <TinyEditor
        value={body}
        onEditorChange={(e) => dispatch(setForm("body", e))}
      />
      <Gap height={30} />
      <Upload onChange={imageUploadHandler} img={imgPreview} />
      <Gap height={30} />
      <div className="save-button">
        <Button
          title={isUpdate ? "Update" : "Save"}
          isLoading={buttonLoading}
        />
      </div>
    </form>
  );
}
