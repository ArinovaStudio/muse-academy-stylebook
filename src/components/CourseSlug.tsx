import { motion } from "framer-motion";
import { LucideArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface CourseSlugProps {
  data: {
    title: string;
    subtitle: string;
    duration: string;
    schedule: string;
    level: string;
    pricing: {
      originalPrice: number;
      offerPrice: number;
      currency: string;
    };
    description: string;
    whatYouWillLearn: string[];
    courseStructure: Record<string, string[]>;
    image: {
      src: string;
      alt: string;
    };
    cta: {
      primary: string;
      secondary?: string;
    };
  };
}

export default function CourseSlug({ data }: CourseSlugProps) {
  const handleBackClick = () => {
    window.history.back();
  };

useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}, []);
  return (
    <main className="max-w-7xl mx-auto px-6 py-20  text-black">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-14 items-center relative"
      >
        <div>
        <div className="absolute top-3 uppercase tracking-widest flex justify-center items-center gap-2 text-gray-600 cursor-pointer hover:text-black" onClick={handleBackClick}><LucideArrowLeft size={14}/> Back</div>
          <p className="uppercase tracking-widest text-sm text-neutral-500">
            {data.level}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mt-3">
            {data.title}
          </h1>

          <p className="text-lg text-neutral-600 mt-4">
            {data.subtitle}
          </p>

          <div className="flex gap-6 mt-8 text-sm">
            <span><strong>Duration:</strong> {data.duration}</span>
            <span><strong>Schedule:</strong> {data.schedule}</span>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-2xl font-semibold">
              ₹{data.pricing.offerPrice}
            </span>
            <span className="line-through text-neutral-500">
              ₹{data.pricing.originalPrice}
            </span>
          </div>

          <div className="mt-10 flex gap-4">
            <Link to={`https://wa.me/+918388938664?text=Hello+I+want+to+learn+${data.title}+Please+Tell+me+more+!`} className="px-6 py-3 bg-black text-white border hover:text-black border-transparent hover:bg-transparent transition-all hover:border-black text-sm hover:">
              {data.cta.primary}
            </Link>
            {/* {data.cta.secondary && (
              <button className="px-6 py-3 border border-black text-sm">
                {data.cta.secondary}
              </button>
            )} */}
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-[4/5] overflow-hidden"
        >
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <section className="mt-24 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          About the Course
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          {data.description}
        </p>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <h2 className="text-2xl font-semibold mb-8">
          What You Will Learn
        </h2>

        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-sm">
          {data.whatYouWillLearn.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* CURRICULUM */}
      <section className="mt-28">
        <h2 className="text-2xl font-semibold mb-10">
          Detailed Curriculum
        </h2>

        <div className="space-y-12">
          {Object.entries(data.courseStructure).map(([section, topics]) => (
            <div key={section}>
              <h3 className="text-lg font-medium mb-4">
                {section.replace(/([A-Z])/g, " $1")}
              </h3>

              <ul className="grid md:grid-cols-2 gap-x-10 gap-y-2 text-sm text-neutral-700">
                {topics.map((topic, idx) => (
                  <li key={idx}>— {topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
