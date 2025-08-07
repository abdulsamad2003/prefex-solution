import React from "react";
import "./PortfolioService.scss";
import prefexAdvisor from "../../assets/prefex-advisor-1.webp";
import { Helmet } from "react-helmet";
import GoldenRules from "../../componets/GoldenRules";
import GetDemoForm from "../../componets/GetDemoForm";
import { FaChartLine, FaShieldAlt, FaUsers, FaGlobe, FaChartBar, FaHandshake } from "react-icons/fa";

function PortfoiloService() {
  return (
    <>
      <Helmet>
        <title>Portfolio Management Service (PMS) - Prefex Solution</title>
        <meta name="description" content="Professional Portfolio Management Service (PMS) by Prefex Solution. Expert portfolio managers handle your equity portfolio with global market exposure and risk management strategies." />
        <meta name="keywords" content="portfolio management service, PMS, equity portfolio, professional portfolio managers, global market exposure, risk management, Prefex Solution, investment management" />
        <meta name="author" content="Prefex Solution" />
        <meta property="og:title" content="Portfolio Management Service (PMS) - Prefex Solution" />
        <meta property="og:description" content="Professional Portfolio Management Service with expert portfolio managers. Global market exposure with comprehensive risk management strategies." />
        <meta property="og:image" content={prefexAdvisor} />
        <meta property="og:url" content="https://www.prefexsolution.com/portfolio-service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="portfolio-service" id="portfolio-service">
        <div className="portfolio-bg-pattern"></div>
        
        {/* Animated Background Shapes */}
        <div className="portfolio-shape-1"></div>
        <div className="portfolio-shape-2"></div>
        <div className="portfolio-shape-3"></div>
        <div className="portfolio-shape-4"></div>
        <div className="portfolio-shape-5"></div>
        <div className="portfolio-shape-6"></div>
        
        <div className="portfolio-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="main-font">Portfolio Management Service (PMS)</h1>
              <p className="para-font">
                Professional portfolio management with global market exposure and comprehensive risk management strategies. 
                Our expert portfolio managers handle your equity portfolio to maximize growth potential.
              </p>
            </div>
            <div className="hero-image">
              <img 
                src={prefexAdvisor} 
                alt="Professional portfolio management and trading analysis" 
                className="portfolio-image"
              />
            </div>
          </div>

          {/* How It Works Section */}
          <div className="how-it-works">
            <h2 className="main-font">How Portfolio Management Service Works</h2>
            <div className="works-content">
              <div className="works-text">
                <p className="para-font">
                  Portfolio Management Service (PMS) is a professional financial service where skilled portfolio managers 
                  and investment professionals manage your equity portfolio with expertise and precision.
                </p>
                <p className="para-font">
                  Our expert professional traders handle your trading account to optimize growth potential while ensuring 
                  your equity generates sustainable profits over longer durations through their specialized market expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h2 className="main-font">What's Included in Our PMS</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaGlobe />
                </div>
                <h3 className="main-font">Global Market Exposure</h3>
                <p className="para-font">Access to international markets and diverse investment opportunities</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <h3 className="main-font">Risk Management</h3>
                <p className="para-font">Comprehensive risk assessment and mitigation strategies</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <h3 className="main-font">Expert Analysis</h3>
                <p className="para-font">Professional market analysis and investment recommendations</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <h3 className="main-font">Dedicated Team</h3>
                <p className="para-font">Experienced portfolio managers managing your investments</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaChartBar />
                </div>
                <h3 className="main-font">Growth Optimization</h3>
                <p className="para-font">Strategic portfolio optimization for maximum returns</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaHandshake />
                </div>
                <h3 className="main-font">Personalized Service</h3>
                <p className="para-font">Tailored investment strategies based on your goals</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h2 className="main-font">Why Choose Our Portfolio Management Service?</h2>
            <div className="benefits-content">
              <div className="benefit-item">
                <h3 className="main-font">Professional Expertise</h3>
                <p className="para-font">
                  Our portfolio managers have years of experience in global markets and proven track records 
                  of delivering consistent returns for our clients.
                </p>
              </div>

              <div className="benefit-item">
                <h3 className="main-font">Risk-Adjusted Returns</h3>
                <p className="para-font">
                  We focus on generating sustainable, risk-adjusted returns rather than chasing high-risk, 
                  short-term gains that could jeopardize your capital.
                </p>
              </div>

              <div className="benefit-item">
                <h3 className="main-font">Transparent Reporting</h3>
                <p className="para-font">
                  Regular portfolio performance reports and transparent communication about investment 
                  decisions and market conditions affecting your portfolio.
                </p>
              </div>

              <div className="benefit-item">
                <h3 className="main-font">Diversified Approach</h3>
                <p className="para-font">
                  Strategic diversification across different asset classes, sectors, and geographies 
                  to minimize risk and maximize growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GoldenRules />
      <GetDemoForm />
    </>
  );
}

export default PortfoiloService;
