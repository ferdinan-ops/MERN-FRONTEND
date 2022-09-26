import React from "react";
import "./detailBlog.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../config/redux/action";
import Moment from "react-moment";
import { Ring } from "@uiball/loaders";

export default function DetailBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.detailBlogReducer);
  const img_url = `${process.env.REACT_APP_API_URL}/${blog.image}`;

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);

  return (
    <section className="detail-blog-wrapper">
      {blog.author ? (
        <>
          <img className="img-cover" src={img_url} alt="" />
          <h1 className="title">{blog.title}</h1>
          <p className="detail-author">
            {blog.author.name} &bull; <Moment fromNow>{blog.updatedAt}</Moment>
          </p>
          <div className="detail-body">
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </div>
        </>
      ) : (
        <div className="ring-detail">
          <Ring size={50} lineWeight={5} speed={2} color="#5429ff" />
        </div>
      )}
    </section>
  );
}
