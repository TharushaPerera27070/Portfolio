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

export default function SkillsSection() {
  // References for animated elements
  const [headingRef, isHeadingVisible] = useIntersectionObserver({
      threshold: 0.1,
    }),
    [servicesRef, isServicesVisible] = useIntersectionObserver({
      threshold: 0.1,
    });

  const services = [
    {
      number: "01",
      title: "FRONTEND DEVELOPMENT",
      description:
        "Develop responsive and user-friendly interfaces using React.js, Flutter, and Tailwind CSS. Focus on delivering seamless user experiences across web and mobile platforms with modern design practices.",
    },
    {
      number: "02",
      title: "MOBILE APP DEV",
      description:
        "Create cross-platform mobile applications using Flutter and Dart, with strong attention to UI/UX, performance, and smooth integration with backend systems like Firebase.",
    },
    {
      number: "03",
      title: "BACKEND SYSTEMS",
      description:
        "Build and maintain backend services using Node.js, Express.js, and Firebase. Design scalable APIs and manage data flow with secure and efficient cloud-based databases.",
    },
    {
      number: "04",
      title: "UI/UX DESIGN",
      description:
        "Translate ideas into wireframes and prototypes using Figma, crafting clean, user-centric designs with a strong emphasis on accessibility, usability, and visual appeal.",
    },
    {
      number: "05",
      title: "PROBLEM SOLVING",
      description:
        "Apply strong analytical and critical thinking skills to solve technical challenges. Use algorithms, data structures, and debugging techniques to build efficient and reliable solutions.",
    },
    {
      number: "06",
      title: "TEAMWORK",
      description:
        "Work effectively in cross-functional teams during internship and project-based competitions. Collaborate using Git, conduct code reviews, and share knowledge to ensure project success.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212] text-white dark:bg-gray-100 dark:text-gray-900"
    >
      <div className="max-w-6xl mx-auto text-left">
        <div
          ref={headingRef}
          className={`mb-16 transition-all duration-1000 ${
            isHeadingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            I CREATE <span className=" text-gray-500">ROBUST SOLUTIONS</span>{" "}
            THROUGH <span className="text-gray-500">CLEAN CODE</span>, AND
            ALIGNMENT WITH{" "}
            <span className="text-gray-500">BUSINESS OBJECTIVES</span>
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-700">
            Modern applications demand efficiency and scalability. I craft
            solutions that deliver exceptional performance through...
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isServicesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="space-y-4"
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="text-orange-500 font-bold text-lg">
                {service.number}
              </div>
              <h3 className="text-xl sm:text-3xl font-bold">{service.title}</h3>
              <p className="text-gray-400 dark:text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
