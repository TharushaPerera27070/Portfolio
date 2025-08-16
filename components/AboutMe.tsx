"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Image from "next/image";
import ClientLogosSection from "./ClientLogosSection";

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

export default function AboutMe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // References for animated elements
  const [heroTextRef, isHeroTextVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [heroImageRef, isHeroImageVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [clientLogosRef, isClientLogosVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [journeyTitleRef, isJourneyTitleVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [experience1Ref, isExperience1Visible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [experience2Ref, isExperience2Visible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-15 pb-16 px-4 sm:px-6 lg:px-8">
        <div id="about" className="pt-5 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div
              ref={heroTextRef}
              className={`space-y-8 transition-all duration-1000 ${
                isHeroTextVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                  THARUSHA <span className="text-gray-500">PERERA</span>
                  <span className="text-red-500">.</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Computer Science Undergraduate
                </p>
                <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                Blending code and creativity, I transform complex ideas into
                digital solutions people enjoy using. From front-end design to
                back-end logic, I craft applications that are both functional
                and meaningful. I specialize in full-stack development and UI/UX
                design, turning complex challenges into intuitive, scalable, and
                user-focused digital solutions that deliver real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                In addition to my technical expertise, I've developed strong
                leadership, time management, and problem-solving skills through
                hands-on project work and my internship at ION Groups Pvt Ltd.
                and actively participating in competitive development events,
                has strengthened my ability to manage responsibilities,
                collaborate across teams, and deliver solutions under pressure.
              </p>
            </div>

            {/* Right Column - Large Image */}
            <div
              ref={heroImageRef}
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isHeroImageVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="w-full max-w-md h-[640px] bg-gray-200 dark:bg-gray-700 rounded-3xl shadow-2xl border-2 border-black dark:border-white">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                  <Image
                    src="/WhatsApp Image 2024-11-18 at 10.06.38_8de68bc9.jpg"
                    alt="Picture"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={clientLogosRef}
        className={`transition-all duration-1000 ${
          isClientLogosVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ClientLogosSection />
      </div>

      {/* Experience Section */}
      <section className="pb-20 pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={journeyTitleRef}
            className={`transition-all duration-1000 ${
              isJourneyTitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              MY JOURNEY <span className="text-gray-500">SO FAR</span>
              <span className="text-orange-500">.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-20">
              A look into the roles that have shaped my journey as a
              undergraduate and developer.
            </p>
          </div>

          <div className="relative pl-16 space-y-12">
            {/* Vertical orange line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-orange-500 rounded-full"></div>

            {/* Experience Item 1 */}
            <div
              ref={experience1Ref}
              className={`relative flex items-center transition-all duration-1000 ${
                isExperience1Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Card */}
              <div className="flex-1 bg-[#121212] dark:bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white dark:text-[#121212]">
                    Software Engineer Intern
                  </h3>
                  <span className="text-orange-500 font-medium text-sm">
                    DEC 2024 - MAY 2025
                  </span>
                </div>
                <p className="text-lg text-gray-400 dark:text-gray-700 mb-2">
                  I O N Pvt Ltd.
                </p>
                <p className="text-gray-400 dark:text-gray-700 leading-relaxed text-sm">
                  Actively involved in the full software development life cycle
                  (SDLC), developing clean, testable code and integrating
                  components into functional systems. Responsibilities include
                  creating flowcharts, writing technical documentation, and
                  troubleshooting existing applications to ensure smooth
                  operation. Key tasks involve designing and developing advanced
                  mobile applications for both iOS and Android, collaborating
                  with cross-functional teams to implement features, and
                  maintaining high software quality through thorough testing and
                  validation processes.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div
              ref={experience2Ref}
              className={`relative flex items-center transition-all duration-1000 delay-300 ${
                isExperience2Visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Card */}
              <div className="flex-1 bg-[#121212] dark:bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white dark:text-[#121212]">
                    IEEE Member
                  </h3>
                  <span className="text-orange-500 font-medium text-sm">
                    2022 - Present
                  </span>
                </div>
                <p className="text-lg text-gray-400 dark:text-gray-700 mb-2">
                  IEEE Student Branch, NSBM Green University
                </p>
                <p className="text-gray-400 dark:text-gray-700 leading-relaxed text-sm">
                  As a member of the IEEE Student Branch, I actively participate
                  in various technical and non-technical events, workshops, and
                  seminars. My involvement includes organizing coding
                  competitions, hackathons, and tech talks, fostering a
                  collaborative environment for students to enhance their skills
                  and knowledge in engineering and technology. This role has
                  allowed me to network with industry professionals and gain
                  insights into the latest trends in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
