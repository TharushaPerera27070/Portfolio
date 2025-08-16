"use client";

import { useState, useRef, useEffect, RefObject } from "react";

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

export default function FAQSection() {
  // References for animated elements
  const [introRef, isIntroVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [faqListRef, isFaqListVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const faqs = [
    {
      id: 1,
      question: "WHAT IS YOUR ROLE?",
      answer:
        "I'm a Computer Science undergraduate and Software Engineering Intern with a focus on full-stack development. I build responsive mobile and web applications using technologies like Flutter, React, Node.js, and Firebase. My role involves collaborating with teams to design user-centric features and ensure smooth integration across platforms.",
    },
    {
      id: 2,
      question: "WHICH PROGRAMMING LANGUAGES DO YOU USE?",
      answer:
        "I work primarily with Dart and JavaScript. For frontend development, I use Flutter and React. On the backend, I develop with Node.js and Express.js, and I manage cloud-based databases using Firebase. I'm also learning Python for machine learning and automation tasks.",
    },
    {
      id: 3,
      question: "WHICH DEVELOPMENT TOOLS DO YOU USE?",
      answer:
        "My development toolkit includes Visual Studio Code and Android Studio. I use Git and GitHub for version control, Figma for UI/UX design, and Postman for API testing. Firebase is my go-to for backend and hosting, and I use Jupyter Notebooks and Google Document AI for machine learning workflows.",
    },
    {
      id: 4,
      question: "WHAT IS YOUR EDUCATIONAL BACKGROUND?",
      answer:
        "I'm currently pursuing a BSc (Hons) in Computer Science at the University of Plymouth, delivered through NSBM Green University. Prior to university, I completed my G.C.E. Advanced Level studies in the Physical Science stream at Dharmaraja College, Kandy. My academic background has provided me with a strong foundation in both theoretical and practical aspects of computing.",
    },

    {
      id: 5,
      question: "HOW DO YOU BALANCE INNOVATION AND CONSTRAINTS?",
      answer:
        "I balance innovation and constraints by understanding project goals, user needs, and resource limitations. I prioritize practical, scalable features that add value and suggest creative yet feasible solutions that align with technical boundaries and delivery timelines.",
    },
  ];

  const toggleFAQ = (id: number) => {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    const isOpen = content?.style.display === "block";

    // Close all other FAQ items
    document.querySelectorAll('[id^="faq-content-"]').forEach((el) => {
      if (el.id !== `faq-content-${id}`) {
        (el as HTMLElement).style.display = "none";
      }
    });
    document.querySelectorAll('[id^="faq-icon-"]').forEach((el) => {
      if (el.id !== `faq-icon-${id}`) {
        (el as HTMLElement).style.transform = "rotate(0deg)";
      }
    });

    // Toggle current item
    if (content && icon) {
      if (isOpen) {
        content.style.display = "none";
        icon.style.transform = "rotate(0deg)";
      } else {
        content.style.display = "block";
        icon.style.transform = "rotate(45deg)";
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Intro */}
          <div
            ref={introRef}
            className={`space-y-6 transition-all duration-1000 ${
              isIntroVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white leading-tight">
              GOT <span className="text-gray-500">QUESTIONS?</span>
              <br />
              I'VE GOT ANSWERS<span className="text-orange-500">.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Got questions or need advice? Get clear insights to move forward.
            </p>
          </div>

          {/* Right Side - FAQ */}
          <div
            ref={faqListRef}
            className={`space-y-1 transition-all duration-1000 delay-300 ${
              isFaqListVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-gray-200 dark:border-gray-700"
                style={{
                  transitionDelay: `${(index + 2) * 150}ms`,
                  opacity: isFaqListVisible ? 1 : 0,
                  transform: isFaqListVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-white dark:hover:bg-[#121212] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      id={`faq-icon-${faq.id}`}
                      className="w-6 h-6 text-orange-500 transition-transform duration-500 ease-in-out"
                      style={{ transform: "rotate(0deg)" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={`faq-content-${faq.id}`}
                  style={{ display: "none" }}
                  className="pb-6 pr-10"
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
