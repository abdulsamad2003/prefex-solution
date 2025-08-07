import React from "react";
import "./ExpertAdvisor.scss";
import ColinQuote from "../../componets/ColinQuote";
import BenefitOfAdvisor from "../../componets/BenefitOfAdvisor";
import ExpertAdvisorImage from "../../assets/prefex-advisor-4.webp"
import { Helmet } from "react-helmet";
import { FaUsers, FaChartLine, FaShieldAlt, FaGlobe, FaHandshake, FaLightbulb } from "react-icons/fa";

const ExpertAdvisor = () => {
  const advisorFeatures = [
    {
      id: 1,
      icon: <FaUsers />,
      title: "Experienced Team",
      description: "Our team consists of seasoned financial professionals with years of market experience and proven track records."
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Market Expertise",
      description: "Deep understanding of global financial markets, trends, and investment strategies across multiple asset classes."
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your investments and maximize returns."
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Global Perspective",
      description: "International market insights and opportunities to diversify your portfolio across different geographies."
    },
    {
      id: 5,
      icon: <FaHandshake />,
      title: "Personalized Service",
      description: "Tailored financial strategies designed specifically for your goals, risk tolerance, and investment timeline."
    },
    {
      id: 6,
      icon: <FaLightbulb />,
      title: "Strategic Guidance",
      description: "Expert advice on portfolio optimization, asset allocation, and long-term wealth building strategies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Financial Advisors - Prefex Solution</title>
        <meta name="description" content="Expert financial advisors at Prefex Solution provide professional guidance for international financial markets. Get personalized investment strategies and risk management solutions." />
        <meta name="keywords" content="expert financial advisors, professional investment guidance, international financial markets, portfolio management, risk management, Prefex Solution, financial advisory services" />
        <meta name="author" content="Prefex Solution" />
        <meta property="og:title" content="Expert Financial Advisors - Prefex Solution" />
        <meta property="og:description" content="Professional financial advisors providing expert guidance for international markets. Personalized strategies and comprehensive risk management." />
        <meta property="og:image" content={ExpertAdvisorImage} />
        <meta property="og:url" content="https://www.prefexsolution.com/expert-advisor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="expert-advisor" id="expert-advisor">
        <div className="expert-advisor-bg-pattern"></div>
        
        {/* Animated Background Shapes */}
        <div className="expert-shape-1"></div>
        <div className="expert-shape-2"></div>
        <div className="expert-shape-3"></div>
        <div className="expert-shape-4"></div>
        <div className="expert-shape-5"></div>
        <div className="expert-shape-6"></div>
        
        <div className="expert-advisor-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="main-font">Expert Financial Advisors</h1>
              <p className="para-font">
                At Prefex Solution, our team of experienced traders and financial
                advisors offers expert guidance in navigating the complexities of
                international financial markets.
              </p>
              <p className="para-font">
                With deep expertise in various asset classes, we provide tailored
                strategies to help you achieve your financial goals while managing
                risks effectively.
              </p>
            </div>
            <div className="hero-image">
              <img 
                src={ExpertAdvisorImage} 
                alt="Expert financial advisors at Prefex Solution" 
                className="advisor-image"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h2 className="main-font">Why Choose Our Expert Advisors?</h2>
            <div className="features-grid">
              {advisorFeatures.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3 className="main-font">{feature.title}</h3>
                    <p className="para-font">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="services-overview">
            <h2 className="main-font">Our Advisory Services</h2>
            <div className="services-content">
              <div className="service-item">
                <h3 className="main-font">Portfolio Management</h3>
                <p className="para-font">
                  Professional portfolio management services with strategic asset allocation 
                  and continuous monitoring to optimize your investment returns.
                </p>
              </div>
              <div className="service-item">
                <h3 className="main-font">Investment Planning</h3>
                <p className="para-font">
                  Comprehensive investment planning tailored to your financial goals, 
                  risk tolerance, and time horizon for sustainable wealth creation.
                </p>
              </div>
              <div className="service-item">
                <h3 className="main-font">Market Analysis</h3>
                <p className="para-font">
                  In-depth market research and analysis to identify opportunities 
                  and make informed investment decisions in global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ColinQuote/>
      <BenefitOfAdvisor/>
    </>
  );
};

export default ExpertAdvisor;
