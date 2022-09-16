import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button } from "../../components";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <div className="card-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Button title="Next" />
      </div>
    </section>
  );
}
