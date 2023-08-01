import React, { useEffect, useState } from "react";
import "animate.css";
import "./HomePage.css";

const HomePage = () => {
  var isAnimating = false;
  useEffect(() => {
    const text = document.querySelector(".home-page-text");

    const handleMouseEnter = () => {
      if (!isAnimating) {
        text.classList.add("animate__animated", "animate__heartBeat");
        isAnimating = true;
        setTimeout(() => {
          text.classList.remove("animate__animated", "animate__heartBeat");
          isAnimating = false;
        }, 1000);
      }
    };

    text.addEventListener("mouseenter", handleMouseEnter);
    text.addEventListener("mousemove", handleMouseEnter);

    return () => {
      text.removeEventListener("mouseenter", handleMouseEnter);
      text.addEventListener("mousemove", handleMouseEnter);
    };
  }, []);

  const [xi, setX] = useState(window.innerWidth / 2);
  const [yi, setY] = useState(window.innerHeight / 2);
  useEffect(() => {
    let timer;
    const follower = document.querySelector(".follower");
    const main = document.querySelector(".home-page-main-container");

    main.addEventListener("mousemove", (event) => {
      const x = event.pageX;
      const y = event.pageY;

      follower.style.transform = `translate(${x - xi}px, ${y - yi}px)`;
      setX(x);
      setY(y);

      clearTimeout(timer);
      timer = setTimeout(() => {
        follower.style.left = event.pageX;
        follower.style.top = event.pageY;
        // setX(event.pageX);
        // setY(event.pageY);
      }, 5);
    });
  }, []);

  return (
    <div className="home-page-main-container">
      <div className="home-page-text-container">
        <h1 className="home-page-text">Find your LOVE around the world</h1>
      </div>
      <div className="follower"></div>
    </div>
  );
};

export default HomePage;
