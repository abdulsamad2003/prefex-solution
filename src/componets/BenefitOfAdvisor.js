import React from 'react'
import "./BenefitOfAdvisor.scss"
import financialAdivisor1 from "../assets/financial-advisor-1.jpg"
import financialAdivisor2 from "../assets/financial-advisor-2.jpg"
import financialAdivisor3 from "../assets/financial-advisor-3.jpg"
import financialAdivisor4 from "../assets/financial-advisor-4.jpg"

const BenefitOfAdvisor = () => {
  return (
    <section className="benefit-of-advisor">
        <main className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor1} width={200} alt="" aria-label='' />
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
        </main>

        <main className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor2} width={200} alt="" aria-label='' />
            </div>
            <div className="content">
                <h1 className="main-font">
                It is not vulnerable to emotions.                
                </h1>
                <p className="para-font">
                 > Every forex trader out there has probably grappled with either greed or the fear of losing at some point. Human emotions can cloud decision-making sometimes and can lead a trader to deviate from a tried-and-tested strategy.
                </p>
                <p className="para-font">
                 > What sets trading robots apart from human forex traders is that we don’t have any emotional components at all. Expert advisors are wired to stick to system commands and take valid trade signals, without feeling pain from losses or joy from wins.
                </p>
            </div>
        </main>

        <main className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor3} width={200} alt="" aria-label='' />
            </div>
            <div className="content">
                <h1 className="main-font">
                It reacts to quick market movements instantly.
                </h1>
                <p className="para-font">
                 > While humans take a few seconds or longer to digest market information and figure out how to react to price movements, a forex robot can react instantly and execute a trade faster than a blink of an eye. 
                </p>
                <p className="para-font">
                 >  This can be beneficial for day traders who are looking to profit from quick price moves based on 1-minute or 5-minute charts.
                </p>
            </div>
        </main>

        <main className="benefit-card">
            <div className="image-container">
                <img src={financialAdivisor4} width={200} alt="" aria-label='' />
            </div>
            <div className="content">
                <h1 className="main-font">
                    It isn’t prone to human error.
                </h1>
                <p className="para-font">
                 > Aside from having emotions interfere with making trading decisions, being human also entails making mistakes. 
                </p>
                <p className="para-font">
                 > This can be in the form of making wrong calculations in position-sizing (gasp) or entering an extra zero in the trade lot size (double gasp) – errors that can be avoided when using a forex robot.
                </p>
            </div>
        </main>
    </section>
  )
}

export default BenefitOfAdvisor
