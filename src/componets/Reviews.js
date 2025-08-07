import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Sophia Patel",
    position: "Forex Trader",
    location: "Mumbai, India",
    rating: 5,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Prefex Solution transformed my trading journey completely. As a beginner, their guidance made complex Forex concepts easy to understand. Their personalized approach and accurate signals have helped me achieve consistent profits. Highly recommended!",
    verified: true
  },
  {
    id: 2,
    name: "Noah Martinez",
    position: "Portfolio Manager",
    location: "New York, USA",
    rating: 5,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "The market insights from Prefex Solution are exceptional. Their analysis is thorough and their strategies are practical. I've seen remarkable improvements in my trading performance since partnering with them.",
    verified: true
  },
  {
    id: 3,
    name: "Bill Anderson",
    position: "Investment Advisor",
    location: "London, UK",
    rating: 5,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Prefex Solution's expertise in market analysis is outstanding. Their signals are timely and accurate, helping me make informed trading decisions. The team is professional and always available for support.",
    verified: true
  },
  {
    id: 4,
    name: "Riya Sharma",
    position: "Day Trader",
    location: "Delhi, India",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2023/05/07/08/07/girl-7975892_1280.jpg",
    text: "I've been trading with Prefex Solution for over a year now, and the results have been phenomenal. Their risk management strategies and market timing are spot-on. They truly understand the Indian market dynamics.",
    verified: true
  },
  {
    id: 5,
    name: "James Brown",
    position: "Retail Investor",
    location: "Toronto, Canada",
    rating: 5,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "The educational content and trading strategies provided by Prefex Solution are invaluable. They don't just give signals; they teach you the reasoning behind each trade. This has made me a more confident trader.",
    verified: true
  },
  {
    id: 6,
    name: "Amit Verma",
    position: "Swing Trader",
    location: "Bangalore, India",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2013/11/14/13/11/indian-210382_1280.jpg",
    text: "Prefex Solution's approach to trading is systematic and results-driven. Their technical analysis is comprehensive, and their customer support is exceptional. They've helped me build a profitable trading portfolio.",
    verified: true
  },
  {
    id: 7,
    name: "Rehan Malik",
    position: "Professional Trader",
    location: "Dubai, UAE",
    rating: 5,
    img: "https://cdn.pixabay.com/photo/2020/05/25/03/28/beard-5216825_1280.jpg",
    text: "As a professional trader, I appreciate the depth of analysis Prefex Solution provides. Their market research is thorough, and their trading recommendations are well-reasoned. They've become an essential part of my trading toolkit.",
    verified: true
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  const { img, name, position, location, rating, text, verified } = testimonials[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars-container">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="star filled" />
        ))}
        {halfStar && <FaStarHalfAlt className="star half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="star empty" />
        ))}
        <span className="rating-text">{rating}/5</span>
      </div>
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-bg-pattern"></div>
      
      {/* Animated Background Shapes */}
      <div className="testimonial-shape-1"></div>
      <div className="testimonial-shape-2"></div>
      <div className="testimonial-shape-3"></div>
      <div className="testimonial-shape-4"></div>
      <div className="testimonial-shape-5"></div>
      <div className="testimonial-shape-6"></div>
      
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="main-font">Client Testimonials</h2>
          <p className="para-font">
            Discover what our valued clients say about their experience with Prefex Solution
          </p>
          
          <div className="testimonial-accent-lines">
            <div className="accent-line top-right"></div>
            <div className="accent-line bottom-left"></div>
          </div>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-card">
            <div className="quote-icon">
              <MdFormatQuote />
            </div>
            
            <div className="testimonial-text">
              <p className="para-font">{text}</p>
            </div>

            <div className="testimonial-author">
              <div className="author-image">
                <img src={img} alt={`${name} - ${position}`} className="person-img" />
                {verified && <div className="verified-badge">✓</div>}
              </div>
              
              <div className="author-info">
                <h4 className="main-font">{name}</h4>
                <p className="position para-font">{position}</p>
                <p className="location para-font">{location}</p>
                {renderStars(rating)}
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button 
              className="control-btn prev-btn" 
              onClick={prevReview}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToReview(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next-btn" 
              onClick={nextReview}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonial-stats">
            <div className="stat-item">
              <h3 className="main-font">2000+</h3>
              <p className="para-font">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="main-font">4.9/5</h3>
              <p className="para-font">Average Rating</p>
            </div>
            <div className="stat-item">
              <h3 className="main-font">98%</h3>
              <p className="para-font">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
