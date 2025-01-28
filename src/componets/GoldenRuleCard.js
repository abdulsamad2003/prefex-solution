import React from 'react'
import "./GoldenRuleCard.scss"
import icon from "../assets/prefex-rule-1.jpg"
const GoldenRuleCard = ({ icon={icon}, heading="happy"}) => {
  return (
    <main className="golden-card">
    <span className="icon">
      <img
        src={icon} // Use the icon passed as a prop
        alt="Rules icon" // Always include alt text for accessibility
        width={80}
        height={80}
      />
    </span>
    <h1>{heading}</h1> {/* Render the heading passed as a prop */}
  </main>
  )
}

export default GoldenRuleCard
