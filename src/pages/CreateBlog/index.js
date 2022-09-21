import React from "react";
import "./createBlog.scss";
import { Button, Gap, Input, TinyEditor, Upload } from "../../components";

export default function CreateBlog() {
  return (
    <form className="create-blog">
      <h4 className="title">Create New Blog</h4>
      <Gap height={20} />
      <Input label="Title" />
      <Gap height={30} />
      <p className="label">Content</p>
      <TinyEditor />
      <Gap height={30} />
      <Upload />
      <Gap height={30} />
      <div className="save-button">
        <Button title="Save" />
      </div>
    </form>
  );
}
