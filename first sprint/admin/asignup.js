import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    password: "",
    cpassword: "",
    keyword: "", // New field for the keyword
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, occupation, password, cpassword, keyword } = admin;

    if (keyword !== "SIR_BONUS_mark_DEN") {
      window.alert("Invalid keyword!");
      return;
    }

    const res = await fetch("/asignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        occupation,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.success) {
      window.alert("Admin Registered Successfully!");
      navigate("/login"); // Redirect to login page
    } else {
      window.alert("Admin Registration Unsuccessful!");
    }
  };

  return (
    <div>
      <div className="preloader">
        {/* Preloader content */}
      </div>
      {/* <Header /> */}
      <Header/>

      <section className="page-header-section style-1">
        {/* Page header content */}
      </section>
      <div className="login-section padding-tb">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
           <form method="POST" className="account-form">
  {/* Admin signup form */}
    <div className="form-group">
        <input
        type="text"
        placeholder="User name"
        name="name"
        value={admin.name}
        onChange={handleInputs}
        />
    </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Email"
      name="email"
      value={admin.email}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Phone"
      name="phone"
      value={admin.phone}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Occupation"
      name="occupation"
      value={admin.occupation}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Password"
      name="password"
      value={admin.password}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Confirm Password"
      name="cpassword"
      value={admin.cpassword}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Keyword"
      name="keyword"
      value={admin.keyword}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <button className="d-block lab-btn" onClick={PostData}>
      <span>Get Started Now!</span>
    </button>
  </div>
            </form>

          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer/>
      <a href="" className="scrollToTop">
        {/* Scroll to top */}
      </a>
    </div>
  );
};

export default AdminSignup;
