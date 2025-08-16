"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-0 lg:px-0">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Full-width Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight lg:text-left animate-fade-in-up">
          CRAFTING <span className=" text-gray-500">INTUITIVE</span> AND{" "}
          <span className=" text-gray-500">VISUALLY</span> COMPELLING PRODUCTS
          <span className="text-orange-500">.</span>
        </h1>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 animate-fade-in-up">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I'm a dedicated Computer Science undergraduate and Software
              Engineer Intern with a strong focus on full-stack development and
              UI/UX design. With hands-on experience in building both mobile and
              web applications, I thrive in collaborative environments bringing
              together technical skills and creative thinking to develop
              user-centric, reliable solutions that make a real-world impact.
            </p>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="rounded-full pl-4 pr-1 py-5 text-base font-medium border-gray-300 border-2 
      dark:border-gray-600 
      group relative 
      overflow-hidden
      dark:bg-[#121212] 
      transition-colors
      hover:border-[#121212] dark:hover:border-white"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                <span className="text-gray-900 dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                  About Me
                </span>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#121212] dark:text-white transform transition-transform duration-300 ease-out group-hover:rotate-45"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Button>

              <Link
                href="/Tharusha Perera -Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full pl-4 pr-1 py-5 text-base font-medium border-gray-300 border-2 
      dark:border-gray-600 
      group relative 
      dark:bg-[#121212] 
      overflow-hidden
      transition-colors
      hover:border-[#121212] dark:hover:border-white"
                >
                  <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                  <span className="text-gray-900 dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Download Resume
                  </span>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#121212] dark:text-white transform transition-transform duration-300 ease-out group-hover:translate-y-1"
                    >
                      <path
                        d="M12 4v12m0 0l4-4m-4 4l-4-4m11 4v4H5v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="relative flex-shrink-0 self-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-200 dark:bg-gray-700 rounded-3xl shadow-2xl border-2 border-black dark:border-white">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                  <Image
                    src="/WhatsApp Image 2024-11-18 at 10.06.38_8de68bc9.jpg"
                    alt="Picture"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-orange-500 text-[#121212] dark:text-white px-4 py-1.5 rounded-full text-sm font-medium transform rotate-12 shadow-lg animate-bounce-subtle">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
