import React from "react";
import "./title.scss";

export default function Title({ title, desc }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="description">{desc}</p>
    </>
  );
}
