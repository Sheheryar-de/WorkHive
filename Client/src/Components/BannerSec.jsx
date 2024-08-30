import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function BannerSec({
  bgImage,
  title,
  desc,
  text,
  size,
  align,
  isHome,
  space,
  overlayOpacity = 0.5,
}) {
  const [typingComplete, setTypingComplete] = useState(false);

  const bgImg = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
    position: "relative",
  };

  useEffect(() => {
    if (isHome && !typingComplete) {
      const timer = setTimeout(() => setTypingComplete(true), 3000); // Adjust time to match typing effect duration
      return () => clearTimeout(timer);
    }
  }, [isHome, typingComplete]);

  return (
    <div style={bgImg}>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "black",
          opacity: overlayOpacity,
        }}
      />
      <div
        className={`container mx-auto flex flex-col justify-center h-[450px] relative ${align}`}
      >
        <div className={space}>
          <h1 className={`${size} ${text} font-semibold`}>
            {isHome ? (
              typingComplete ? (
                title
              ) : (
                <Typewriter
                  options={{
                    strings: [title],
                    autoStart: true,
                    loop: false,
                    delay: 70,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(title)
                      .callFunction(() => setTypingComplete(true))
                      .start();
                  }}
                />
              )
            ) : (
              title
            )}
          </h1>
          <p className="text-xl md:text-[27px] text-center md:text-start text-[rgba(236,234,234,1)] font-normal pl-o md:pl-14">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerSec;
