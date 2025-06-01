import React from "react";
import "./exp.css";
import MenuBar from "./bar.png";

function Experience() {
  return (
    <div id="mainDiv">
      <div id="leftDiv">
        <div id="profileContainer">
          <img src={MenuBar} alt="bar" className="profile-bar" />
        </div>
        <div id="foldersContainer">
          <div className="folder">▼ CLASS</div>
          <div className="folder under">▼ ABOUT</div>
          <div className="folder under about">
            <p>JS</p>About.js
          </div>
        </div>
      </div>
      <div id="rightDiv">
        <pre>
          <span className="keyword">class</span>{" "}
          <span className="className">Programmer</span> {"{"}
          <br />
          <span className="method">constructor() {"{"}</span>
          <br />
          <div id="skills">
            <span className="property">this.</span>
            <span className="propertyName">name</span> ={" "}
            <span className="string">"Harut"</span>;
            <br />
            <span className="property">this.</span>
            <span className="propertyName">surname</span> ={" "}
            <span className="string">"Tharzyan"</span>;
            <br />
            <span className="property">this.</span>
            <span className="propertyName">profession</span> ={" "}
            <span className="string">"software engineer"</span>;
            <br />
            <span className="property">this.</span>
            <span className="propertyName">number</span> ={" "}
            <span className="number">(+374)94-472-452</span>;
            <br />
            <span className="property">this.</span>
            <span className="propertyName">languages</span> = {"["}
            <br />
            <span className="property"></span>{" "}
            <span className="string">"Armenian - (★★★★★★)"</span>,
            <br />
            <span className="property"></span>{" "}
            <span className="string">"Russian - (★★★★★☆)"</span>,
            <br />
            <span className="property"></span>{" "}
            <span className="string">"English - (★★★★☆☆)"</span>
            <br />
            <span className="property"></span> {"]"}
            <br />
            {"}"}
          </div>
          <br />
          <span className="method">Skills() {"{"}</span>
          <div id="skills">
            <span className="keyword">return</span> [
            <br />
            <span className="string">"Java"</span>, {}
            <span className="string">"SQL"</span>, {}
            <span className="string">"Java Script"</span>, {}
            <span className="string">"CSS"</span>, {}
            <span className="string">"Linux"</span>, {}
            <span className="string">"Git"</span>, {}
            <span className="string">"GitHub"</span>, {}
            <span className="string">"REST API"</span>, {}
            <span className="string">"Computer architecture"</span>, {}
            <span className="string">"Problem Solving"</span>, {}
            <span className="string">"Attention to details"</span>, {}
            <span className="string">"Mathematical skills"</span>, {}
            <span className="string">"TeamWork"</span>, {}
            <span className="string">"Communication"</span>, {}
            <span className="string">"debugging"</span>, {}
            <span className="string">"Self-motivation"</span>, {}
            <span className="string">"Coaching"</span> {}
            <br />
            ];
            <br />
            {"}"}
            <br />
          </div>
          <span className="method">Experience() {"{"}</span>
          <br />
          <div id="skills">
            <span className="keyword">return {"["}</span> <br />
            <span className="property">this.</span>
            <span className="propertyName">Job</span> ={" "}
            <span className="string"> ' TUMO ' </span> <br />
            <span className="property"></span>{" "}
            <span className="propertyName">Time : </span>({" "}
            <span className="number">2023</span> -{" "}
            <span className="number">2024</span> )
            <br />
            <span className="property"></span>{" "}
            <span className="propertyName">Position : </span>({" "}
            <span className="string">'learning coach' </span>) ;
            <br />
            <span className="property">this.</span>
            <span className="propertyName">Job</span> ={" "}
            <span className="string"> ' BostonGene ' </span> <br />
            <span className="property"></span>{" "}
            <span className="propertyName">Time : </span>({" "}
            <span className="number">2024</span> -{" "}
            <span className="number">2025</span> )
            <br />
            <span className="property"></span>{" "}
            <span className="propertyName">Position : </span>({" "}
            <span className="string">'Java developer' </span>) ;
            <br />
            <span className="keyword">{"]"}</span> <br />
            {"}"}
            <br />
          </div>
          <span className="method">Education() {"{"}</span>
          <div id="skills">
            <span className="keyword">return {"["}</span> <br />
            <span className="property">this.</span>
            <span className="propertyName">School</span> ={" "}
            <span className="string">'Foton' </span>- (
            <span className="number">2013</span>-
            <span className="number">2020</span>);
            <br />
            <span className="property">this.</span>
            <span className="propertyName">School</span> ={" "}
            <span className="string">'TUMO' </span>- (
            <span className="number">2015</span>-
            <span className="number">2020</span>);
            <br />
            <span className="property">this.</span>
            <span className="propertyName">university</span> ={" "}
            <span className="string">'NPUA' </span>- (
            <span className="number">2020</span>-{" "}
            <span className="string">"Present"</span>);
            <br />
            <span className="keyword">{"]"}</span> <br />
            {"}"}
            <br />
          </div>
          {"}"}
        </pre>
      </div>
    </div>
  );
}

export default Experience;
