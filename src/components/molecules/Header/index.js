import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../assets";
import "./header.scss";

export default function Header() {
  const navigate = useNavigate();
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={`header ${top ? "" : "scroll"}`}>
      <Link to="/" className="brand">
        <img src={logo} alt="logo" />
        <span>PNFT Market</span>
      </Link>
      <p className="logout" onClick={() => navigate("/login")}>
        Logout
      </p>
    </header>
  );
}
