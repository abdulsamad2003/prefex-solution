import React from "react";
import "./BenefitOfAdvisor.scss";
import pefexAdvisor1 from "../assets/prefex-advisor-1.webp";
import pefexAdvisor2 from "../assets/prefex-advisor-2.webp";
import pefexAdvisor3 from "../assets/prefex-advisor-3.webp";
import pefexAdvisor4 from "../assets/prefex-advisor-4.webp";

const BenefitOfAdvisor = () => {
  const benefits = [
    {
      image: pefexAdvisor1,
      alt: "prefex solution prefex advisor-1: Prefex Advisor Warning",
      title: "DO NOT be fooled by their flashy advertising and promises of higher returns!",
      content: [
        "What would be best is if YOU create the EA yourself. We won’t lie – it ain’t particularly easy and you may have to spend some time figuring it out, but hey, if it was easy, then everyone would do it right?",
        "We highly encourage you to learn and understand all aspects of whatever Expert Advisor that you plan to use.",
      ],
    },
    {
      image: pefexAdvisor2,
      alt: "prefex solution prefex advisor-2: No Emotional Vulnerability",
      title: "It is not vulnerable to emotions.",
      content: [
        "Every forex trader out there has probably grappled with either greed or the fear of losing at some point. Human emotions can cloud decision-making sometimes and can lead a trader to deviate from a tried-and-tested strategy.",
        "What sets trading robots apart from human forex traders is that we don’t have any emotional components at all. Expert advisors are wired to stick to system commands and take valid trade signals, without feeling pain from losses or joy from wins.",
      ],
    },
    {
      image: pefexAdvisor3,
      alt: "prefex solution prefex advisor-3: Quick Market Reaction",
      title: "It reacts to quick market movements instantly.",
      content: [
        "While humans take a few seconds or longer to digest market information and figure out how to react to price movements, a forex robot can react instantly and execute a trade faster than a blink of an eye.",
        "This can be beneficial for day traders who are looking to profit from quick price moves based on 1-minute or 5-minute charts.",
      ],
    },
    {
      image: pefexAdvisor4,
      alt: "prefex solution prefex advisor-4: No Human Errors",
      title: "It isn’t prone to human error.",
      content: [
        "Aside from having emotions interfere with making trading decisions, being human also entails making mistakes.",
        "This can be in the form of making wrong calculations in position-sizing (gasp) or entering an extra zero in the trade lot size (double gasp) – errors that can be avoided when using a forex robot.",
      ],
    },
  ];

  return (
    <section className="benefit-of-advisor">
      {benefits.map((benefit, index) => (
        <main className="benefit-card" key={index}>
          <div className="image-container">
            <img src={benefit.image} width={200} alt={benefit.alt} />
          </div>
          <div className="content">
            <h1 className="main-font">{benefit.title}</h1>
            {benefit.content.map((paragraph, idx) => (
              <p className="para-font" key={idx}>
                {paragraph}
              </p>
            ))}
          </div>
        </main>
      ))}
    </section>
  );
};

export default BenefitOfAdvisor;
