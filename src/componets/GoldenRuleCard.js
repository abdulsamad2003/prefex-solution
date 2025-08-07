import React from 'react'
import "./GoldenRuleCard.scss"
import icon from "../assets/prefex-rule-1.jpg"

const GoldenRuleCard = ({ icons={icon}, heading="Rule", description="Description"}) => {
  return (
    <div className="golden-card">
      <div className="card-icon">
        <img
          src={icons}
          alt={`${heading} icon`}
          width={80}
          height={80}
        />
      </div>
      <div className="card-content">
        <h3 className="main-font">{heading}</h3>
        <p className="para-font">{description}</p>
      </div>
    </div>
  )
}

export default GoldenRuleCard
