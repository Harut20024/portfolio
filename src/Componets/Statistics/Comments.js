import React from 'react';
import "./comments.scss"; // Make sure your CSS is correctly linked

const Comments = ({
  recImg,
  recommendations,
  currentIndex,
  expandedIndex,
  toggleExpanded
}) => {
  return (
    <div className="testimonial-container">
      {recommendations.map((recommendation, index) => (
        <div 
          className={`testimonial-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="testimonial-info">
            <img
              src={recImg[index]}
              alt={recommendation.name}
              className="testimonial-image"
            />
            <div className="testimonial-author">
              <strong>{recommendation.name}</strong>
              <span>{recommendation.position}</span>
            </div>
          </div>
          <p className="testimonial-text">
            {expandedIndex === index ? recommendation.recommendation :
              `${recommendation.recommendation.substring(0, 362)}...`}
            <span
              className="read-more"
              onClick={() => toggleExpanded(index)}
            >
              {expandedIndex === index ? "Read less" : "Read more"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
