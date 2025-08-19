export const fadeIn = (direction, delay, zoom = "in") => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: zoom === "in" ? 0.8 : 1.2, // zoom-in starts small, zoom-out starts big
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      scale: 1, // normal size after animation
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      scale: zoom === "in" ? 1.2 : 0.8, // opposite scale for leaving
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
};
