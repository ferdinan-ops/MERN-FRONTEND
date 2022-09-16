import React, { useRef } from "react";
import "./upload.scss";
import { blogImg, imageUpload } from "../../../assets";

export default function Upload() {
  const ref = useRef(null);
  return (
    <div>
      <p className="label">Upload Image</p>
      <div className="preview-wrapper">
        {/* <img src={blogImg} alt="" className="preview-image" /> */}
        <div className="image-upload" onClick={() => ref.current.click()}>
          <img src={imageUpload} alt="" />
          <p>Click here to upload your main post image</p>
        </div>
      </div>
      <input type="file" hidden ref={ref} />
    </div>
  );
}
