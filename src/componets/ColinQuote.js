import React from 'react'
import "./ColinQuote.scss"
import { MdFormatQuote } from "react-icons/md";

const ColinQuote = () => {
  return (
    <section className="colin-quote" id="colin-quote">
      <div className="colin-quote-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="quote-shape-1"></div>
      <div className="quote-shape-2"></div>
      <div className="quote-shape-3"></div>
      <div className="quote-shape-4"></div>
      
      <div className="colin-quote-container">
        <div className="quote-content">
          <div className="quote-icon">
            <MdFormatQuote />
          </div>
          
          <blockquote className="quote-text">
            <h1 className="main-font">
              There are no secrets to success. It is the result of preparation, hard
              work, and learning from failure.
            </h1>
          </blockquote>
          
          <div className="quote-author">
            <h2 className="para-font">- Colin Powell -</h2>
            <p className="author-title">Former U.S. Secretary of State</p>
          </div>
        </div>
        
        <div className="quote-footer">
          <p className="para-font">
            This philosophy guides our approach to financial success and investment excellence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ColinQuote
