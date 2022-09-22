import React from "react";
import { authBg, logo } from "../../assets";
import { Button, Gap, Input, Linked, Title } from "../../components";
import "./register.scss";

export default function Register() {
  return (
    <section className="main-page">
      <div className="left">
        <a href="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <span>ferdinan.</span>
        </a>

        <div className="register">
          <Title
            title="Register"
            desc="Please fill your detail to access your account"
          />

          <form className="register-form">
            <Input label="Username" placeholder="Username" />
            <Gap height={20} />
            <Input label="Email" type="email" placeholder="Email" />
            <Gap height={20} />
            <Input label="Password" type="password" placeholder="Password" />
            <Gap height={32} />
            <Button title="Register" type="submit" />
          </form>

          <Gap height={20} />
          <Linked title="Already have an Account?" link="Login" path="/login" />
        </div>
      </div>

      <div className="right">
        <img src={authBg} alt="" className="bg-image" />
      </div>
    </section>
  );
}
