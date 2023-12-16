import React, { useState } from "react";
import "./Placeholder.css";

interface PlaceholderProps {
  title: string;
  text: string;
  keys: string;
  link: string;
  image: string;
  color: string;
}

const Placeholder = ({
  title,
  text,
  keys,
  link,
  image,
  color,
}: PlaceholderProps) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      style={{ background: isHovered ? "linear-gradient(to top, #000000, #001c08)" : color}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="card-image" src={image} width="200" height="200" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{keys}</p>
        <a href="#" className={isHovered ? "btn btn-outline-light card-button" : "btn btn-outline-dark card-button"} onClick={handleButtonClick}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Placeholder;
