"use client";

import { useState, useRef, useEffect, RefObject } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Figma, Globe, Lock, LockOpen, X } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  image: string;
  description: string;
  longDescription: string;
  techStack: { name: string; icon: string }[];
  githubLink: string;
  figmaLink: string;
  liveLink: string;
  isPublic: boolean;
};

const TechBadge = ({ tech, icon }: { tech: string; icon: string }) => {
  const iconUrl = `https://cdn.simpleicons.org/${icon}`;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
      <Image src={iconUrl} alt={tech} width={16} height={16} />
      <span className="text-xs font-medium">{tech}</span>
    </div>
  );
};

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

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // References for animated elements
  const [headingRef, isHeadingVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [projectsRef, isProjectsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const projects = [
    {
      title: "MediLink",
      image: "/medilink2.png",
      description: "Health Care Management System",
      longDescription:
        "MediLink is a smart healthcare management system built to modernize Sri Lanka's hospitals. MediLink connects patients, doctors, and hospitals through a single digital platform that offers centralized medical records, appointment scheduling, AI-based report analysis, and secure communication, all in one place.",
      techStack: [
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React.js", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express.js", icon: "express" },
        { name: "Google Cloud", icon: "googlecloud" },
        { name: "Python", icon: "python" },
        { name: "FastAPI", icon: "fastapi" },
      ],
      githubLink: "https://github.com/TharushaPerera27070/MediLink.git",
      figmaLink: "",
      liveLink: "",
      isPublic: false,
    },

    {
      title: "Focus Fitness",
      image: "/fitness.png",
      description: "Fitness Center Management System",
      longDescription:
        "Focus Fitness is a comprehensive fitness center management system designed to streamline operations and enhance member experience. It features membership management, class scheduling, attendance tracking, and performance analytics, all in one platform.",
      techStack: [
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
      ],
      githubLink:
        "https://github.com/TharushaPerera27070/FocusFitness-Gym_Management_System.git",
      figmaLink: "",
      liveLink: "",
      isPublic: false,
    },
    {
      title: "RescueMed",
      image: "/rescuemed.png",
      description: "Emergency Ambulance & Hospital Communication System",
      longDescription:
        "RescueMed is a cutting-edge, life-saving emergency communication platform that bridges the gap between ambulances and hospitals across Sri Lanka. By leveraging real-time tracking, the system ensures ambulances can provide precise location updates, enabling hospitals to prepare for incoming emergencies more efficiently. ",
      techStack: [
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React.js", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express.js", icon: "express" },
        { name: "Python", icon: "python" },
        { name: "FastAPI", icon: "fastapi" },
      ],
      githubLink:
        "https://github.com/WAVELOOP-Development/RescueMed-Release.git",
      figmaLink: "",
      liveLink: "",
      isPublic: true,
    },
    {
      title: "Grocify",
      image: "/grocify.png",
      description: "Grocery shopping assistant with voice command.",
      longDescription:
        "Grocify is a smart grocery shopping assistant that helps users manage their shopping lists using voice commands. It features real-time inventory tracking, recipe suggestions, and personalized recommendations based on user preferences.",
      techStack: [
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
      ],
      githubLink: "https://github.com/TharushaPerera27070/Grocify.git",
      figmaLink: "",
      liveLink: "",
      isPublic: true,
    },
    {
      title: "TechLink",
      image: "/techlink.png",
      description: "A platform that connecting IT professionals",
      longDescription:
        "A comprehensive platform connecting IT professionals, students, and enthusiasts in one integrated ecosystem. IT Networking Hub addresses the fragmentation in the IT industry by combining networking, education, and product procurement in a single platform. Unlike current solutions that provide these services separately, our application creates a seamless experience tailored specifically for IT professionals.",
      techStack: [
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "Firebase", icon: "firebase" },
      ],
      githubLink:
        "https://github.com/TharushaPerera27070/TechLink-All_in_one_integrated_ecosystem_for_IT_industry.git",
      figmaLink: "",
      liveLink: "",
      isPublic: false,
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section className="py-20">
      <div
        id="projects"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 border-t border-gray-400 dark:border-gray-700 overflow-hidden pt-12"
      >
        <div
          ref={headingRef}
          className={`mb-16 transition-all duration-1000 ${
            isHeadingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            CREATING PRODUCTS PEOPLE <span className="text-gray-500">LOVE</span>
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on, and there's more on
            the way.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Cards */}
      <div
        ref={projectsRef}
        className={`max-w-full mx-auto scroll-container relative overflow-hidden transition-all duration-1000 ${
          isProjectsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <style jsx>{`
          @keyframes scroll-horizontal {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-horizontal {
            animation: scroll-horizontal 40s linear infinite;
          }

          .scroll-container:hover .animate-scroll-horizontal {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex w-max animate-scroll-horizontal space-x-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-8">
              {projects.map((project, index) => (
                <div
                  key={`${i}-${index}`}
                  className="group cursor-pointer w-80 relative"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg transition-shadow duration-300 border border-black dark:border-white h-[400px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <h3 className="font-semibold text-3xl text-white text-center">
                          {project.title}
                        </h3>
                        <p className="text-base text-white text-center">
                          {project.description}
                        </p>
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-white"
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Redesigned Project Details Dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="max-w-6xl rounded-xl dark:bg-[#121212] bg-white border shadow-xl p-0 overflow-hidden border-orange-500">
          {selectedProject && (
            <div className="dark:bg-[#121212] bg-white text-foreground w-full max-h-[80vh] overflow-auto">
              <header className="dark:bg-[#121212] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold">
                      {selectedProject.title}
                      <span className="text-orange-500">.</span>
                    </h1>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {selectedProject.isPublic ? (
                        <>
                          <Github className="w-3 h-3 mr-1" />
                          Public
                        </>
                      ) : (
                        <>
                          <Github className="w-3 h-3 mr-1" />
                          Private
                        </>
                      )}
                    </Badge>
                  </div>
                  <AlertDialogCancel className="group p-2 transition-transform duration-300 hover:rotate-90">
                    <X className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-all duration-300 ease-in-out" />
                  </AlertDialogCancel>
                </div>
              </header>

              {/* Main Content */}
              <main className="px-6 pb-6 dark:bg-[#121212] bg-white">
                <div className="w-full">
                  {/* Project Details */}
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {selectedProject.longDescription}
                    </p>
                    {/* Technology Stack */}
                    <div className="space-y-4">
                      <h3 className="text-base font-semibold">
                        TECHNOLOGY STACK
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            <Image
                              src={`https://cdn.simpleicons.org/${tech.icon}`}
                              alt={tech.name}
                              width={12}
                              height={12}
                            />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {/* GitHub Repo */}
                      <Link href={selectedProject.githubLink} target="_blank">
                        <Button
                          variant="outline"
                          className="rounded-full pl-4 pr-1 py-5 text-sm font-medium border-gray-300 border-2 
      dark:border-gray-600 
      dark:bg-[#121212] 
      group relative 
      overflow-hidden
      transition-colors
      hover:border-[#121212] dark:hover:border-white"
                        >
                          <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                          <span className="text-gray-900 dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                            Repository
                          </span>
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                            <Github className="w-4 h-4 text-[#121212] dark:text-white transform transition-transform duration-300 ease-out group-hover:rotate-45" />
                          </div>
                        </Button>
                      </Link>

                      {/* Live Site
                      <Link href={selectedProject.liveLink} target="_blank">
                        <Button
                          variant="outline"
                          className="rounded-full pl-4 pr-1 py-5 text-sm font-medium border-gray-300 border-2 
      dark:border-gray-600 
      dark:bg-[#121212] 
      group relative 
      overflow-hidden
      transition-colors
      hover:border-[#121212] dark:hover:border-white"
                        >
                          <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                          <span className="text-gray-900 dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                            Live Site
                          </span>
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                            <Globe className="w-4 h-4 text-[#121212] dark:text-white transform transition-transform duration-300 ease-out group-hover:rotate-45" />
                          </div>
                        </Button>
                      </Link> */}

                      {/* Figma Link */}

                      <Button
                        variant="outline"
                        className="rounded-full pl-4 pr-1 py-5 text-sm font-medium border-gray-300 border-2 
      dark:border-gray-600 
      group relative 
      dark:bg-[#121212] 
      overflow-hidden
      transition-colors
      hover:border-[#121212] dark:hover:border-white"
                      >
                        <span className="absolute inset-0 bg-[#121212] dark:bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out origin-left"></span>

                        <span className="text-gray-900 dark:text-white relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                          Design
                        </span>
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-3 relative z-10">
                          <Figma className="w-4 h-4 text-[#121212] dark:text-white transform transition-transform duration-300 ease-out group-hover:rotate-45" />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
