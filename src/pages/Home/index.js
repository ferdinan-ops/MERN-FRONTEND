import React from "react";
import { BlogItem, Button } from "../../components";
import "./home.scss";

export default function Home() {
  return (
    <section className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" />
      </div>
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div>Pagination</div>
    </section>
  );
}
