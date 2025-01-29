import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Benefits from "../../componets/Benefits";
import InvestmentRisk from "../../componets/InvestmentRisk";
import { Helmet } from "react-helmet";
import logo from "../../assets/prefexLogo.webp";
import Reviews from "../../componets/Reviews";
import GetDemoForm from "../../componets/GetDemoForm";
import AboutUs from "../../componets/AboutUs";
const Home = () => {
  return (
    
    <>
    <Helmet>
      <title>Prefex Solution - Professional Financial Advisors</title>
      <meta name="description" content="Prefex Solution provides expert trading and financial advisory services in the international financial market. Contact us for reliable solutions."/>
      <meta name="keywords" content="financial advisors, trading solutions, Prefex Solution, international market, trading experts, financial market services" />
      <meta name="author" content="Prefex Solution" />
      <meta property="og:title" content="Prefex Solution - Financial Advisors" />
      <meta property="og:description" content="Prefex Solution provides expert trading and financial advisory services in the international financial market." />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content="https://www.prefexsolution.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow"/>
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

      <AboutUs/>
      <Benefits />

      <GetDemoForm/>
      <InvestmentRisk />

      <Reviews/>
    </>
  );
};

export default Home;
