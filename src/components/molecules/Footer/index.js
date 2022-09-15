import React from "react";
import {
  facebook,
  github,
  instagram,
  linkedin,
  logo,
  twitter,
} from "../../../assets";
import "./footer.scss";

function Icon({ icon }) {
  return <img src={icon} alt="icon" width={20} />;
}

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="brand">
          <a href="/">
            <img src={logo} alt="logo" />
            <span>PNFT Market</span>
          </a>
        </div>
        <div className="links">
          <div className="categories">
            <h4>Categories</h4>
            <a href="/">Technology</a>
            <a href="/">Programming</a>
            <a href="/">Design Graphic</a>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <p>Email: email@domain.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="social">
            <h4>Social Media</h4>
            <div className="icon">
              <Icon icon={facebook} />
              <Icon icon={instagram} />
              <Icon icon={twitter} />
              <Icon icon={github} />
              <Icon icon={linkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Created by Ferdinan Imanuel Tumanggor</p>
      </div>
    </footer>
  );
}
