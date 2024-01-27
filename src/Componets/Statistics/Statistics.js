import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./statistic.css";

const Statistics = ({
  windowWidth,
  dataGraph,
  options,
  workshopAssistantCount,
  numberOfStudentsCount,
  internationalAssistantsCount,
  recommendations,
  recImg,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const chartOptions = {
    ...options, 
    responsive: true,
    maintainAspectRatio: false,  
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="statistic">
      <h1>Statistics Overview</h1>
      <p id="parag">
        This section presents a snapshot of my contributions and collaborations.
        You can see statistics of workshop assistant, the number of students
        I've reached, and my involvement in international workshops. The figures
        reflect my commitment to education and mentorship.
      </p>
      <div className="chart-container">
        <Line data={dataGraph} options={chartOptions} />
      </div>
      <h4>Statistics from my work</h4>
      <div className="circle-container">
        <div className="circle circle1">
          <div className="circle-text">Workshop assistant</div>
          <div className="circle-number">{workshopAssistantCount}</div>
        </div>
        <div className="circle circle2">
          <div className="circle-text">Number of students</div>
          <div className="circle-number">
            {numberOfStudentsCount}
            {numberOfStudentsCount >= 290 ? "+" : ""}
          </div>
        </div>
        <div className="circle circle3">
          <div className="circle-text">International workshop assistant</div>
          <div className="circle-number">{internationalAssistantsCount}</div>
        </div>
      </div>
      <div id="testimonial-slider">
        <h4>What People Say About Me</h4>
        <div className="slider-nav">
          <button className="nav-button prev" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="nav-button next" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <div className="testimonial-info">
              <img
                src={recImg[currentIndex]}
                alt={recommendations[currentIndex].name}
                className="testimonial-image"
              />
              <div className="testimonial-author">
                <strong>{recommendations[currentIndex].name}</strong>
                <span>{recommendations[currentIndex].position}</span>
              </div>
            </div>
            <p className="testimonial-text">
              {recommendations[currentIndex].recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
