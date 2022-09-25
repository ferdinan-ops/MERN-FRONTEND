import React from "react";
import { useNavigate } from "react-router-dom";
// import { blogImg } from "../../../assets";
import Moment from "react-moment";
import "./blogItem.scss";

export default function BlogItem({ title, author, updatedAt, body, img }) {
  const navigate = useNavigate();
  return (
    <div className="blog-item" onClick={() => navigate("/detail-blog")}>
      <img src={img} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {author.name} &bull; <Moment fromNow>{updatedAt}</Moment>
        </p>
        <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
}
