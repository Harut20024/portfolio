import React from "react";
import Gif from "../Images/hello.gif";
import instagram from "../Images/media/insta.png";
import facebook from "../Images/media/facebook.png";
import github from "../Images/media/github.png";
import linkdin from "../Images/media/linkedin.png";
import gmail from "../Images/media/gmail.png";
import "./Footer.css";

const Footer = () => {
  return (
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
        for exploring my portfolio! I'm grateful for your interest in my work
        and would love to hear your thoughts. Feedback is invaluable to my
        professional growth, so please feel free to share any comments or
        suggestions you might have. Reach out to me at Contact me your insights
        are much appreciated!
      </h3>
    </footer>
  );
};

export default Footer;
