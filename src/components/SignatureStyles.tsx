import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style1 from "@/assets/generated_2.png";
import style2 from "@/assets/generated_3.png";
import style3 from "@/assets/generated_1.png";
import style4 from "@/assets/generated_5.png";
import style5 from "@/assets/generated_0.png";
import { Link } from "react-router-dom";


const styles = [
  {
    image: style1,
    title: "Master class in nail art & extension",
    category: "7 Days - Daily",
    description: "14,000/-",
    actualPrice: "7,000 ",
    slug: "master-class-nail-art-extension",
  },
  {
    image: style2,
    title: "Professional course in make-up",
    category: "20 Days - Daily",
    description: "25,000/-",
    actualPrice: "15,000 ",
    slug: "professional-course-in-make-up",
  },
  {
    image: style3,
    title: "Diploma in hair dressing",
    category: "3 Months - 3 Days a week",
    description: "25,000/-",
    actualPrice: "18,000 ",
    slug: "diploma-in-hair-dressing",
  },
  {
    image: style4,
    title: "Advance Diploma in hair & Beauty",
    category: "6 Months - 3 Days a week",
    description: "50,000/-",
    actualPrice: "30,000 ",
    slug: "advance-diploma-hair-beauty",
  },
  {
    image: style5,
    title: "Certificate course in beauty therapy",
    category: "6 Months - 3 Days a week",
    description: "20,000/-",
    actualPrice: "14,000 ",
    slug: "certificate-course-beauty-therapy",
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
          <p className="text-caption text-muted-foreground mb-4">
            WHAT WE CAN HELP YOU WITH
          </p>
          <div className="divider-editorial mx-auto mb-8" />
          <h2 className="headline-large">
            Techniques you can
            <br />
            <span className="italic text-7xl">master</span>
          </h2>
        </motion.div>

        {/* Styles Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
              <Link to={`/course/${style.slug}`}>
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <motion.img
                  src={style.image}
                  alt={style.title}
                  className="image-editorial saturate-0 hover:saturate-100 transition-transform duration-700 group-hover:scale-105"
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
              <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:italic transition-all capitalize">
                {style.title}
              </h3>
              <p className="text-base text-muted-foreground">
                Rs. {style.actualPrice}{" "}
                <span className="text-xs line-through">
                  {style.description}
                </span>
              </p>
            </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureStyles;
