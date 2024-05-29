/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import imageProfil from "../Images/profil.jpeg";
import Experience from "../Experience/Experience";
import { images, recImg } from "../Images/Images";
import data from "../../data.json";
import Carousel from "../Carusel/Carousel";
import Modal from "../Modal/Modal";
import "./Main.css";
import wowFace from "../Images/face.gif";
import Gif from "../Images/hello.gif";
import instagram from "../Images/media/insta.png";
import facebook from "../Images/media/facebook.png";
import github from "../Images/media/github.png";
import linkdin from "../Images/media/linkedin.png";
import gmail from "../Images/media/gmail.png";
import FlashlightEffect from "../FlashlightEffect/FlashlightEffect";
import recommendations from "../../recomend.json";
import Statistics from "../Statistics/Statistics";
import EmailForm from "../EmailForm/EmailForm";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Mainer() {
  const [isEmailFormVisible, setIsEmailFormVisible] = useState(false);
  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const greeting = "Oh you still here! let me show you my projects";
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [workshopAssistantCount, setWorkshopAssistantCount] = useState(0);
  const [numberOfStudentsCount, setNumberOfStudentsCount] = useState(0);
  const [interAssistantCount, setinterAssistantCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const paragraphRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const toggleDescription = (id) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };
  const [allowed, setAllowed] = useState(false);

  const checkIfCircleContainerInView = () => {
    const circleContainer = document.querySelector(".circle-container");
    const rect = circleContainer.getBoundingClientRect();
    const isTopVisible = rect.top >= 50 && rect.top <= window.innerHeight * 4;
    const isBottomVisible =
      rect.bottom <= window.innerHeight && rect.bottom >= 0;
    return isTopVisible && isBottomVisible;
  };

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = paragraphRef.current;
      if (paragraph && !allowed) {
        const rect = paragraph.getBoundingClientRect();
        const isPastParagraph = rect.bottom <= window.innerHeight / 2; 
  
        if (isPastParagraph) {
          setIsEmailFormVisible(true);
          setAllowed(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allowed]);
  
  
  const handleAuthentication = () => {
    setIsEmailFormVisible(false);
  };
  
  

  const disableBodyScroll = (disable) => {
    if (disable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const preloadImages = () => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    recImg.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const dataGraph = {
    labels: [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
    ],
    datasets: [
      {
        label: "Contributions",
        data: [36, 166, 30, 5, 59, 45, 59, 36, 40, 21],
        borderColor: "#3f8a89",
        backgroundColor: "#65e7e0",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
            family: "Helvetica, Arial, sans-serif",
            style: "normal",
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Contributions in Projects",
        color: "white",
        font: {
          size: 18,
          family: "Helvetica, Arial, sans-serif",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
    },
    elements: {
      line: {
        borderColor: "white",
        borderWidth: 2,
      },
      point: {
        borderColor: "white",
        backgroundColor: "white",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectShow = document.getElementById("projectShow");
      if (projectShow) {
        const rect = projectShow.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if at least half of the projectShow section is within the viewport
        if (rect.top < windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          let index = 0;
          setDisplayedGreeting("");
          const intervalId = setInterval(() => {
            setDisplayedGreeting(greeting.slice(0, index + 1));
            index++;
            if (index >= greeting.length) {
              clearInterval(intervalId);
            }
          }, 80);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mainDiv = document.getElementById("main");
      if (window.scrollY >= window.innerHeight / 2.7) {
        mainDiv.classList.add("show");
        mainDiv.classList.remove("close");
      } else {
        mainDiv.classList.remove("show");
        mainDiv.classList.add("close");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    const text = paragraph.textContent;

    const newContent = text
      .split("")
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join("");
    paragraph.innerHTML = newContent;

    const handleScroll = () => {
      const paragraph = paragraphRef.current;
      const rect = paragraph.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const paragraphOffsetTop = rect.top + scrollTop;
      const scrollPosition = scrollTop + window.innerHeight / 1.3;
      const spans = paragraph.querySelectorAll("span");
      const progress =
        (scrollPosition - paragraphOffsetTop) / (paragraph.clientHeight * 3);

      spans.forEach((span, index) => {
        const spanProgress = (index + 1) / spans.length;
        if (progress > spanProgress) {
          span.style.color = "#957290";
        } else {
          span.style.color = "#ffffff";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility();
    };

    const checkVisibility = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const screenPosition = window.innerHeight;
      const aboutPosition = aboutSection.getBoundingClientRect().top;
      const visibilityThreshold = window.innerHeight * 0.6;

      if (aboutPosition < screenPosition - visibilityThreshold) {
        setIsAboutVisible(true);
      } else {
        setIsAboutVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", handleScroll);
    preloadImages();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (checkIfCircleContainerInView()) {
        setStartCounting(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (startCounting) {
      const maxWorkshopCount = 37;
      const workshopInterval = setInterval(() => {
        if (workshopAssistantCount < maxWorkshopCount) {
          setWorkshopAssistantCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(workshopInterval);
        }
      }, 100);

      return () => clearInterval(workshopInterval);
    }
  }, [workshopAssistantCount, startCounting]);

  useEffect(() => {
    if (startCounting) {
      const maxStudentCount = 300;
      const studentInterval = setInterval(() => {
        if (numberOfStudentsCount < maxStudentCount) {
          setNumberOfStudentsCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(studentInterval);
        }
      }, 0.1);

      return () => clearInterval(studentInterval);
    }
  }, [numberOfStudentsCount, startCounting]);

  useEffect(() => {
    if (startCounting) {
      const maxInternationalCount = 3;
      const internationalInterval = setInterval(() => {
        if (interAssistantCount < maxInternationalCount) {
          setinterAssistantCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(internationalInterval);
        }
      }, 700);

      return () => clearInterval(internationalInterval);
    }
  }, [interAssistantCount, startCounting]);

  const openModal = (project) => {
    setSelectedProject(project);
    windowWidth > 1100 && disableBodyScroll(true);

    requestAnimationFrame(() => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent) {
        const modalTop =
          modalContent.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: modalTop,
          behavior: "smooth",
        });
      }
    });
  };

  const closeModal = () => {
    setSelectedProject(null);
    disableBodyScroll(false);
  };

  function AnimatedRole() {
    const roles = ["Software Engineer", "Web Developer", "Freelancer"];
    const [currentRole, setCurrentRole] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
      if (index === roles.length) setIndex(0);
      const currentIndex = roles[roleIndex % roles.length];

      if (subIndex === currentIndex.length + 1 && !reverse) {
        setReverse(true);
        setTimeout(() => {
          setSubIndex((prev) => prev - 1);
        }, 1000);
        return;
      }

      if (subIndex === 0 && reverse) {
        setReverse(false);
        setRoleIndex((prev) => prev + 1);
        setIndex((prev) => prev + 1);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? 110 : 70
      );

      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, roleIndex, roles]);

    useEffect(() => {
      setCurrentRole(roles[roleIndex % roles.length].substring(0, subIndex));
    }, [subIndex, roleIndex, roles]);

    return <span className="animated-role">{currentRole}</span>;
  }

  const mainBackgroundStyle =
    selectedProject && windowWidth > 1100
      ? {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          transition: "background-color 0.5s ease",
        }
      : {};

  return (
    <main style={mainBackgroundStyle}>
      {isEmailFormVisible && (
        <EmailForm onAuthentication={handleAuthentication} />
      )}
      <div id="main" className="close">
        <div id="about" className={`show ${isAboutVisible ? "visible" : ""}`}>
          <img src={imageProfil} alt="Profile" className="profile-image" />
          <h1>Hi I'm Harut a </h1>
          <h1>
            <AnimatedRole />
          </h1>
          <p id="paragraph" ref={paragraphRef} className="karaoke-text">
            🌟 I found my interest in coding when I was 15. I've worked at Tumo,
            assisting students to discover and pursue their preferred areas of
            study. My experience in technology is marked by an early engagement
            with coding and a dedication to supporting others in exploring the
            field.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
            download="Harut_CV_Resume.pdf"
            className="download-cv-button"
          >
            Download CV
          </a>
          <Experience />
        </div>

        <Statistics
          windowWidth={windowWidth}
          dataGraph={dataGraph}
          options={options}
          workshopAssistantCount={workshopAssistantCount}
          numberOfStudentsCount={numberOfStudentsCount}
          interAssistantCount={interAssistantCount}
          recommendations={recommendations}
          recImg={recImg}
        />
        {windowWidth > 1100 && <FlashlightEffect />}

        <div id="projectShow">
          <div className="leftShow">
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-buttons">
                  <span className="browser-button red"></span>
                  <span className="browser-button yellow"></span>
                  <span className="browser-button green"></span>
                </div>
              </div>
              <div className="browser-content">
                <img src={wowFace} alt="Cat" />
                <h1>{displayedGreeting}</h1>
              </div>
            </div>
          </div>
          <div className="rightShow">
            <div className="vscode-mockup">
              <div className="vscode-header"></div>
              <div className="vscode-content">
                <pre>
                  <code>
                    {`<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <img src={wowFace} alt="wowFace" />
    <p>
    ${displayedGreeting}
    </p>
  </body>
</html>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div id="carusello">
          <Carousel
            items={data.map((item, index) => ({
              id: item.id,
              src: images[index],
              alt: `Image ${item.id}`,
            }))}
            active={0}
          />
        </div>
        {/* Projects Section */}

        <div ref={projectsContainerRef} className="projects-container">
          {data.map((project, index) => (
            <div
              key={project.id}
              className="project"
              onClick={() => {
                openModal({ ...project, src: images[index] });
              }}
              style={{
                height: expandedProjectId === project.id ? "auto" : "32.5em",
              }}
            >
              <div className="project-image">
                <img src={images[index]} alt={`Project ${project.id}`} />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>
                  {expandedProjectId === project.id
                    ? project.descriptionl
                    : `${
                        project.descriptionl?.substring(0, 100) ?? ""
                      }... `}{" "}
                  <span
                    className="read-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDescription(project.id);
                    }}
                  >
                    {expandedProjectId === project.id
                      ? "Read Less"
                      : "Read More"}
                  </span>
                </p>
                <a
                  href={project.url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {windowWidth > 1100 && selectedProject && (
          <Modal
            show={selectedProject}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
        <footer>
          <img id="gif" src={Gif} alt="Example" />
          <div className="Media">
            <a
              href={"https://www.linkedin.com/in/tharzyan/"}
              id="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkdin} alt="Profile" />
            </a>
            <a
              href={"https://www.instagram.com/harut20024/"}
              id="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Profile" />
            </a>
            <a
              href={"https://github.com/Harut20024"}
              id="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="git" src={github} alt="Profile" />
            </a>
            <a
              href={"https://www.facebook.com/harutyun.tarzyan?locale=ru_RU"}
              id="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Profile" />
            </a>
            <a
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=htarzyanh@gmail.com"
              }
              id="gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="Profile" />
            </a>
          </div>
          <h1>Thank you</h1>
          <h3>
            {" "}
            for exploring my portfolio! I'm grateful for your interest in my
            work and would love to hear your thoughts. Feedback is invaluable to
            my professional growth, so please feel free to share any comments or
            suggestions you might have. Reach out to me at Contact me your
            insights are much appreciated!
          </h3>
        </footer>
      </div>
    </main>
  );
}

export default Mainer;
