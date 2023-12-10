import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const Package = () => {
  return (
    <div>
      <Header />

      <section className="story-section padding-tb bg-img">
        <div className=" container">
          <div className="section-header">
            <h2>Packages and Description</h2>
            <h5>Savoring Every Bite, Delighting Every Palate</h5>
          </div>
          <div className="section-wrapper">
            {/* <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 col-12"> */}
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/01.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Find your desired packages</a>
                      </h4>
                      <p>
                      You can look for different restaurants here including the packages they are offering. Pick your desired package. 
                        {" "}
                      </p>
                      <Link to={`/pkg_details?type=finedine`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/02.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Enchanted Surprise Soirees</a>
                      </h4>
                      <p>
                      Let us sprinkle some magic into your special moments with our surprise arrangement service. {" "}
                      </p>
                      <Link to={`/pkg_details?type=rooftop`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/03.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Effortless Dining Reservations</a>
                      </h4>
                      <p>
                      Experience the epitome of simplicity with our simple booking service.{" "}
                      </p>
                      <Link to={`/pkg_details?type=cafe`} className="lab-btn">
                          <i className="icofont-circled-right" />
                          BOOK
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="story-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="assets/images/story/04.jpg" alt="img" />
                    </div>
                    <div className="lab-content">
                      <h4>
                        <a href="blog-single.html">Custom Pack</a>
                      </h4>
                      <p>
                        Seamlesly evolve unique web-readiness with Collabors
                        atively fabricate best of breed and apcations through{" "}
                      </p>
                      <a href="/customPack" className="lab-btn">
                        <i className="icofont-circled-right" />
                        Customize{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Package;
