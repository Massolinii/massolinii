import React, { useEffect } from "react";
import "../styles/Eye.css";

const Eye: React.FC = () => {
  useEffect(() => {
    const eyeball = (event: MouseEvent) => {
      const eyes = document.querySelectorAll(
        ".eyes"
      ) as NodeListOf<HTMLElement>;
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    };

    document.body.addEventListener("mousemove", eyeball);

    return () => {
      document.body.removeEventListener("mousemove", eyeball);
    };
  }, []);

  return (
    <div className="container eye-animation">
      <div className="eyes"></div>
    </div>
  );
};

export default Eye;
