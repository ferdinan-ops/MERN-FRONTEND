import React from "react";
import { logo } from "../../../assets";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="brand">
        <img src={logo} alt="logo" />
        <span>PNFT Market</span>
      </a>
      <p className="logout">Logout</p>
    </header>
  );
}
