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
    <main>
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
      
      <section className="home main-font" aria-labelledby="hero-heading">
        <div className="text-box">
          <div className="content-left">
            <h1 id="hero-heading" className="main-font">
              Prefex <span>Solution</span>
            </h1>
            <div className="para">
              <p className="para-font">
                Prefex Solution is a premier financial advisory firm specializing in international market trading and portfolio management.
              </p>
              <p className="para-font">
                Our team of certified financial professionals delivers strategic investment solutions and comprehensive market analysis to optimize your financial portfolio.
              </p>
            </div>
            <Link to="/contact-us" className="hero-btn" aria-label="Schedule Consultation">
              Schedule Consultation
            </Link>
          </div>
          
          <div className="content-right">
            <section className="stats-section" aria-labelledby="stats-heading">
              <h2 id="stats-heading" className="visually-hidden">Our Achievements</h2>
              <div className="stat-item">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">2000+</h3>
                <p className="stat-label">Happy Clients</p> 
              </div>
              <div className="stat-item">
                <h3 className="stat-number">$50M+</h3>
                <p className="stat-label">Portfolio Managed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">98%</h3>
                <p className="stat-label">Success Rate</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <AboutUs/>
      <Benefits />
      <GetDemoForm/>
      <InvestmentRisk />
      <Reviews/>
    </main>
  );
};

export default Home;
