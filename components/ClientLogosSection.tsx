"use client";
import RotatingText from "@/components/ui/RotatingText";

export default function ClientLogosSection() {
  return (
    <section className="py-10 sm:px-6 lg:px-8 border-t border-gray-400 dark:border-gray-700 overflow-hidden max-w-6xl mx-auto">
      <div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            A <span className=" text-gray-500">CREATIVE</span>
          </h2>
          <RotatingText
            texts={[
              "Web Developer",
              "Mobile App Developer",
              "UI/UX Designer",
              "Problem Solver",
            ]}
            splitBy="words"
            mainClassName="px-2 sm:px-2 md:px-3 bg-orange-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-3xl sm:text-4xl font-bold text-[#121212] dark:text-white leading-tight"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
      <div className="mt-10 border-t border-gray-400 dark:border-gray-700 w-full"></div>
    </section>
  );
}
