"use client";

import { useRef } from "react";
import Heading from "./sub/Heading";
import { ArrowLeftIcon, experienceData } from "@/assets";
import { motion, useScroll, useSpring } from "framer-motion";

const Experience: React.FC = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    duration: 0.5,
  });

  return (
    <div className="py-20">
      <Heading title={"Experience & Education"} />
      <div className="grid place-items-center">
        <div className="relative w-full flex flex-col items-center py-10">
          {experienceData.map((item, index) => (
            <div
              key={`id-${index}`}
              className={`w-[85%] md:w-[360px] lg:w-[480px] px-4 sm:px-8 relative z-1 ${
                index % 2 === 0
                  ? "md:-left-[180px] lg:-left-[240px]"
                  : "md:left-[180px] lg:left-[240px]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                className={`relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm mb-8 ${
                  index % 2 === 0 ? "md:mr-4 lg:mr-5" : "md:ml-4 lg:ml-5"
                }`}
              >
                <h1 className="text-lg sm:text-xl font-light text-gray-700">
                  {item.title}
                </h1>
                <p className="text-gray-800">
                  <span className="block font-light">Education:</span>
                  <span className="block pl-2 font-extralight">
                    {item.education}
                  </span>
                </p>
                <div className="text-gray-800">
                  <span className="font-light">Experience:</span>
                  <ul className="pl-2">
                    {item.experience.map((exp, expIndex) => (
                      <li
                        key={`exp-id-${expIndex}`}
                        className="my-1 font-extralight"
                      >
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowLeftIcon
                  className={` absolute hidden md:block lg:block top-20 text-red-300 -translate-y-1/2 ${
                    index % 2 === 0
                      ? "md:left-70 lg:left-full md:rotate-180"
                      : "md:right-70 lg:right-full"
                  }`}
                />
              </motion.div>
              <div
                className={`w-14 absolute z-10 bg-white top-20 mx-60 border border-gray-300 rounded-full aspect-square place-items-center text-orange-500 font-light -translate-y-1/2 hidden md:grid ${
                  index % 2 === 0
                    ? "left-full -translate-x-1/2 md:left-1/3 lg:left-1/2"
                    : "right-full translate-x-1/2 md:right-1/3 lg:right-1/2"
                }`}
              >
                {date - experienceData.length + (experienceData.length - index)}
              </div>
            </div>
          ))}
          <motion.div
            initial={{ scaleY: 0 }}
            style={{ scaleY: scrollY }}
            className="absolute -translate-x-1/2 w-1 h-full rounded-full bg-gray-300 origin-top"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
