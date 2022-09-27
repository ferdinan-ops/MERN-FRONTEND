import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlogItem, Button, Gap } from "../../components";
import { setBlogs } from "../../config/redux/action";
import "./home.scss";

const BASE_URL_API = process.env.REACT_APP_API_URL;

export default function Home() {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, page } = useSelector((state) => state.homeReducer);

  const previousHandler = (e) => {
    e.preventDefault();
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const nextHandler = (e) => {
    e.preventDefault();
    setCounter(counter >= page.total_page ? page.total_page : counter + 1);
  };

  useEffect(() => {
    dispatch(setBlogs(counter));
  }, [dispatch, counter]);

  return (
    <section className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <div className="card-wrapper">
        {blogs.map((blog) => (
          <BlogItem
            key={blog._id}
            img={`${BASE_URL_API}/${blog.image}`}
            {...blog}
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previousHandler} />
        <Gap width={30} />
        <p className="page">
          {page.current_page}/{page.total_page}
        </p>
        <Gap width={30} />
        <Button title="Next" onClick={nextHandler} />
      </div>
    </section>
  );
}
