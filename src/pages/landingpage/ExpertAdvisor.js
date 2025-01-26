import React from "react";
import "./ExpertAdvisor.scss";
import ColinQuote from "../../componets/ColinQuote";
import BenefitOfAdvisor from "../../componets/BenefitOfAdvisor";
import ExpertAdvisorImage from "../../assets/prefex-advisor-4.webp"
import { Helmet } from "react-helmet";
const ExpertAdvisor = () => {
  return (
    <>
     <Helmet>
     <title>Prefex Solution - Expert Financial Advisors</title>
      <meta name="description" content="Explore expert financial advisory services with Prefex Solution. Our advisors provide tailored solutions for the international financial market. Contact us today!" />
      <meta name="keywords" content="expert financial advisors, trading solutions, Prefex Solution, international financial market, professional advisors, financial market services, expert trading advisors" />
      <meta name="author" content="Prefex Solution" />
      <meta property="og:title" content="Prefex Solution - Expert Financial Advisors" />
      <meta property="og:description" content="Discover expert financial advisory services at Prefex Solution. Get professional guidance for international trading and market solutions." />
      <meta property="og:image" content={ExpertAdvisorImage} />
      <meta property="og:url" content="https://www.prefexsolution.com/expert-advisor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Helmet>
        <section className="expert-advisor">
          <div className="text-box">
            <h1 className="main-font">Expert Advisors at Prefex Solution</h1>
            <div className="para">
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
          </div>
        </section>
        <ColinQuote/>
        <BenefitOfAdvisor/>
      </>
  );
};

export default ExpertAdvisor;
