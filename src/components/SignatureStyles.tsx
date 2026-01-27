import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style1 from "@/assets/style-1.jpg";
import style2 from "@/assets/style-2.jpg";
import style3 from "@/assets/style-3.jpg";

const styles = [
  {
    image: style1,
    title: "The Precision Bob",
    category: "Classic Technique",
    description: "Clean lines, architectural form",
  },
  {
    image: style2,
    title: "Textured Layers",
    category: "Modern Cutting",
    description: "Movement, dimension, character",
  },
  {
    image: style3,
    title: "Creative Updo",
    category: "Editorial Styling",
    description: "Sculptural, avant-garde design",
  },
];

const SignatureStyles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-editorial" ref={ref}>
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-caption text-muted-foreground mb-4">Signature Styles</p>
          <div className="divider-editorial mx-auto mb-8" />
          <h2 className="headline-large">
            Techniques you'll
            <br />
            <span className="italic">master</span>
          </h2>
        </motion.div>

        {/* Styles Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {styles.map((style, index) => (
            <motion.article
              key={style.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <motion.img
                  src={style.image}
                  alt={style.title}
                  className="image-editorial transition-transform duration-700 group-hover:scale-105"
                />
                {/* Number overlay */}
                <span className="absolute top-4 left-4 font-display text-6xl text-background/80 mix-blend-difference">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <p className="text-caption text-muted-foreground mb-2">
                {style.category}
              </p>
              <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:italic transition-all">
                {style.title}
              </h3>
              <p className="text-sm text-muted-foreground">{style.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureStyles;
