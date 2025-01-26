import React from "react";
import "./PortfolioService.scss";
import prefexAdvisor from "../../assets/prefex-advisor-1.webp"
import { Helmet } from "react-helmet";
function PortfoiloService() {
  return (
    <>
     <Helmet>
     <title>Prefex Solution - Expert Financial Advisors</title>
      <meta name="description" content="Explore expert financial advisory services with Prefex Solution. Our advisors provide tailored solutions for the international financial market. Contact us today!" />
      <meta name="keywords" content="expert financial advisors, trading solutions, Prefex Solution, international financial market, professional advisors, financial market services, expert trading advisors" />
      <meta name="author" content="Prefex Solution" />
      <meta property="og:title" content="Prefex Solution - Expert Financial Advisors" />
      <meta property="og:description" content="Discover expert financial advisory services at Prefex Solution. Get professional guidance for international trading and market solutions." />
      <meta property="og:image" content={prefexAdvisor}/>
      <meta property="og:url" content="https://www.prefexsolution.com/expert-advisor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <section className="portfolio-service">
      <div className="heading main-font">
        <h1>Portfolio Management Service (PMS)</h1>
        <p>
          Service includes all the management of Global Edge exposure & risk to
          it. It also includes Prefex Solution risk advisory.
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
            <img src={prefexAdvisor} alt="prefexAdvisor prefex solution" aria-label="prefexdvisor prefex solution" width={400} height={300} />
        </div>
      </div>
    </section>
    </>
  );
}

export default PortfoiloService;
