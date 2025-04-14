"use client";

import { useRef } from "react";
import Image from "next/image";
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
    <div id="experience" className="relative py-20 px-96">
      <Heading title={"Experience & Education"} />
      <Image
        src={"/education.png"}
        alt={"Experience Image"}
        width={400}
        height={400}
        className="absolute -top-4 right-48 opacity-70"
      />
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((item, index) => (
          <div
            key={`id-${index}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-12 relative ${
              index % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:-left-0"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700">
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
                className={`absolute top-20 text-red-300 -translate-y-1/2 ${
                  index % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              />
            </motion.div>
            <div
              className={`w-14 absolute z-10 bg-white top-20 mx-60 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 ${
                index % 2 === 0
                  ? "left-full -translate-x-1/2 lg:left-1/2"
                  : "right-full translate-x-1/2 lg:right-1/2"
              }`}
            >
              {date - experienceData.length + (experienceData.length - index)}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
