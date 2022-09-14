import React from "react";
import "./input.scss";

export default function Input({ label, ...rest }) {
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input className="input" {...rest} />
    </div>
  );
}
