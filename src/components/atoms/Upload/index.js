import React, { useRef } from "react";
import "./upload.scss";
import { imageUpload } from "../../../assets";

export default function Upload({ img, ...rest }) {
  const ref = useRef(null);
  return (
    <div>
      <p className="label">Upload Image</p>
      <div className="preview-wrapper">
        {img ? (
          <img src={img} alt="" className="preview-image" />
        ) : (
          <div className="image-upload" onClick={() => ref.current.click()}>
            <img src={imageUpload} alt="" />
            <p>Click here to upload your main post image</p>
          </div>
        )}
      </div>
      <input type="file" hidden ref={ref} {...rest} />
    </div>
  );
}
