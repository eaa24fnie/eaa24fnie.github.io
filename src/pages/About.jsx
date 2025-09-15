import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";

export default function About() {
  const headRef = useRef(null);
  const eyesRef = useRef(null);

  const [headTransform, setHeadTransform] = useState({
    transform: "translate(0px, 0px) rotate(0deg)",
  });

  const [eyesTransform, setEyesTransform] = useState({
    transform: "translate(0px, 0px)",
  });

  const [gitterTransform, setGitterTransform] = useState({
    transform: "translate(0px, 0px)",
  });

  const [eyebrowTransform, setEyebrowTransform] = useState({
    transform: "translate(0px, 0px)",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headRef.current) return;

      const head = headRef.current.getBoundingClientRect();
      const headCenterX = head.left + head.width / 2;
      const headCenterY = head.top + head.height / 2;

      const dxHead = Math.max(
        -100,
        Math.min(70, (e.clientX - headCenterX) * 0.05)
      );
      const dyHead = Math.max(
        -100,
        Math.min(70, (e.clientY - headCenterY) * 0.05)
      );

      setHeadTransform({ transform: `translate(${dxHead}px, ${dyHead}px)` });

      const dxEyes = Math.max(
        -10,
        Math.min(5, (e.clientX - headCenterX) * 0.02)
      );
      const dyEyes = Math.max(
        -20,
        Math.min(3, (e.clientY - headCenterY) * 0.02)
      );

      setEyesTransform({ transform: `translate(${dxEyes}px, ${dyEyes}px)` });

      const dxGitter = Math.max(
        -100,
        Math.min(70, (e.clientX - headCenterX) * 0.05)
      );
      const dyGitter = Math.max(
        -100,
        Math.min(70, (e.clientY - headCenterY) * 0.05)
      );

      setGitterTransform({
        transform: `translate(-${dxGitter}px, ${-dyGitter}px)`,
      });

      const dxEyebrow = Math.max(
        -5,
        Math.min(5, (e.clientX - headCenterX) * 0.02)
      );
      const dyEyebrow = Math.max(
        -20,
        Math.min(3, (e.clientY - headCenterY) * 0.02)
      );

      setEyebrowTransform({
        transform: `translate(-${dxEyebrow}px, ${-dyEyebrow}px)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <Header />

      <div className="aboutme">
        <div>
          <div className="emne fritid">Fritid</div>
          <div className="emne uddannelse">Uddannelse</div>
        </div>

        <div className="hoved">
          <svg
            ref={headRef}
            className="hoved-mig"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 246.6 276.7"
            style={headTransform}
          >
            <defs>
              <style>
                {`.st0 { fill: #fff; }
                  .st1 { fill: #ff5151; }`}
              </style>
            </defs>

            {/* Head shape */}
            <path
              className="st1"
              d="M46.3,99.9c0-12.8-10.4-23.2-23.2-23.2S0,87.1,0,99.9s2.5,12.1,6.7,16.3c-.4,1.3-.7,2.7-.7,4.2,0,7.5,6,13.5,13.5,13.5s13.2-5.8,13.5-13c7.9-3.7,13.3-11.7,13.3-21Z"
            />
            <path
              className="st1"
              d="M200.3,99.9c0-12.8,10.4-23.2,23.2-23.2,12.8,0,23.2,10.4,23.2,23.2,0,6.3-2.5,12.1-6.7,16.3.4,1.3.7,2.7.7,4.2,0,7.5-6,13.5-13.5,13.5-7.3,0-13.2-5.8-13.5-13-7.9-3.7-13.3-11.7-13.3-21Z"
            />
            <circle className="st1" cx="123.3" cy="100.1" r="100.1" />
            <polygon points="223.5 100.1 196.2 154.6 169.3 171.4 166.7 155 123.3 146.5 79.9 155 76.7 175.4 50.4 154.6 23.2 100.1 13.2 172.1 52.6 227.2 123.3 276.7 194 227.2 233.5 172.1 223.5 100.1" />

            {/* Eyes group */}
            <g ref={eyesRef} style={eyesTransform}>
              <rect
                className="eyes"
                x="73.6"
                y="75.1"
                width="17.2"
                height="27.5"
                rx="8.6"
                ry="8.6"
              />
              <rect
                className="eyes"
                x="155.9"
                y="75.1"
                width="17.2"
                height="27.5"
                rx="8.6"
                ry="8.6"
              />
            </g>

            {/* Mouth, eyebrows, etc. */}
            <path
              className="st1"
              d="M156,168.8v18l-15.9,12.7-4-3.9v-9.2l-12.8-2.3-12.8,2.3v9.2l-4,3.9-15.9-12.7v-18s5.7,6.8,32.7,6.8,32.7-6.8,32.7-6.8Z"
            />
            <g className="eyebrow" style={eyebrowTransform}>
              <rect
                className="eyebrows"
                x="141.1"
                y="49.2"
                width="53.9"
                height="16.3"
                transform="translate(8.6 -20.7) rotate(7.2)"
              />
              <rect
                className="eyebrows"
                x="52.4"
                y="49.2"
                width="53.9"
                height="16.3"
                transform="translate(165.3 104.3) rotate(172.8)"
              />
            </g>

            <path
              className="st0"
              d="M156,168.8s-5.7,6.8-32.7,6.8-32.7-6.8-32.7-6.8c0,0,5.7-6.8,32.7-6.8s32.7,6.8,32.7,6.8Z"
            />
            <polygon points="123.3 76.8 96.6 151.7 123.3 146.5 123.3 76.8" />
          </svg>
          <h3>JEG ER FREDERIK!</h3>
          <div></div>
          <img
            style={gitterTransform}
            className="gitter"
            src="../../public/img/gitter.svg"
            alt=""
          />
        </div>

        <div>
          <div className="emne erfaring">Erfaring</div>
          <div className="emne funfact">Fun Fact</div>
        </div>
      </div>
    </div>
  );
}
