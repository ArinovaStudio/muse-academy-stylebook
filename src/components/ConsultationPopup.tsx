import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import consultationImage from "@/assets/consultation-image.jpg";
import portfolioBefore1 from "@/assets/portfolio-before-1.jpg";
import portfolioAfter1 from "@/assets/portfolio-after-1.jpg";
import portfolioBefore2 from "@/assets/portfolio-before-2.jpg";
import portfolioAfter2 from "@/assets/portfolio-after-2.jpg";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: "apply" | "consultation";
}

const portfolioPairs = [
  {
    before: portfolioBefore1,
    after: portfolioAfter1,
    title: "Classic Bob Transformation",
  },
  {
    before: portfolioBefore2,
    after: portfolioAfter2,
    title: "Modern Layered Cut",
  },
];

const ConsultationPopup = ({ isOpen, onClose, type }: ConsultationPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    program: "",
    experience: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: undefined,
        program: "",
        experience: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:w-[90vw] md:max-w-6xl md:max-h-[90vh] overflow-hidden bg-background"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:bg-foreground hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-full overflow-y-auto">
              <div className="grid md:grid-cols-2 min-h-full">
                {/* Left Side - Image & Portfolio */}
                <div className="hidden md:block bg-foreground relative">
                  {/* Main Image */}
                  <div className="aspect-[3/4] relative">
                    <img
                      src={consultationImage}
                      alt="Muse Academy Consultation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
                  </div>

                  {/* Portfolio Pairs */}
                  <div className="p-8">
                    <p className="text-caption text-primary-foreground/60 mb-4">
                      Student Transformations
                    </p>
                    <div className="space-y-6">
                      {portfolioPairs.map((pair, index) => (
                        <div key={index} className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="relative group">
                              <img
                                src={pair.before}
                                alt={`${pair.title} - Before`}
                                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                              <span className="absolute bottom-2 left-2 text-caption text-primary-foreground/80 bg-foreground/60 px-2 py-1">
                                Before
                              </span>
                            </div>
                            <div className="relative group">
                              <img
                                src={pair.after}
                                alt={`${pair.title} - After`}
                                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                              <span className="absolute bottom-2 left-2 text-caption text-primary-foreground/80 bg-foreground/60 px-2 py-1">
                                After
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-primary-foreground/60">
                            {pair.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 mx-auto mb-6 border border-foreground flex items-center justify-center">
                          <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <motion.path
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          </motion.svg>
                        </div>
                        <h3 className="font-display text-2xl mb-2">Thank You</h3>
                        <p className="text-muted-foreground">
                          We'll be in touch within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p className="text-caption text-muted-foreground mb-4">
                          {type === "apply" ? "Apply Now" : "Schedule Consultation"}
                        </p>
                        <div className="divider-editorial mb-6" />
                        <h2 className="headline-medium mb-2">
                          {type === "apply" ? (
                            <>
                              Begin your
                              <br />
                              <span className="italic">journey</span>
                            </>
                          ) : (
                            <>
                              Let's
                              <br />
                              <span className="italic">connect</span>
                            </>
                          )}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-8">
                          {type === "apply"
                            ? "Complete the form below and our admissions team will reach out to discuss your goals."
                            : "Book a one-on-one consultation to learn more about our programs."}
                        </p>

                        {/* Mobile Portfolio */}
                        <div className="md:hidden mb-8 -mx-8 px-8 py-6 bg-foreground">
                          <p className="text-caption text-primary-foreground/60 mb-4">
                            Student Work
                          </p>
                          <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2">
                            {portfolioPairs.map((pair, index) => (
                              <div key={index} className="flex gap-2 shrink-0">
                                <img
                                  src={pair.before}
                                  alt={`${pair.title} - Before`}
                                  className="w-24 h-32 object-cover"
                                />
                                <img
                                  src={pair.after}
                                  alt={`${pair.title} - After`}
                                  className="w-24 h-32 object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          {/* Name */}
                          <div>
                            <label
                              htmlFor="name"
                              className="text-caption text-muted-foreground mb-2 block"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              maxLength={100}
                              className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body"
                              placeholder="Enter your full name"
                            />
                          </div>

                          {/* Email & Phone */}
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label
                                htmlFor="email"
                                className="text-caption text-muted-foreground mb-2 block"
                              >
                                Email *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                maxLength={255}
                                className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body"
                                placeholder="your@email.com"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                className="text-caption text-muted-foreground mb-2 block"
                              >
                                Phone *
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                maxLength={20}
                                className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>

                          {/* Date & Program */}
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                              <label className="text-caption text-muted-foreground mb-2 block">
                                Preferred Date *
                              </label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button
                                    type="button"
                                    className={cn(
                                      "w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body text-left flex items-center justify-between",
                                      !formData.date && "text-muted-foreground"
                                    )}
                                  >
                                    {formData.date ? (
                                      format(formData.date, "PPP")
                                    ) : (
                                      <span>Select a date</span>
                                    )}
                                    <CalendarIcon className="w-4 h-4 opacity-50" />
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={(date) =>
                                      setFormData((prev) => ({ ...prev, date }))
                                    }
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div>
                              <label
                                htmlFor="program"
                                className="text-caption text-muted-foreground mb-2 block"
                              >
                                Program of Interest
                              </label>
                              <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleInputChange}
                                className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body appearance-none cursor-pointer"
                              >
                                <option value="">Select a program</option>
                                <option value="precision-cutting">
                                  Precision Cutting
                                </option>
                                <option value="creative-styling">
                                  Creative Styling
                                </option>
                                <option value="color-mastery">Color Mastery</option>
                                <option value="full-program">
                                  Full Academy Program
                                </option>
                              </select>
                            </div>
                          </div>

                          {/* Experience Level */}
                          <div>
                            <label
                              htmlFor="experience"
                              className="text-caption text-muted-foreground mb-2 block"
                            >
                              Experience Level
                            </label>
                            <select
                              id="experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body appearance-none cursor-pointer"
                            >
                              <option value="">Select your experience</option>
                              <option value="beginner">Complete Beginner</option>
                              <option value="some-training">
                                Some Training/Education
                              </option>
                              <option value="working-stylist">
                                Working Stylist (1-3 years)
                              </option>
                              <option value="experienced">
                                Experienced Professional (3+ years)
                              </option>
                            </select>
                          </div>

                          {/* Message */}
                          <div>
                            <label
                              htmlFor="message"
                              className="text-caption text-muted-foreground mb-2 block"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              maxLength={1000}
                              rows={3}
                              className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors font-body resize-none"
                              placeholder="Tell us about your goals and aspirations..."
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-editorial-filled w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <motion.span
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: "linear",
                                  }}
                                  className="w-4 h-4 border border-current border-t-transparent rounded-full inline-block"
                                />
                                Submitting...
                              </span>
                            ) : type === "apply" ? (
                              "Submit Application"
                            ) : (
                              "Book Consultation"
                            )}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
