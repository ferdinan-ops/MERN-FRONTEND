import React from "react";
import { authBg, logo } from "../../assets";
import { Button, Gap, Input, Linked, Title } from "../../components";

export default function Login() {
  return (
    <section className="main-page">
      <div className="left">
        <a href="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <span>PNFT Market</span>
        </a>

        <div className="register">
          <Title
            title="Login"
            desc="Please fill your detail to access your account"
          />

          <form className="register-form">
            <Input label="Email" type="email" placeholder="Email" />
            <Gap height={20} />
            <Input label="Password" type="password" placeholder="Password" />
            <Gap height={32} />
            <Button title="Login" type="submit" />
            <Gap height={16} />
            <Button title="Login with Google" isGoogle />
          </form>

          <Gap height={20} />
          <Linked
            title="Don't have an account?"
            link="Register"
            path="/register"
          />
        </div>
      </div>

      <div className="right">
        <img src={authBg} alt="" className="bg-image" />
      </div>
    </section>
  );
}
