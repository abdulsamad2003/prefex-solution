import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home main-font">
      <div className="text-box">
        <h1 className="main-font">
          GLOBAL <span>edge</span>
        </h1>
        <p style={{paddingTop: '2vh'}} className="para-font">
          GLOBAL EDGE is a group of professional traders and financial advisors </p>
        <p style={{paddingBottom: '2vh'}} className="para-font"> well versed with the alpha and omega of various assets in the
          International Financial Market.
        </p>
        <Link to="/contact" className="hero-btn" aria-label="Contact Us">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Home;
