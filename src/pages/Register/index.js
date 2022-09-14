import React from "react";
import { authBg, google, logo } from "../../assets";
import { Button, Gap, Input, Link, Title } from "../../components";
import "./register.scss";

export default function Register() {
  return (
    <section className="main-page">
      <div className="left">
        <a href="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <span>PNFT Market</span>
        </a>

        <div className="contain">
          <div className="register">
            <Title
              title="NFT Access"
              desc="Please fill your detail to access your account."
            />
            <form className="register-form">
              <Input label="Username" placeholder="Username" />
              <Gap height={20} />
              <Input label="Email" type="email" placeholder="Email" />
              <Gap height={20} />
              <Input label="Password" type="password" placeholder="Password" />
              <Gap height={32} />
              <Button title="Register" type="submit" />
              {/* <Button title="Sign in with Google" isGoogle /> */}
            </form>

            <Gap height={20} />
            <Link title="Already have an Account?" link="Login" path="/login" />
          </div>
        </div>
      </div>

      <div className="right">
        <img src={authBg} alt="" className="bg-image" />
      </div>
    </section>
  );
}

/* 
Folder atoms adlh folder yang menyimpan komponen yang paling kecil dalam sebuah aplikasi. Pada folder itu kita dapat membuat komponen Input, Button, Gap disitu yang mungkin akan dipakai oleh halaman atau komponen lainnya.

Ingat!! 
Seluruh komponen yang ingin digunakan kembali seperti komponen pada folder atom ini tidak boleh memiliki margin karena akan digunakan oleh komponen lain. Nah, untuk mengatasi hal tersebut kita dapat membuat satu komponen baru yang berguna sebagai komponen kosong yang menerima tinggi atau lebar sehingga kita tidak perlu margin seperti komponen Gap.
*/
