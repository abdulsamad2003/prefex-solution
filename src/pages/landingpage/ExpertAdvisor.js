import React from "react";
import "./ExpertAdvisor.scss";
import ColinQuote from "../../componets/ColinQuote";
import BenefitOfAdvisor from "../../componets/BenefitOfAdvisor";
const ExpertAdvisor = () => {
  return (
    <>
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
