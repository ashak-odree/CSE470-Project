import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Leftp = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/logout');
      localStorage.removeItem('token'); // Remove token from local storage
      navigate('/alogin'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className="sidebar">
      <div className="logo-details headColor">
        <span className="logo_name dot">Dining Decision Support</span>
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="/apuser"
            className={activeLink === "dashboard" ? "active" : ""}
            onClick={() => handleLinkClick("dashboard")}
          >
            <i className="bx bx-grid-alt" />
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="/userlist"
            className={activeLink === "userlist" ? "active" : ""}
            onClick={() => handleLinkClick("userlist")}
          >
            <i className="bx bx-box" />
            <span className="links_name">User List</span>
          </a>
        </li>
        <li>
          <a
            href="/reslist"
            className={activeLink === "reslist" ? "active" : ""}
            onClick={() => handleLinkClick("reslist")}
          >
            <i className="bx bx-list-ul" />
            <span className="links_name">Restaurants</span>
          </a>

          
        </li>
        <li className="log_out">
        <a href="#" onClick={handleLogout} className="signup">
                    <i className="icofont-users" /> <span>Logout</span>
                  </a>
        </li>
      </ul>
    </div>
  );
};

export default Leftp;
