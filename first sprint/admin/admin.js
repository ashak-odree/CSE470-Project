// import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const Alogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("/asignin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 200 || data) {
      // console.log(data.token);
      localStorage.setItem("token", data.token);

      // window.alert("vala login");
      console.log("josss mama");
      navigate("/apuser");
    } else {
      window.alert("choda khaw");
      console.log("mara khau");
      navigate("/login");
    }
  };
  return (
    <div>
      <>
        {/* preloader start here */}

        {/* preloader ending here */}
        {/* ==========Header Section Starts Here========== */}
        <>{/* <Header/> */}</>

        <section
          className="page-header-section style-1"
          style={{ background: "url(assets/images/page-header.jpg)" }}
        >
          <div className="container">
            <div className="page-header-content">
              <div className="page-header-inner">
                <div className="page-title">
                  <h2>Dining Decision Support - Admin Section</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Login</li>
                </ol>
                <ol className="breadcrumb">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li className="active">Login as User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Page Header Section Ends Here========== */}
        {/* ==========login Section start Here========== */}
        <div className="login-section padding-tb">
          <div className=" container">
            <div className="account-wrapper">
              <h3 className="title">Login</h3>

              <form method="POST" className="account-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>

                {/* <div className="form-group form-button">
            
          </div> */}
                {/* <div className="form-group d-block lab-btn">
            <button type='submit' name = 'signup' id='login' className="form-submit" value="register" >
              <span>Get Started Now</span> 

              {/* <input type="submit" name="signup" id="login" className="form-submit"
              value='register' 

            /> 

            </button>
          </div> */}
                <div class="form-group">
                  <button class="d-block lab-btn" onClick={PostData}>
                    <span>Login</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <>{/* <Footer/> */}</>

        <a href="#" className="scrollToTop">
          <i className="icofont-rounded-up" />
        </a>
      </>
    </div>
  );
};

export default Alogin;
