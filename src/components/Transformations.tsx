import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import transformation1 from "@/assets/transformation-1.jpg";

const Transformations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-editorial bg-beige" ref={ref}>
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-caption text-muted-foreground mb-4">Student Work</p>
          <div className="divider-editorial mx-auto mb-8" />
          <h2 className="headline-large">
            Transformations that
            <br />
            <span className="italic">inspire</span>
          </h2>
        </motion.div>

        {/* Featured Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={transformation1}
              alt="Hair Transformation - Before and After"
              className="image-editorial"
            />
          </div>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 flex">
            <div className="flex-1 p-6 md:p-8 bg-background/90 backdrop-blur-sm">
              <p className="text-caption text-muted-foreground mb-1">Before</p>
              <p className="font-display text-lg md:text-xl">Natural Texture</p>
            </div>
            <div className="flex-1 p-6 md:p-8 bg-foreground text-primary-foreground">
              <p className="text-caption text-primary-foreground/60 mb-1">After</p>
              <p className="font-display text-lg md:text-xl">Precision Styling</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mt-16 md:mt-24"
        >
          <p className="font-display text-2xl md:text-3xl italic mb-6 text-balance">
            "Muse Academy didn't just teach me to cut hair—they taught me to see 
            the artistry in every strand."
          </p>
          <footer>
            <p className="text-caption text-muted-foreground">
              — Elena Voss, Class of 2024
            </p>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default Transformations;
