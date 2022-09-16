import React from "react";
import "./detailBlog.scss";
import { blogImg } from "../../assets";

export default function DetailBlog() {
  return (
    <section className="detail-blog-wrapper">
      <img className="img-cover" src={blogImg} alt="" />
      <h1 className="title">Lorem ipsum dolor sit amet.</h1>
      <p className="detail-author">Author &bull; Date</p>
      <div className="detail-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          molestias quaerat ullam autem consectetur dolor consequatur sed sit
          non sequi error eos suscipit, fuga illo cumque. Modi voluptatem sed
          earum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero, fugit! Quisquam, assumenda. Reprehenderit, quis delectus
          dignissimos esse commodi ut voluptatum similique nihil quod nisi
          voluptas dolorem veniam ullam sint repudiandae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Inventore ducimus perferendis esse
          possimus fuga quasi, nesciunt voluptatibus totam placeat corporis?
          Odit repudiandae at ipsum unde quo, deleniti repellendus modi
          accusantium.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          molestias quaerat ullam autem consectetur dolor consequatur sed sit
          non sequi error eos suscipit, fuga illo cumque. Modi voluptatem sed
          earum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero, fugit! Quisquam, assumenda. Reprehenderit, quis delectus
          dignissimos esse commodi ut voluptatum similique nihil quod nisi
          voluptas dolorem veniam ullam sint repudiandae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Inventore ducimus perferendis esse
          possimus fuga quasi, nesciunt voluptatibus totam placeat corporis?
          Odit repudiandae at ipsum unde quo, deleniti repellendus modi
          accusantium.
        </p>
      </div>
    </section>
  );
}
