import React, { useState, useEffect } from "react";
import "./Slide.css";
// import ImageA from "../images/image1";

const Slide = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        showSlides();
      }, 4000);
  
      return () => clearInterval(interval);
    }, [slideIndex]);
  
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        slides[newIndex - 1].style.display = "block";
        return newIndex;
      });
    };
  
  return (
    <>
     <div className="slideshow-container">
      <div className={`mySlides fade ${slideIndex === 1 ? "active" : ""}`}>
        <div className="numbertext">1 / 3</div>
        <img
          src="/src/images/image1.jpg"
          style={{ width: "100%", height: "40%" }}
          alt="Slide 1"
        />
        <div className="text"></div>
      </div>

      <div className={`mySlides fade ${slideIndex === 2 ? "active" : ""}`}>
        <div className="numbertext">2 / 3</div>
        <img
          src="/src/images/image2.jpg"
          style={{ width: "100%", height: "40%" }}
          alt="Slide 2"
        />
        {/* <div className="text">It's what you learn after you know it all that counts.”—Harry S Truman</div> */}
      </div>

      <div className={`mySlides fade ${slideIndex === 3 ? "active" : ""}`}>
        <div className="numbertext">3 / 3</div>
        <img
          src="/src/images/image3.jpg"
          style={{ width: "100%", height: "40%" }}
          alt="Slide 3"
        />
        <div className="text"></div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
    <br />
    <div style={{ textAlign: "center" }}>
      <span className="dot" onClick={() => currentSlide(1)}></span>
      <span className="dot" onClick={() => currentSlide(2)}></span>
      <span className="dot" onClick={() => currentSlide(3)}></span>
    </div>
    </>
  );
}

export default Slide;
