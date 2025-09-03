import { useState, useEffect } from "react";
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
  blurImage, // 👈 new: low-quality/blurred version of the image
}) {
  const [typingComplete, setTypingComplete] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isHome && !typingComplete) {
      const timer = setTimeout(() => setTypingComplete(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isHome, typingComplete]);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {/* Blurred Placeholder */}
      <img
        src={blurImage || bgImage}
        alt="Hero placeholder"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-105"
      />

      {/* High-Quality Hero Image */}
      <img
        src={bgImage}
        alt="Hero"
        loading="eager"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "black",
          opacity: overlayOpacity,
        }}
      />

      {/* Text Content */}
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
          <p className="text-xl md:text-[27px] text-center md:text-start text-[rgba(236,234,234,1)] font-normal pl-0 md:pl-14">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerSec;
