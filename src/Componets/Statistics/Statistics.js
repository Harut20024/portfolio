import React, {useState, useEffect} from "react";
import "./statistic.css";
import Comments from "./Comments";

const Statistics = ({windowWidth, recommendations, recImg}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
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

    const [isStatisticVisible, setIsStatisticVisible] = useState(false);

    useEffect(() => {
        const checkVisibility = () => {
            const statisticSection = document.getElementById("statistic");
            const screenPosition = window.innerHeight;
            const statisticPosition = statisticSection.getBoundingClientRect().top;
            const visibilityThreshold = 300;

            if (statisticPosition + visibilityThreshold < screenPosition) {
                setIsStatisticVisible(true);
            } else {
                setIsStatisticVisible(false);
            }
        };

        checkVisibility();
        window.addEventListener("scroll", checkVisibility);
        return () => {
            window.removeEventListener("scroll", checkVisibility);
        };
    }, []);

    useEffect(() => {
        recImg.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [recImg]);

    return (
        <div id="statistic" className={isStatisticVisible ? "visible" : ""}>
            <h1>Professional Highlights</h1>

            <section className="experience-cards">
                {/* TUMO Card */}
                <article className="experience-card">
                    <header className="exp-header">
                        <h3>TUMO</h3>
                        <span className="exp-role">Learning Coach</span>
                    </header>
                    <div className="tech-badges">
                        <span className="badge">Coaching</span>
                        <span className="badge">Mentoring</span>
                        <span className="badge">Communication</span>
                        <span className="badge">Teaching</span>
                    </div>
                    <p className="exp-text">At TUMO, I worked with 300+ students aged 12 and older. I took part in more
                        than 50 workshops and supported over 10 international workshops. I was proud to be chosen as one
                        of the top learning coaches.

                        I spent a lot of time with students, teaching them coding and technology. I helped them start
                        new projects, solve problems, and think in creative ways. Many of them grew their skills and
                        became more confident, and I also learned a lot from working with them. These experiences gave
                        me strong skills in teaching, communication, and teamwork.</p>
                </article>

                {/* BostonGene Card */}
                <article className="experience-card">
                    <header className="exp-header">
                        <h3>BostonGene</h3>
                        <span className="exp-role">Software Engineer (Backend)</span>
                    </header>
                    <div className="tech-badges">
                        <span className="badge">Java</span>
                        <span className="badge">Spring Boot</span>
                        <span className="badge">PostgreSQL</span>
                        <span className="badge">GitLab CI/CD</span>
                        <span className="badge">Docker</span>
                        <span className="badge">Salesforce</span>
                        <span className="badge">Apex</span>
                        <span className="badge">React</span>
                        <span className="badge">Grafana</span>
                    </div>
                    <p className="exp-text">
                        At BostonGene, I worked on backend systems and microservices,
                        improved CI/CD pipelines, and resolved production bugs to keep
                        systems reliable.
                    </p>
                    <ul className="achievements">
                        <li>Designed and maintained microservices for critical workflows.</li>
                        <li>Built and optimized GitLab CI/CD pipelines for faster delivery.</li>
                        <li>Containerized services with Docker and deployed on Kubernetes.</li>
                        <li>Fixed bugs and closed tickets to improve stability.</li>
                        <li>Monitored and improved system performance with Grafana.</li>
                    </ul>
                </article>
            </section>

            <h4>What People Say About Me</h4>
            {windowWidth < 1001 ? (
                <div id="testimonial-sliders">
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
                                {expandedIndex === currentIndex
                                    ? recommendations[currentIndex].recommendation
                                    : `${recommendations[
                                        currentIndex
                                        ].recommendation.substring(0, 322)}...`}
                                <span
                                    className="read-more"
                                    onClick={() => toggleExpanded(currentIndex)}
                                >
                  {expandedIndex === currentIndex ? "Read less" : "Read more"}
                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <Comments
                    recImg={recImg}
                    recommendations={recommendations}
                    expandedIndex={expandedIndex}
                    toggleExpanded={toggleExpanded}
                />
            )}
        </div>
    );
};

export default Statistics;