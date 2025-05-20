import React, { useEffect, useState, useRef } from "react";

const RollingImage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      console.log("scrollLeft:", container.scrollLeft);
      setScrollLeft(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);

    // cleanup (remove listener) when this component is unmounted
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        width: "100vw",
        height: "300px",
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div style={{ width: "300vw", height: "100%" }}>
        <img
          src="/milo.png"
          style={{
            position: "absolute",
            top: "0",
            // the image can go off the left side, but stops on the right side
            // feature? bug? who knows?
            right: `${scrollLeft}px`,
            width: "250px",
            cursor: "pointer",
          }}
          alt="milo"
          onClick={() => window.open("https://milothedog.com", "_blank")}
        />
      </div>
    </div>
  );
};

export default RollingImage;
