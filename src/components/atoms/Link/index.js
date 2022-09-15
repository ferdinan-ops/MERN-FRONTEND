import React from "react";
import "./link.scss";
import { Link } from "react-router-dom";

export default function Linked({ title, path, link }) {
  return (
    <p className="link">
      {title} <Link to={path}>{link}</Link>
    </p>
  );
}
