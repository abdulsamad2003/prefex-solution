import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Benefits from "../../componets/Benefits";
import InvestmentRisk from "../../componets/InvestmentRisk";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    
    <>
    <Helmet>
      <title>Prefex Solution</title>
      <meta name="prefex solution" content="Prefex Solution." />
      <meta name="keywords" content="prefex, solution, prefix, prefexsolution,trading, financial advisors, international market, Prefex Solution" />
    </Helmet>
      <section className="home main-font" aria-labelledby="main-heading">
        <div className="text-box">
          <h1 id="main-heading" className="main-font">
            Prefex <span>Solution</span>
          </h1>
          <div className="para">
            <p className="para-font">
              Prefex Solution is a group of professional traders and financial advisors.
            </p>
            <p className="para-font">
              Well-versed with the alpha and omega of various assets in the
              International Financial Market.
            </p>
          </div>
          <Link to="/contact-us" className="hero-btn" aria-label="Contact Us">
            Contact Us
          </Link>
        </div>
      </section>

      <Benefits />

      <InvestmentRisk />
    </>
  );
};

export default Home;
