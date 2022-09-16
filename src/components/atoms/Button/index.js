import React from "react";
import { google } from "../../../assets";
import "./button.scss";

export default function Button({ title, isGoogle, ...rest }) {
  return (
    <button className={`${isGoogle ? "google-button" : "button"}`} {...rest}>
      {isGoogle && <img src={google} alt="" />}
      {title}
    </button>
  );
}
