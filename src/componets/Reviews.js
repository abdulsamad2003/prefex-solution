import React, { useState } from "react";
import "./Reviews.scss";
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa6";
import { FaRegStar , FaStarHalfAlt, FaStar} from "react-icons/fa";
const reviews = [
    {
        id: 1,
        name: "Sophia Patel",
        rating: 4.5,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "I was a beginner, and Prefex Solution made Forex trading so easy to understand. Their guidance is invaluable!"
    },
    {
      id: 2,
      name: "Noah Martinez",
      rating: 3.4,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "Thanks to Prefex Solution, I feel confident navigating the Forex market. Their personalized approach sets them apart."
    },
    {
      id: 3,
      name: "Bill Anderson",
      rating: 4,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Prefex Solution’s market insights are a game-changer. I’ve seen remarkable improvements in my trading performance."
    },
    {
      id: 4,
      name: "Riya Sharma",
      rating: 3.5,
      img: "https://cdn.pixabay.com/photo/2023/05/07/08/07/girl-7975892_1280.jpg",
      text: "Prefex Solution is the best partner I could ask for in my trading journey. Their signals are accurate and actionable."
    },
    {
      id: 5,
      name: "James Brown",
      rating: 5,
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "The strategies provided by Prefex Solution have been game-changing. Their team is truly knowledgeable and supportive."
    },
    {
      id: 6,
      name: "Amit Verma",
      rating: 4,
      img: "https://cdn.pixabay.com/photo/2013/11/14/13/11/indian-210382_1280.jpg",
      text: "Prefex Solution’s market insights have truly transformed my trading approach. Their analysis is highly reliable and effective."
    },
    {
      id: 7,
      name: "Rehan Malik",
      rating: 3.5,
      img: "https://cdn.pixabay.com/photo/2020/05/25/03/28/beard-5216825_1280.jpg",
      text: "Prefex Solution has been a great support in my trading journey. Their strategies are insightful and practical."
    }
    
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { img, name, rating, text } = reviews[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="star" />
        ))}
        {halfStar && <FaStarHalfAlt className="star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="star" />
        ))}
      </>
    );
  };

  return (
    <section className="review-container">
      <main className="review">
        <section className="container">
          <div className="title">
            <h2>reviews</h2>
            <div className="underline"></div>
          </div>

          <article className="review">
            <div className="img-container">
              <img src={img} alt={name} className="person-img" />
            </div>
            <h4 className="author">{name}</h4>
            <div className="stars">{renderStars(rating)}</div>
            <p className="info">{text}</p>

            <div className="button-container">
              <button className="prev-btn btn" onClick={prevReview}>
                <FaChevronLeft />
              </button>
              <button className="next-btn btn" onClick={nextReview}>
                <FaChevronRight />
              </button>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
};

export default Reviews;
