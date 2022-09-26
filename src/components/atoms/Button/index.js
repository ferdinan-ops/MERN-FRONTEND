import React from "react";
import { google } from "../../../assets";
import { Ring } from "@uiball/loaders";
import "./button.scss";

export default function Button({ title, isGoogle, isLoading, ...rest }) {
  return (
    <button
      className={`${isGoogle ? "google-button" : "button"} ${
        isLoading && "loading"
      }`}
      {...rest}
    >
      {isGoogle && <img src={google} alt="" />}
      {isLoading ? (
        <Ring size={18} lineWeight={5} speed={2} color="white" />
      ) : (
        title
      )}
    </button>
  );
}
