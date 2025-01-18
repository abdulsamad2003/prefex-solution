import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Benefits from "../../componets/Benefits";
import InvestmentRisk from "../../componets/InvestmentRisk";

const Home = () => {
  return (
    <>    
      <section className="home main-font">
        <div className="text-box">
          <h1 className="main-font">
            GLOBAL <span>edge</span>
          </h1>
          <div className="para">
              <p className="para-font">
              GLOBAL EDGE is a group of professional traders and financial advisors </p>
              <p className="para-font"> well versed with the alpha and omega of various assets in the
              International Financial Market.
              </p>
          </div>
          <Link to="/contact" className="hero-btn" aria-label="Contact Us">
            Contact Us
          </Link>
        </div>
      </section>
      <Benefits/>
      <InvestmentRisk/>
    </>

  );
};

export default Home;
