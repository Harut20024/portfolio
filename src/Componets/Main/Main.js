import React, { useState } from 'react';
import imageProfil from '../Images/profil.jpeg';
import Experience from '../Experience/Experience';
import { images } from '../Images/Images';
import data from '../../data.json';
import Carousel from '../Carusel/Carousel'
import Modal from '../Modal/Modal';
import './Main.css';
import Gif from '../Images/hello.gif'
import instagram from '../Images/media/insta.png'
import facebook from '../Images/media/facebook.png'
import github from '../Images/media/github.png'
import linkdin from '../Images/media/linkedin.png'
import gmail from '../Images/media/gmail.png'

function Mainer({ isVisible }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    // This function will be called to close the modal
    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <main>
            <div id='main' className={isVisible ? 'show' : ''}>
                {/* Profile Section */}
                <div id="about">
                    <img src={imageProfil} alt="Profile" className="profile-image" />
                    <h1>👋Greetings</h1>
                    <p id='paragraph'>
                        🌟 I am Harut. My experience transcends mere coding, as I also serve as a learning coach at TUMO.
                        In this role, I guide students through the intricacies of programming, imparting fundamental
                        concepts and fostering their creative problem-solving skills.<br></br>
                        🔍 What truly distinguishes me is my unwavering commitment to staying abreast of industry advancements.
                        I am dedicated to exploring emerging trends and technologies, ensuring that my expertise remains up-to-date
                        and relevant.<br></br>
                        🚀 If you are in pursuit of a programming enthusiast who possesses not only technical prowess but also a
                        passion for mentoring and innovation, I invite us to connect. I am eager to delve into how I can contribute
                        to your projects and deliver meaningful results.
                    </p>
                </div>

                <Experience />
                <h1>
                    PROJECTS👌
                </h1>

                <div id="carusello">
                    <Carousel items={data.map((item, index) => ({
                        id: item.id,
                        src: images[index],
                        alt: `Image ${item.id}`
                    }))} active={0} />
                </div>

                {/* Projects Section */}


                <div className="projects-container">
                    {data.map((project, index) => (
                        <div key={project.id} className="project" onClick={() => openModal({ ...project, src: images[index] })}>
                            <div className="project-image">
                                <img src={images[index]} alt={`Project ${project.id}`} />
                            </div>
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.descriptionl}</p>
                                {/* Stop propagation on click to allow the URL to be clickable */}
                                <a href={project.url} className="link" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <Modal
                        show={!!selectedProject}
                        onClose={closeModal}
                        project={selectedProject}
                    />
                )}
                <footer>
                    <img id='gif' src={Gif} alt="Example" />
                    <div className='Media'>
                        <a href={"https://www.linkedin.com/in/tharzyan/"} id="gmail" target="_blank" rel="noopener noreferrer">
                            <img src={linkdin} alt="Profile" />
                        </a>
                        <a href={"https://www.instagram.com/harut20024/"} id="gmail" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Profile" />
                        </a>
                        <a href={"https://github.com/Harut20024"} id="gmail" target="_blank" rel="noopener noreferrer">
                            <img id='git' src={github} alt="Profile" />
                        </a>
                        <a href={"https://www.facebook.com/harutyun.tarzyan?locale=ru_RU"} id="gmail" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Profile" />
                        </a>
                        <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=htarzyanh@gmail.com"} id="gmail" target="_blank" rel="noopener noreferrer">
                            <img src={gmail} alt="Profile" />
                        </a>
                    </div>
                    <h1>Thank you</h1>
                    <h3> for exploring my portfolio! I'm grateful for your interest in my work and would love to hear your thoughts. Feedback is invaluable to my professional growth, so please feel free to share any comments or suggestions you might have.
                        Reach out to me at
                        Contact me

                        your insights are much appreciated!</h3>
                </footer>
            </div>
        </main>
    );
}

export default Mainer;