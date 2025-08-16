"use client";
import { Mail, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CircularText from "@/components/CircularText";
import { useRef, useState, useEffect, RefObject } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Custom hook to handle intersection observer with proper typing
function useIntersectionObserver(
  options = {}
): [RefObject<HTMLDivElement>, boolean] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
}

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // References for animated elements
  const [headingRef, isHeadingVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [socialRef, isSocialVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [formRef, isFormVisible] = useIntersectionObserver({ threshold: 0.1 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ndnjo6o",
        "template_sg6n9ky",
        form.current,
        "4F38XAEZez4Bvogw5"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#FFFFFF",
          },
          icon: "✅",
        });
        form.current?.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#EF4444",
            color: "#FFFFFF",
          },
          icon: "❌",
        });
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212] ">
      {/* Toast container */}
      <Toaster />

      <div
        id="contact"
        className="max-w-6xl mx-auto border-t border-gray-400 dark:border-gray-700"
      >
        <div
          ref={headingRef}
          className={`transition-all duration-1000 ${
            isHeadingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="pt-20 text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            LET'S WORK <span className=" text-gray-500">TOGETHER</span>
            <span className="text-orange-500">!</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 pb-6 sm:pb-10">
            Response rate increases if you call me Batman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Social links */}
          <div
            ref={socialRef}
            className={`transition-all duration-1000 delay-200 ${
              isSocialVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Your existing social buttons remain unchanged */}
              <Link
                href="mailto:tharushapererawork@gmail.com"
                target="_blank"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="rounded-full pl-3 sm:pl-4 pr-1 py-4 sm:py-5 text-sm sm:text-base font-medium border-gray-300 dark:border-gray-600 border-2 
                  group relative overflow-hidden bg-white dark:bg-[#121212] transition-colors
                  hover:border-[#121212] dark:hover:border-white w-full flex justify-between items-center"
                >
                  {/* Button content remains the same */}
                  <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                  <span className="text-[#121212] dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-left truncate max-w-[calc(100%-3rem)]">
                    tharushapererawork@gmail.com
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2 sm:ml-3 relative z-10 flex-shrink-0">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#121212] dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </Button>
              </Link>

              {/* Social Media Buttons - Row 1 */}
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <Link
                  href="https://www.linkedin.com/in/tharusha-perera-b48ba5252"
                  target="_blank"
                  className="w-1/2"
                >
                  <Button
                    variant="outline"
                    className="rounded-full pl-3 sm:pl-4 pr-1 py-4 sm:py-5 text-sm sm:text-base font-medium border-gray-300 dark:border-gray-600 border-2 
      group relative 
      overflow-hidden
      bg-white 
      dark:bg-[#121212]
      transition-colors
      hover:border-[#121212] dark:hover:border-white
      w-full flex justify-between items-center"
                  >
                    <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                    <span className="text-[#121212] dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-left">
                      LinkedIn
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2 sm:ml-3 relative z-10 flex-shrink-0">
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-[#121212] dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </Button>
                </Link>

                <Link
                  href="https://github.com/TharushaPerera27070"
                  target="_blank"
                  className="w-1/2"
                >
                  <Button
                    variant="outline"
                    className="rounded-full pl-3 sm:pl-4 pr-1 py-4 sm:py-5 text-sm sm:text-base font-medium border-gray-300 dark:border-gray-600 border-2 
      group relative 
      overflow-hidden
      bg-white 
      dark:bg-[#121212]
      transition-colors
      hover:border-[#121212] dark:hover:border-white
      w-full flex justify-between items-center"
                  >
                    <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                    <span className="text-[#121212] dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-left">
                      GitHub
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2 sm:ml-3 relative z-10 flex-shrink-0">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-[#121212] dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </Button>
                </Link>
              </div>

              {/* Social Media Buttons - Row 2 */}
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <Link
                  href="https://www.instagram.com/_th_r_sh_/"
                  target="_blank"
                  className="w-1/2"
                >
                  <Button
                    variant="outline"
                    className="rounded-full pl-3 sm:pl-4 pr-1 py-4 sm:py-5 text-sm sm:text-base font-medium border-gray-300 dark:border-gray-600 border-2 
      group relative 
      overflow-hidden
      bg-white 
      dark:bg-[#121212]
      transition-colors
      hover:border-[#121212] dark:hover:border-white
      w-full flex justify-between items-center"
                  >
                    <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                    <span className="text-[#121212] dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-left">
                      Instagram
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2 sm:ml-3 relative z-10 flex-shrink-0">
                      <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-[#121212] dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </Button>
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php"
                  target="_blank"
                  className="w-1/2"
                >
                  <Button
                    variant="outline"
                    className="rounded-full pl-3 sm:pl-4 pr-1 py-4 sm:py-5 text-sm sm:text-base font-medium border-gray-300 dark:border-gray-600 border-2 
      group relative 
      overflow-hidden
      bg-white 
      dark:bg-[#121212]
      transition-colors
      hover:border-[#121212] dark:hover:border-white
      w-full flex justify-between items-center"
                  >
                    <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                    <span className="text-[#121212] dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-left">
                      Facebook
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2 sm:ml-3 relative z-10 flex-shrink-0">
                      <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-[#121212] dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </Button>
                </Link>
              </div>
              <div className="mt-6 sm:mt-10 justify-center flex items-center">
                <CircularText
                  text="COFFEE*CODE*CREATE*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
            </div>
          </div>

          {/* Contact Form - Updated with EmailJS */}
          <div
            ref={formRef}
            className={`space-y-4 sm:space-y-6 mt-4 md:mt-0 transition-all duration-1000 delay-400 ${
              isFormVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name*"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name*"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com*"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="relative w-full">
                <select
                  name="subject"
                  className="w-full appearance-none px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                >
                  <option value="" disabled selected>
                    What is this about?
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Discussion">Project Discussion</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Message*"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#121212] dark:bg-white text-white dark:text-[#121212] font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
