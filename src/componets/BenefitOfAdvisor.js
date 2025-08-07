import React from "react";
import "./BenefitOfAdvisor.scss";
import pefexAdvisor1 from "../assets/prefex-advisor-1.webp";
import pefexAdvisor2 from "../assets/prefex-advisor-2.webp";
import pefexAdvisor3 from "../assets/prefex-advisor-3.webp";
import pefexAdvisor4 from "../assets/prefex-advisor-4.webp";
import { FaShieldAlt, FaBrain, FaBolt, FaCheckCircle } from "react-icons/fa";

const BenefitOfAdvisor = () => {
  const benefits = [
    {
      id: 1,
      image: pefexAdvisor1,
      alt: "Expert Advisor Warning - Be cautious of flashy advertising",
      title: "Beware of Flashy Advertising",
      subtitle: "Don't be fooled by unrealistic promises",
      icon: <FaShieldAlt />,
      content: [
        "What would be best is if YOU create the EA yourself. We won't lie – it ain't particularly easy and you may have to spend some time figuring it out, but hey, if it was easy, then everyone would do it right?",
        "We highly encourage you to learn and understand all aspects of whatever Expert Advisor that you plan to use.",
      ],
    },
    {
      id: 2,
      image: pefexAdvisor2,
      alt: "No Emotional Vulnerability - Trading without emotions",
      title: "No Emotional Vulnerability",
      subtitle: "Trading without human emotions",
      icon: <FaBrain />,
      content: [
        "Every forex trader out there has probably grappled with either greed or the fear of losing at some point. Human emotions can cloud decision-making sometimes and can lead a trader to deviate from a tried-and-tested strategy.",
        "What sets trading robots apart from human forex traders is that we don't have any emotional components at all. Expert advisors are wired to stick to system commands and take valid trade signals, without feeling pain from losses or joy from wins.",
      ],
    },
    {
      id: 3,
      image: pefexAdvisor3,
      alt: "Quick Market Reaction - Instant market response",
      title: "Instant Market Reaction",
      subtitle: "Lightning-fast trade execution",
      icon: <FaBolt />,
      content: [
        "While humans take a few seconds or longer to digest market information and figure out how to react to price movements, a forex robot can react instantly and execute a trade faster than a blink of an eye.",
        "This can be beneficial for day traders who are looking to profit from quick price moves based on 1-minute or 5-minute charts.",
      ],
    },
    {
      id: 4,
      image: pefexAdvisor4,
      alt: "No Human Errors - Eliminate trading mistakes",
      title: "Eliminate Human Errors",
      subtitle: "Precision in every trade",
      icon: <FaCheckCircle />,
      content: [
        "Aside from having emotions interfere with making trading decisions, being human also entails making mistakes.",
        "This can be in the form of making wrong calculations in position-sizing or entering an extra zero in the trade lot size – errors that can be avoided when using a forex robot.",
      ],
    },
  ];

  return (
    <section className="benefit-of-advisor" id="benefit-of-advisor">
      <div className="benefit-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="benefit-shape-1"></div>
      <div className="benefit-shape-2"></div>
      <div className="benefit-shape-3"></div>
      <div className="benefit-shape-4"></div>
      
      <div className="benefit-container">
        <div className="benefit-header">
          <h1 className="main-font">Key Benefits of Expert Advisors</h1>
          <p className="para-font">
            Discover why professional trading automation provides significant advantages 
            over manual trading approaches.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.id}>
              <div className="card-image">
                <img src={benefit.image} alt={benefit.alt} />
                <div className="image-overlay">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h2 className="main-font">{benefit.title}</h2>
                  <h3 className="para-font">{benefit.subtitle}</h3>
                </div>
                
                <div className="card-body">
                  {benefit.content.map((paragraph, idx) => (
                    <p className="para-font" key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="benefit-summary">
          <div className="summary-content">
            <h2 className="main-font">Why Choose Professional Expert Advisors?</h2>
            <p className="para-font">
              Our expert advisors combine advanced technology with proven trading strategies 
              to deliver consistent, emotion-free trading performance while minimizing risks 
              and maximizing opportunities in the financial markets.
            </p>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Key Benefits</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Emotion-Free</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Market Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitOfAdvisor;
