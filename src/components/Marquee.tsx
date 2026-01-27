import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "Precision",
    "•",
    "Artistry",
    "•",
    "Innovation",
    "•",
    "Excellence",
    "•",
    "Creativity",
    "•",
    "Mastery",
    "•",
  ];

  return (
    <section className="py-8 md:py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {words.map((word, index) => (
              <span
                key={`${i}-${index}`}
                className={`font-display text-2xl md:text-4xl px-4 md:px-8 ${
                  word === "•" ? "text-muted-foreground/30" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
