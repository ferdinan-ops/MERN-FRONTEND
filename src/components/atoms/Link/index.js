import React from "react";
import "./link.scss";

export default function Link({ title, path, link }) {
  return (
    <p className="link">
      {title} <a href={path}>{link}</a>
    </p>
  );
}
