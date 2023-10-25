import React from 'react';
import Leftp from './leftpanal';

function Apuser() {
  return (
    <>
      <div className="color">
        <Leftp />
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn" />
            <h1>
                  <p class="text-muted mb-0">
                    <strong>Welcome to Your Dashboard</strong>
                  </p>
                </h1>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Admin Panel</div>
              <br />
              <br />
              <br />
              <div className="dashboard">
                <div className="user-info">
                  <div className="user-details">
                  <h1>
                  <p class="text-muted mb-0">
                    <strong>hello user name</strong>
                  </p>
                </h1>
                    <p class="text-muted mb-0">Email: user@example.com</p>
                    <p class="text-muted mb-0">Age: 23</p>
                    <p class="text-muted mb-0">Country: Bangladesh</p>
                  </div>
                </div>
                <p class="text-muted mb-0">Here you can find your personalized content and information.</p>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apuser;
