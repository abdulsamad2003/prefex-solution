import React from 'react'
import "./BenefitOfAdvisor.scss"
import financialAdivisor from "../assets/financial-advisor-1.jpg"
const BenefitOfAdvisor = () => {
  return (
    <section className="benefit-of-advisor">
        <div className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor} width={200} alt="" aria-label='' />
            </div>
            <div className="content">
                <h1 className="main-font">
                DO NOT be fooled by their flashy advertising and promises of higher returns!
                </h1>
                <p className="para-font">
                 > What would be best is if YOU create the EA yourself. We won’t lie – it ain’t particularly easy and you may have to spend some time figuring it out, but hey, if it was easy, then everyone would do it right?
                </p>
                <p className="para-font">
                 > We highly encourage you to learn and understand all aspects of whatever Expert Advisor that you plan to use.
                </p>
            </div>
        </div>

        <div className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor} width={200} alt="" aria-label='' />
            </div>
            <div className="content">
                <h1 className="main-font">
                DO NOT be fooled by their flashy advertising and promises of higher returns!
                </h1>
                <p className="para-font">
                 > What would be best is if YOU create the EA yourself. We won’t lie – it ain’t particularly easy and you may have to spend some time figuring it out, but hey, if it was easy, then everyone would do it right?
                </p>
                <p className="para-font">
                 > We highly encourage you to learn and understand all aspects of whatever Expert Advisor that you plan to use.
                </p>
            </div>
        </div>

        
    </section>
  )
}

export default BenefitOfAdvisor
