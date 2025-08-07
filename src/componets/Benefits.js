import React from 'react'
import "./Benefits.scss"
import { MdTrendingUp, MdAnalytics } from 'react-icons/md'
import { FaShieldAlt, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Secure Trading Environment",
      description: "Advanced security protocols and encryption ensure your trading activities are protected at all times.",
      features: ["256-bit SSL encryption", "Two-factor authentication", "Real-time fraud monitoring", "Secure data centers"]
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Advanced Analytics",
      description: "Comprehensive market analysis tools and real-time data to make informed trading decisions.",
      features: ["Real-time market data", "Technical indicators", "Risk assessment tools", "Performance tracking"]
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Expert Support Team",
      description: "Dedicated team of financial experts available 24/7 to assist you with any trading needs.",
      features: ["24/7 customer support", "Expert financial advisors", "Personal account managers", "Training resources"]
    },
    {
      id: 4,
      icon: <MdTrendingUp />,
      title: "Proven Track Record",
      description: "Years of successful trading experience with consistent returns for our clients.",
      features: ["High success rate", "Transparent performance", "Client testimonials", "Award-winning service"]
    },
    {
      id: 5,
      icon: <MdAnalytics />,
      title: "Comprehensive Reporting",
      description: "Detailed reports and insights to track your portfolio performance and trading activities.",
      features: ["Monthly performance reports", "Tax documentation", "Portfolio analysis", "Custom reporting"]
    },
    {
      id: 6,
      icon: <FaGlobe />,
      title: "Global Market Access",
      description: "Access to international markets and diverse investment opportunities worldwide.",
      features: ["Multiple markets", "Currency trading", "International stocks", "Global diversification"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Benefits - Prefex Solution | Expert Financial Services</title>
        <meta name="description" content="Discover the benefits of choosing Prefex Solution for your financial needs. Secure trading, expert support, and proven results." />
        <meta name="keywords" content="Prefex Solution benefits, secure trading, expert financial services, trading advantages, financial benefits" />
        <meta name="author" content="Prefex Solution" />
        <meta property="og:title" content="Benefits - Prefex Solution" />
        <meta property="og:description" content="Discover the benefits of choosing Prefex Solution for your financial needs." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="benefits" id="benefits">
        <div className="benefits-bg-pattern"></div>
        
        {/* Animated Background Shapes */}
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>
        <div className="bg-shape-3"></div>
        <div className="bg-shape-4"></div>
        <div className="bg-shape-5"></div>
        <div className="bg-shape-6"></div>
        
        <div className="benefits-container">
          <div className="benefits-header">
            <h1 className="main-font">Why Choose Prefex Solution?</h1>
            <p className="para-font">
              Experience the advantages of working with a trusted financial partner committed to your success.
            </p>
            <div className="benefits-accent-lines">
              <div className="accent-line left"></div>
              <div className="accent-line right"></div>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div className="benefit-card" key={benefit.id}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div className="benefit-content">
                  <h2 className="main-font">{benefit.title}</h2>
                  <p className="para-font">{benefit.description}</p>
                  <ul className="benefit-features">
                    {benefit.features.map((feature, index) => (
                      <li key={index} className="para-font">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits
