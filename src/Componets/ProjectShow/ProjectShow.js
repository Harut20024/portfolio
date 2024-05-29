import React, { useEffect } from "react";
import wowFace from "../Images/face.gif";

const ProjectShow = ({ displayedGreeting }) => {
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = wowFace;
  }, []);

  return (
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
  );
};

export default ProjectShow;
