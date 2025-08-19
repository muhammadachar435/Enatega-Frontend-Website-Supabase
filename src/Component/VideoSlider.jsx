import React, { useState } from "react";
import { fadeIn } from "../variants";
import { motion, AnimatePresence } from "framer-motion";

function VideoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const videos = [
    {
      src: "https://player.vimeo.com/video/1074256493?h=f475d8cfc0&badge=0",
      thumbnail: "Pictures/Testimonial1.png",
    },
    {
      src: "https://player.vimeo.com/video/1074256591?h=a89301853b&badge=0",
      thumbnail: "/Pictures/Tetimonal2.png",
    },
    {
      src: "https://player.vimeo.com/video/1074256538?h=e9bd6ce384&badge=0",
      thumbnail: "/Pictures/Testimonal3.jpg",
    },
  ];

  const handleDotClick = (index) => {
    if (index === activeIndex) return;

    // Correct direction logic
    setDirection(index < activeIndex ? -1 : 1);
    setShowVideo(false); // reset to thumbnail before playing again
    setActiveIndex(index);
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="sm:h-[430px] mymob:h-[450px] tablet:h-[620px] desktop:h-[780px]  biglap:h-[780px]">
      {/* Heading */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 mt-10 z-0 sm:mb-10 desktop:mb-14 "
      >
        <p className="text-base font-inter text-[#6e54ae] text-center font-semibold">
          Testimonials
        </p>
        <p className="text-[28px] font-inter w-fit sm:w-[240px]  sm:h-[63px] font-[650] leading-8 sm:m-auto mymob:w-[335px] mymob:text-center myiphone:w-[385px] myiphone:px-3 tablet:w-[606px] tablet:h-[34px] tablet:mx-[61.5px] tablet:my-0 tablet:text-[26px] tablet:px-0 desktop:w-[639px] desktop:h-[36.61px] desktop:text-[30.5px] desktop:mx-[162.8px] xll:w-[690px] xll:h-[39.5px] xll:mx-auto text-[#1A1D1E]  drop-shadow-xs biglap:text-5xl biglap:w-[1000px]">
          Reviews from our Customer
        </p>
        <p className=" sm:mt-[35px] mymob:mt-[15px] tablet:mt-1 mr-0 mb-0 ml-0 text-[#667085] font-inter sm:text-base sm:w-[280px] sm:h-[19.5px] mymob:w-[335px] myiphone:w-[385px] tablet:w-[728px] desktop:w-[964px] xll:w-full xll:max-w-[2560px] text-center font-[400] biglap:text-4xl">
          Hear what our happy customers are saying about Enatega!
        </p>
      </motion.div>

      {/* Video or Thumbnail */}
      <div className="flex flex-col items-center space-y-6 mt-6 overflow-hidden ">
        <div className="relative w-full max-w-[1080px] flex justify-center px-4">
          <AnimatePresence mode="wait" initial={false}>
            {!showVideo ? (
              <motion.img
                key={`thumb-${activeIndex}`}
                src={videos[activeIndex].thumbnail}
                alt={`Thumbnail ${activeIndex}`}
                className="w-full max-w-[1080px] border max-h-[550px] rounded-xl"
                initial={{ x: direction * 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.iframe
                loading="lazy"
                key={`video-${activeIndex}`}
                src={videos[activeIndex].src}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full max-w-[1080px] sm:h-[159px] mymob:h-[190px] myiphone:h-[218px] tablet:h-[413px] desktop:h-[550px] rounded-xl "
                title={`Video ${activeIndex}`}
                initial={{ x: direction * 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.iframe>
            )}
          </AnimatePresence>

          {/* Play Button */}
          {!showVideo && (
            <>
              {activeIndex === 0 && (
                <button
                  onClick={handlePlayClick}
                  className="absolute cursor-pointer  top-1/2 left-1/2 sm:top-[47.5%] tablet:top-[49%] transform -translate-x-1/2 -translate-y-1/2 text-[#444442] px-4 py-2 rounded-full"
                >
                  .
                </button>
              )}
              {activeIndex === 1 && (
                <button
                  onClick={handlePlayClick}
                  className="absolute cursor-pointer top-1/2 left-1/2 sm:top-[43.5%] tablet:top-[45.5%] transform -translate-x-1/2 -translate-y-1/2 text-[#444442] px-4 py-2 rounded-full"
                >
                  .
                </button>
              )}
              {activeIndex === 2 && (
                <button
                  onClick={handlePlayClick}
                  className="absolute cursor-pointer  top-1/2 left-1/2 sm:top-[44.5%] tablet:top-[46%] transform -translate-x-1/2 -translate-y-1/2 text-[#444442] px-4 py-2 rounded-full"
                >
                  .
                </button>
              )}
            </>
          )}
        </div>

        {/* Dots */}
        <div className="flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-10 h-[6px] rounded-full ${
                activeIndex === index ? "bg-[#614de2]" : "bg-[#eeeeee]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;
