import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import academyImage from "@/assets/image_11.jpeg";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="section-editorial bg-cream" ref={ref}>
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-caption text-muted-foreground mb-4">Our Philosophy</p>
          <div className="divider-editorial" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid-asymmetric items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="headline-large mb-8 text-balance">
              Where precision meets
              <br />
              <span className="italic">artistic vision</span>
            </h2>
            <p className="text-editorial text-muted-foreground mb-6">
              At Muse Academy, we believe hairstyling is more than a profession—it's 
              an art form. Our curriculum blends classical technique with contemporary 
              innovation, preparing you for a career at the highest level of the industry.
            </p>
            <p className="text-editorial text-muted-foreground mb-8">
              Through hands-on training in our state-of-the-art facility, you'll develop 
              the technical precision and creative confidence to transform clients and 
              define trends.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { number: "500+", label: "Graduates" },
                { number: "15", label: "Years" },
                { number: "98%", label: "Placement" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <span className="font-display text-3xl md:text-4xl block mb-1">
                    {stat.number}
                  </span>
                  <span className="text-caption text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={academyImage}
              alt="Muse Academy Training Session"
              className="image-editorial"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
