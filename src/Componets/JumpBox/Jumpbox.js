import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./box.css";

function Jumpbox({ windowWidth }) {
  const startX = -windowWidth / 2;
  const endX = windowWidth / 2;

  return (
    <ParallaxProvider>
      <div className="box">
        <Parallax
          translateX={[`${startX}px`, `${endX}px`]}
          rotate={[-360, 0]}
          easing="easeInQuad"
          className="jumping-box"
        ></Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default Jumpbox;
