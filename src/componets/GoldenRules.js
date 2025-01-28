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
  return (
    <>
    <section className="heading">
        <h1 className="main-font">9 Golden Rules for Forex Trading in Stock Market</h1>
    </section>
       <section className="golden-card-container">
      <GoldenRuleCard icon={rule1} heading="Choose The Right Stocks" />

      <GoldenRuleCard icon={rule2} heading="Take calculated risks" />

      <GoldenRuleCard icon={rule3} heading="Do thorough research" />

      <GoldenRuleCard icon={rule4} heading="Take expert's help" />
      <GoldenRuleCard icon={rule5} heading="Never be emotional" />
      <GoldenRuleCard icon={rule6} heading="Redressal of grievance" />

      <GoldenRuleCard icon={rule7} heading="Use stop loss" />

      <GoldenRuleCard icon={rule8} heading="Don't be greedy" />
      <GoldenRuleCard
        icon={rule9}
        heading="Never take decision based on rumors"
      />
    </section>
    </>
 
  );
};

export default GoldenRules;
