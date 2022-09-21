import React from "react";
import { useNavigate } from "react-router-dom";
import { blogImg } from "../../../assets";
import Moment from "react-moment";
import "./blogItem.scss";

export default function BlogItem({ blog }) {
  const navigate = useNavigate();
  return (
    <div className="blog-item" onClick={() => navigate("/detail-blog")}>
      <img src={blogImg} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">{blog.title}</p>
        <p className="author">
          {blog.author.name} &bull; <Moment fromNow>{blog.updatedAt}</Moment>
        </p>
        <p className="body">{blog.body}</p>
      </div>
    </div>
  );
}
