import React from 'react'
import "./AboutUs.scss"

const AboutUs = () => {
  return (
    <section className="about-us" aria-labelledby="about-title">
      <div className="about-bg-pattern"></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="shape-5"></div>
      <div className="shape-6"></div>
      <div className="shape-7"></div>
      <div className="shape-8"></div>
      <div className="shape-9"></div>
      <div className="shape-10"></div>
      <div className="shape-11"></div>
      <div className="shape-12"></div>
      <div className="shape-13"></div>
      <div className="shape-14"></div>
      <div className="shape-15"></div>
      <div className="shape-16"></div>
      <div className="shape-17"></div>
      <div className="shape-18"></div>
      <div className="shape-19"></div>
      <div className="shape-20"></div>
      <div className="shape-21"></div>
      <div className="shape-22"></div>
      
      <div className="about-container">
        <header className="about-header">
          <h1 id="about-title" className="about-title main-font">
            About <span className="accent">Prefex Solution</span>
          </h1>
          <div className="title-line"></div>
          <p className="about-subtitle para-font">
            A premier financial advisory firm specializing in international market trading and portfolio management
          </p>
        </header>

        <main className="about-main-content">
          <section className="about-intro-section" aria-labelledby="mission-title">
            <div className="intro-card">
              <h2 id="mission-title" className="intro-title main-font">Our Mission</h2>
              <p className="intro-text para-font">
                We are one of the few firms in India that specialize in intraday trading research services, providing high-quality analysis to help clients make informed decisions and achieve their financial goals.
              </p>
            </div>
          </section>

          <section className="about-features" aria-labelledby="features-title">
            <h2 id="features-title" className="visually-hidden">Our Key Features</h2>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3 className="feature-title main-font">Expert Team</h3>
              <p className="feature-text para-font">
                Our certified financial professionals bring over 15 years of combined experience in international markets.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3 className="feature-title main-font">Research Excellence</h3>
              <p className="feature-text para-font">
                We deliver the highest quality research to enhance your trading experience with data-driven analysis.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3 className="feature-title main-font">Portfolio Management</h3>
              <p className="feature-text para-font">
                Strategic investment solutions and comprehensive market analysis to optimize your financial portfolio.
              </p>
            </div>
          </section>
        </main>

        <section className="about-stats" aria-labelledby="stats-title">
          <h2 id="stats-title" className="visually-hidden">Our Achievements</h2>
          <div className="stat-card">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">2000+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">Success Rate</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">$50M+</h3>
            <p className="stat-label">Portfolio Managed</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutUs
