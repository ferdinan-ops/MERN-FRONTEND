import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import "./blogItem.scss";

export default function BlogItem({ _id, title, author, updatedAt, body, img }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const openMore = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="blog-item" onClick={() => navigate(`/detail-blog/${_id}`)}>
      <div className="head-card-wrapper">
        <img src={img} alt="post" className="image-thumb" />
        <div className="more" onClick={openMore}>
          <div className="more-wrapper">
            <div className="more-icon-wrapper">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`more-menu ${open && "show"}`}>
              <p onClick={() => navigate(`/update-blog/${_id}`)}>Edit</p>
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
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
