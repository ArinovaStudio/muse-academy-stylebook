import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ConsultationPopup from "./ConsultationPopup";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"apply" | "consultation">("apply");

  const openPopup = (type: "apply" | "consultation") => {
    setPopupType(type);
    setPopupOpen(true);
  };

  return (
    <>
      <section id="apply" className="section-editorial" ref={ref}>
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-caption text-muted-foreground mb-4">
                Begin Your Journey
              </p>
              <div className="divider-editorial mx-auto mb-8" />
              <h2 className="headline-display mb-8">
                Ready to become
                <br />
                <span className="italic">exceptional?</span>
              </h2>
              <p className="text-editorial text-muted-foreground max-w-xl mx-auto mb-12">
                Applications are now open for our upcoming cohort. Take the first 
                step toward a career defined by creativity, precision, and artistry.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <button 
                onClick={() => openPopup("apply")} 
                className="btn-editorial-filled"
              >
                Apply Now
              </button>
              <button 
                onClick={() => openPopup("consultation")} 
                className="btn-editorial"
              >
                Schedule Consultation
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-12 border-t border-border"
            >
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-caption text-muted-foreground mb-2">Location</p>
                  <p className="font-display text-lg">
                    123 Fashion District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-2">Email</p>
                  <a
                    href="mailto:admissions@museacademy.com"
                    className="font-display text-lg link-editorial"
                  >
                    admissions@museacademy.com
                  </a>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-2">Phone</p>
                  <a
                    href="tel:+12125551234"
                    className="font-display text-lg link-editorial"
                  >
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Popup */}
      <ConsultationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        type={popupType}
      />
    </>
  );
};

export default CallToAction;
