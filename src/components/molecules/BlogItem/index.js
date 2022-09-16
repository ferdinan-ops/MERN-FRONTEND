import React from "react";
import { useNavigate } from "react-router-dom";
import { blogImg } from "../../../assets";
import "./blogItem.scss";

export default function BlogItem() {
  const navigate = useNavigate();
  return (
    <div className="blog-item" onClick={() => navigate("/detail-blog")}>
      <img src={blogImg} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author &bull; Date</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          recusandae pariatur, unde commodi consequuntur beatae dicta explicabo
          reiciendis blanditiis voluptatibus repellendus atque, neque rem iusto
          quasi nulla accusantium non repudiandae!
        </p>
      </div>
    </div>
  );
}
