import React, { useState, useEffect } from "react";
import imageProfil from "../Images/profil.jpeg";
import Experience from "../Experience/Experience";
import { images } from "../Images/Images";
import data from "../../data.json";
import Carousel from "../Carusel/Carousel";
import Modal from "../Modal/Modal";
import "./Main.css";
import Gif from "../Images/hello.gif";
import instagram from "../Images/media/insta.png";
import facebook from "../Images/media/facebook.png";
import github from "../Images/media/github.png";
import linkdin from "../Images/media/linkedin.png";
import gmail from "../Images/media/gmail.png";
import FlashlightEffect from "../FlashlightEffect/FlashlightEffect";
import SmileyFace from "../SmileyFace/SmileyFace";

function Mainer({ isVisible }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [workshopAssistantCount, setWorkshopAssistantCount] = useState(0);
  const [numberOfStudentsCount, setNumberOfStudentsCount] = useState(0);
  const [internationalAssistantsCount, setInternationalAssistantsCount] =
    useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const checkIfCircleContainerInView = () => {
    const circleContainer = document.querySelector(".circle-container");
    const rect = circleContainer.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

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

  // Increment workshopAssistantCount
  useEffect(() => {
    if (startCounting) {
      const maxWorkshopCount = 10;
      const workshopInterval = setInterval(() => {
        if (workshopAssistantCount < maxWorkshopCount) {
          setWorkshopAssistantCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(workshopInterval);
        }
      }, 400);

      return () => clearInterval(workshopInterval);
    }
  }, [workshopAssistantCount, startCounting]);

  // Increment numberOfStudentsCount
  useEffect(() => {
    if (startCounting) {
      const maxStudentCount = 260;
      const studentInterval = setInterval(() => {
        if (numberOfStudentsCount < maxStudentCount) {
          setNumberOfStudentsCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(studentInterval);
        }
      }, 40);

      return () => clearInterval(studentInterval);
    }
  }, [numberOfStudentsCount, startCounting]);

  // Increment internationalAssistantsCount
  useEffect(() => {
    if (startCounting) {
      const maxInternationalCount = 3;
      const internationalInterval = setInterval(() => {
        if (internationalAssistantsCount < maxInternationalCount) {
          setInternationalAssistantsCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(internationalInterval);
        }
      }, 800);

      return () => clearInterval(internationalInterval);
    }
  }, [internationalAssistantsCount, startCounting]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <div id="main" className={isVisible ? "show" : ""}>
        {/* Profile Section */}
        <div id="about">
          <img src={imageProfil} alt="Profile" className="profile-image" />
          <h1>Greetings</h1>
          <p id="paragraph">
            🌟 Hi there! I'm Harut. My world isn't just about coding; it's a lot
            more. At TUMO, I wear two hats – one as a coder and another as a
            learning coach. It's an exciting journey, teaching students the
            ropes of programming and helping them think out of the box to solve
            problems.
            <br />
            <br />
            🔍 I began my journey in programming at 15, and it's been an
            intriguing adventure ever since. Creating things that can help and
            be useful is incredibly rewarding. I never stop learning, and the
            more I delve into it, the more fascinating it becomes. Each new
            project is a chance to explore and bring useful ideas to life.
            <br />
            <br />
            🚀 Are you searching for someone who excels in coding and thrives on
            sharing knowledge ? Let's connect! I bring more than just coding
            skills to the table. With a strong background in teamwork and
            problem-solving, I'm equipped to find creative solutions and
            contribute significantly to your projects. Let’s explore how we can
            make a meaningful impact together.
          </p>
        </div>

        <div className="circle-container">
          <div className="circle circle1">
            <div className="circle-text">Workshop assistant</div>
            <div className="circle-number">{workshopAssistantCount}</div>
          </div>
          <div className="circle circle2">
            <div className="circle-text">Number of students</div>
            <div className="circle-number">
              {numberOfStudentsCount}
              {numberOfStudentsCount >= 260 ? "+" : ""}
            </div>
          </div>
          <div className="circle circle3">
            <div className="circle-text">International workshop assistant</div>
            <div className="circle-number">{internationalAssistantsCount}</div>
          </div>
        </div>

        {windowWidth > 1100 && <FlashlightEffect />}
        <Experience />
        <h1>PROJECTS👌</h1>
        {windowWidth > 1100 && <SmileyFace />}
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
        <div className="projects-container">
          {data.map((project, index) => (
            <div
              key={project.id}
              className="project"
              onClick={() => openModal({ ...project, src: images[index] })}
            >
              <div className="project-image">
                <img src={images[index]} alt={`Project ${project.id}`} />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.descriptionl}</p>
                {/* Stop propagation on click to allow the URL to be clickable */}
                <a
                  href={project.url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {windowWidth > 1100 && selectedProject && (
          <Modal
            show={!!selectedProject}
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
