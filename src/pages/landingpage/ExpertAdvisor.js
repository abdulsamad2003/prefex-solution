import React from "react";
import "./ExpertAdvisor.scss";
const ExpertAdvisor = () => {
  return (
    <>
      <section className="main-font expert-advisor">
        <div className="text-box">
          <h1 className="main-font">Expert Advisors at Global Edge</h1>
          <div className="para">
            <p className="para-font">
              At Global Edge, our team of experienced traders and financial
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
      <div className="colin-quote">
        <h1 className="main-font">
          There are no secrets to success. It is the result of preparation, hard
          work, and learning from failure.
        </h1>
        <h2 className="para-font">- Colin Powell -</h2>
      </div>
    </>
  );
};

export default ExpertAdvisor;
