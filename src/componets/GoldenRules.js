import React from "react";
import "./GoldenRules.scss";
import GoldenRuleCard from "./GoldenRuleCard";
import rule1 from "../assets/prefex-rule-1.jpg";
import rule2 from "../assets/prefex-rule-2.jpg";
import rule3 from "../assets/prefex-rule-3.jpg";
import rule4 from "../assets/prefex-rule-4.jpg";
import rule5 from "../assets/prefex-rule-5.jpg";
import rule6 from "../assets/prefex-rule-6.jpg";
import rule7 from "../assets/prefex-rule-7.jpg";
import rule8 from "../assets/prefex-rule-8.jpg";
import rule9 from "../assets/prefex-rule-9.jpg";

const GoldenRules = () => {
  const rules = [
    {
      id: 1,
      icon: rule1,
      title: "Choose The Right Stocks",
      description: "Select fundamentally strong stocks with good growth potential and stable financials for long-term success."
    },
    {
      id: 2,
      icon: rule2,
      title: "Take Calculated Risks",
      description: "Never risk more than you can afford to lose. Always maintain proper risk-reward ratios in your trades."
    },
    {
      id: 3,
      icon: rule3,
      title: "Do Thorough Research",
      description: "Analyze company fundamentals, market trends, and technical indicators before making investment decisions."
    },
    {
      id: 4,
      icon: rule4,
      title: "Take Expert's Help",
      description: "Consult with professional portfolio managers and financial advisors for informed investment strategies."
    },
    {
      id: 5,
      icon: rule5,
      title: "Never Be Emotional",
      description: "Make decisions based on facts and analysis, not emotions. Fear and greed are your biggest enemies."
    },
    {
      id: 6,
      icon: rule6,
      title: "Redressal of Grievance",
      description: "Always have a clear exit strategy and grievance redressal mechanism for any investment disputes."
    },
    {
      id: 7,
      icon: rule7,
      title: "Use Stop Loss",
      description: "Implement stop-loss orders to limit potential losses and protect your capital from significant downturns."
    },
    {
      id: 8,
      icon: rule8,
      title: "Don't Be Greedy",
      description: "Set realistic profit targets and don't chase unrealistic returns. Consistent small gains beat occasional big wins."
    },
    {
      id: 9,
      icon: rule9,
      title: "Never Take Decisions Based on Rumors",
      description: "Base your investment decisions on verified information, not market rumors or unverified news."
    }
  ];

  return (
    <section className="golden-rules" id="golden-rules">
      <div className="golden-rules-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="golden-shape-1"></div>
      <div className="golden-shape-2"></div>
      <div className="golden-shape-3"></div>
      <div className="golden-shape-4"></div>
      <div className="golden-shape-5"></div>
      <div className="golden-shape-6"></div>
      
      <div className="golden-rules-container">
        <div className="golden-rules-header">
          <h1 className="main-font">9 Golden Rules for Successful Trading</h1>
          <p className="para-font">
            Master these essential principles to navigate the financial markets with confidence and achieve sustainable trading success.
          </p>
          
          <div className="golden-accent-lines">
            <div className="accent-line top-right"></div>
            <div className="accent-line bottom-left"></div>
          </div>
        </div>

        <div className="golden-rules-grid">
          {rules.map((rule) => (
            <GoldenRuleCard 
              key={rule.id}
              icons={rule.icon} 
              heading={rule.title}
              description={rule.description}
            />
          ))}
        </div>

        <div className="golden-rules-footer">
          <h2 className="main-font">Why Follow These Rules?</h2>
          <p className="para-font">
            These golden rules are the foundation of successful trading. They help you develop discipline, 
            manage risk effectively, and make informed decisions that lead to consistent long-term profits 
            while protecting your capital from significant losses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoldenRules;
