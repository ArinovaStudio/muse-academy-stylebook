import nailArt from "@/data/nail-art-extension-masterclass.json";
import beautyTherapy from "@/data/certificate-beauty-therapy.json";
import advacediploma from "@/data/advance-diploma-hair-beauty.json";
import diplomahair from "@/data/diploma-hair-dressing.json";
import proMakeup from "@/data/pro-makeup-course.json";

// Images
import style1 from "@/assets/generated_2.png";
import style2 from "@/assets/generated_3.png";
import style3 from "@/assets/generated_1.png";
import style4 from "@/assets/generated_5.png";
import style5 from "@/assets/generated_0.png";


export default [
  {
    ...nailArt,
    image: {
      src: style1,
      alt: "Master Class in Nail Art & Extension",
    },
  },
  {
    ...beautyTherapy,
    image: {
      src: style2,
      alt: "Certificate Course in Beauty Therapy",
    },
  },
  {
    ...advacediploma,
    image: {
      src: style3,
      alt: "Advance Diploma in Hair & Beauty",
    },
  },
  {
    ...diplomahair,
    image: {
      src: style4,
      alt: "Advance Diploma in Hair & Beauty",
    },
  },
  {
    ...proMakeup,
    image: {
      src: style5,
      alt: "Advance Diploma in Hair & Beauty",
    },
  },
];
