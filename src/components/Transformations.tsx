import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import transformation1 from "@/assets/transform.png";

const testimonials = [
  {
    quote:
      "The hands-on training completely changed my confidence. I started taking clients within weeks.",
    name: "Ananya Sharma",
    course: "Professional Make-Up"
  },
  {
    quote:
      "The faculty focuses on precision and discipline. This course shaped me as a professional stylist.",
    name: "Rohit Mehta",
    course: "Diploma in Hair Dressing"
  },
  {
    quote:
      "Every technique was explained practically. The environment feels like a real salon.",
    name: "Pooja Verma",
    course: "Advance Diploma in Hair & Beauty"
  },
  {
    quote:
      "Muse Academy helped me turn my passion into a full-time career.",
    name: "Sneha Iyer",
    course: "Beauty Therapy"
  }
];

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
          <p className="text-caption text-muted-foreground mb-4">
            Student Success
          </p>
          <div className="divider-editorial mx-auto mb-8" />
          <h2 className="headline-large">
            Real skills.
            <br />
            <span className="italic">Real careers.</span>
          </h2>
        </motion.div>

        {/* Featured Work */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={transformation1}
              alt="Student practical work at Muse Academy"
              className="image-editorial"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex">
            <div className="flex-1 p-6 md:p-8 bg-background/90 backdrop-blur-sm">
              <p className="text-caption text-muted-foreground mb-1">
                Training Phase
              </p>
              <p className="font-display text-lg md:text-xl">
                Guided Practice
              </p>
            </div>
            <div className="flex-1 p-6 md:p-8 bg-foreground text-primary-foreground">
              <p className="text-caption text-primary-foreground/60 mb-1">
                Outcome
              </p>
              <p className="font-display text-lg md:text-xl">
                Salon-Ready Skills
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-beige to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-beige to-transparent z-10" />

          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-12 w-max"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="max-w-md p-8 border border-border"
              >
                <p className="font-display text-xl italic mb-6 leading-relaxed">
                  “{item.quote}”
                </p>
                <div className="text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">{item.course}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
