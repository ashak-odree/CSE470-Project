import React from 'react';
import Leftp from './leftpanal';
import RestaurantsShow from '../restaurantsshow'; // Import the component responsible for showing restaurant data

function Ares() {
  return (
    <div className="color">
      <Leftp />
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn" />
            <span className="dashboard">
              <p className="text-muted mb-0">Welcome to your Dashboard, Username.</p>
            </span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              
              <div>
              <a href="/rescreate" className="button button5">++ Add New Restaurant</a>
              </div>
              <div>
              <a href="/menucreate" className="button button5">++ Add New Restaurant's menu</a>
              </div>
              <RestaurantsShow /> {/* Include the component responsible for showing restaurant data */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ares;
