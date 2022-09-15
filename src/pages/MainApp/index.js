import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./mainApp.scss";

export default function MainApp() {
  return (
    <section className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}
