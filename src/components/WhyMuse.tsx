import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Master Instructors",
    description:
      "Learn from award-winning stylists with decades of editorial and salon experience. Our faculty has shaped trends at Fashion Weeks worldwide.",
  },
  {
    number: "02",
    title: "Hands-On Curriculum",
    description:
      "Theory is nothing without practice. Our programs emphasize real-world application with live models from day one.",
  },
  {
    number: "03",
    title: "Industry Network",
    description:
      "Graduate into a community. Our alumni network connects you with salons, studios, and opportunities across the globe.",
  },
  {
    number: "04",
    title: "Editorial Focus",
    description:
      "We don't just teach haircuts—we teach artistry. Our approach bridges salon excellence with editorial innovation.",
  },
];

const WhyMuse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-editorial bg-foreground text-primary-foreground" ref={ref}>
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-caption text-primary-foreground/60 mb-4">
            Why Muse Academy
          </p>
          <div className="w-16 h-px bg-primary-foreground/30 mb-8" />
          <h2 className="headline-large max-w-2xl">
            An education that sets you
            <br />
            <span className="italic">apart</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="flex gap-6">
                <span className="font-display text-5xl md:text-6xl text-primary-foreground/10 shrink-0">
                  {reason.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-xl md:text-2xl mb-4 group-hover:italic transition-all">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMuse;
