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
import FlashlightEffect from '../FlashlightEffect/FlashlightEffect';
import SmileyFace from '../SmileyFace/SmileyFace';

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
                        🌟 Hi there! I'm Harut. My world isn't just about coding; it's a lot more. At TUMO, I wear two hats – one as a coder and another as a learning coach. It's an exciting journey, teaching students the ropes of programming and helping them think out of the box to solve problems.<br /><br />
                        🔍 My passion for programming keeps me on my toes. I'm always up for learning more, diving deeper into coding, and soaking up new experiences. When I'm coding, it feels like freedom; it's where my ideas take flight. This enthusiasm spills over into the projects I work on too – it's all about bringing creativity to life.<br /><br />
                        🚀 Are you on the lookout for someone who's not just good with codes but also loves to share knowledge and innovate? Let's get in touch! I'm all about exploring how I can bring something special to your projects and make a real difference.
                    </p>
                </div>
                <FlashlightEffect />
                <Experience />
                <h1>
                    PROJECTS👌
                </h1>
                <SmileyFace />
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