import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type FadeImageSliderProps = {
  images: string[];
  interval?: number; // milliseconds
};

export const FadeImageSlider = ({
  images,
  interval = 5000,
}: FadeImageSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover image-editorial"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
};
