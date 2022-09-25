import React from "react";
import "./createBlog.scss";
import { Button, Gap, Input, TinyEditor, Upload } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  createBlogAPI,
  setForm,
  setImgPreview,
} from "../../config/redux/action";

export default function CreateBlog() {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [image, setImage] = useState(null);
  // const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;

  console.log({ title, body });

  const submitHandler = async (e) => {
    e.preventDefault();
    createBlogAPI(form);
    // // Jadi kita menggunakan FormData() saat kita mau mengirimkan file ke server.
    // const newData = new FormData();
    // newData.append("title", title);
    // newData.append("body", body);
    // newData.append("image", image);

    // const BASE_URL = process.env.REACT_APP_API_URL;

    // try {
    //   const { data } = await axios.post(BASE_URL + "/v1/blog/post", newData, {
    //     headers: { "content-type": "multipart/form-data" },
    //   });
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
    // setImage(file);
    // setImagePreview(URL.createObjectURL(file));
  };

  return (
    <form className="create-blog" onSubmit={submitHandler}>
      <h4 className="title">Create New Blog</h4>
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
        <Button title="Save" />
      </div>
    </form>
  );
}
