import React from "react";
import "./PortfolioService.scss";
import portfolioBusiness from "../../assets/financial-advisor-1.webp"
function PortfoiloService() {
  return (
    <section className="portfolio-service">
      <div className="heading main-font">
        <h1>Portfolio Management Service (PMS)</h1>
        <p>
          Service includes all the management of Global Edge exposure & risk to
          it. It also includes Global Egde risk advisory.
        </p>
      </div>
      <div className="content">
        <div className="para">
            <h2 className="main-font">How it works</h2>
            <p className="para-font">
            Portfolio Management Service (PMS) is a professional financial service
            where skilled portfolio managers and professionals manage your equity
            portfolio.
            </p>
            <p className="para-font">
            In simple terms, expert porfessional traders will be handling your
            trading account to make it grow at a better pace, at the same time,
            ensuring that your equity reaps profit for longer durations in his
            field of expertise.
            </p>
        </div>
        <div className="portfolio-img">
            <img src={portfolioBusiness} alt="" aria-label="" width={400} height={300} />
        </div>
      </div>
    </section>
  );
}

export default PortfoiloService;
