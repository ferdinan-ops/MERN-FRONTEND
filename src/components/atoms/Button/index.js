import React from "react";
import { google } from "../../../assets";
import "./button.scss";

export default function Button({ title, isGoogle, ...rest }) {
  return (
    <div>
      <button {...rest} className={`${isGoogle ? "google-button" : "button"}`}>
        {isGoogle && <img src={google} alt="" />}
        {title}
      </button>
    </div>
  );
}
