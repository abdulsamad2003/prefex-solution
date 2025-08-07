import React from "react";
import "./InvestmentRisk.scss";
import PrefexTrader from "../assets/prefexTrader.webp";

function InvestmentRisk() {
  return (
    <section className="investment-risk" id="investment-risk">
      <div className="risk-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="risk-shape-1"></div>
      <div className="risk-shape-2"></div>
      <div className="risk-shape-3"></div>
      <div className="risk-shape-4"></div>
      <div className="risk-shape-5"></div>
      <div className="risk-shape-6"></div>
      
      <div className="investment-risk-container">
        <div className="risk-header">
          <h2 className="main-font">
            Investment Risk Disclosure
            <img 
              src={PrefexTrader} 
              width={90} 
              height={110} 
              alt="Prefex Solution trading indicator showing market analysis" 
              className="risk-icon"
            />
          </h2>
          
          <div className="risk-accent-lines">
            <div className="accent-line top-right"></div>
            <div className="accent-line bottom-left"></div>
          </div>
        </div>

        <div className="risk-content">
          <div className="risk-warning">
            <h3 className="main-font">Important Risk Notice</h3>
            <p className="para-font">
              All investments carry inherent risks, including the potential for loss of capital. 
              Before making any investment decisions, it's crucial to understand the risks involved 
              and ensure they align with your financial goals and risk tolerance.
            </p>
          </div>

          <div className="risk-details">
            <div className="risk-point">
              <h4 className="main-font">Market Risk</h4>
              <p className="para-font">
                Investment values can fluctuate due to market conditions, economic factors, 
                and other variables beyond our control. Past performance does not guarantee 
                future results.
              </p>
            </div>

            <div className="risk-point">
              <h4 className="main-font">Capital Loss Risk</h4>
              <p className="para-font">
                There is always the possibility of losing some or all of your invested capital. 
                Unlike bank deposits, investments are not insured by government agencies 
                against market losses.
              </p>
            </div>

            <div className="risk-point">
              <h4 className="main-font">Instrument-Specific Risks</h4>
              <p className="para-font">
                Different investment instruments carry varying levels of risk. It's essential 
                to understand the specific risks associated with each investment vehicle 
                before committing your capital.
              </p>
            </div>

            <div className="risk-point">
              <h4 className="main-font">Suitability Considerations</h4>
              <p className="para-font">
                Investment products may not be suitable for all investors. Consider your 
                financial situation, investment objectives, and risk tolerance before 
                making investment decisions.
              </p>
            </div>
          </div>

          <div className="risk-disclaimer">
            <p className="para-font">
              <strong>Disclaimer:</strong> This information is for educational purposes only 
              and should not be considered as investment advice. Always consult with qualified 
              financial professionals before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentRisk;
