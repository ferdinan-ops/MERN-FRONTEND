import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button } from "../../components";
import "./home.scss";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllBlog = async () => {
      const url = `${process.env.REACT_APP_API_URL}/blog/posts?perPage=6`;
      const { data } = await axios.get(url);
      setBlogs(data.data);
    };
    getAllBlog();
  }, []);

  return (
    <section className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <div className="card-wrapper">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Button title="Next" />
      </div>
    </section>
  );
}
