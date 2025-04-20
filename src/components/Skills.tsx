"use client";

import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.01,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div className="py-20">
      <Heading title={"Skills"} />
      <div className="grid place-items-center mx-16 md:mx-0">
        <div className="w-full flex flex-wrap justify-center md:max-w-[500] lg:max-w-[800px] gap-x-8 gap-y-10 lg:gap-y-6">
          {skillsData.map((item, index) => (
            <motion.div
              custom={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              viewport={{ margin: "50px", once: true }}
              key={index}
              className="flex items-center justify-center w-40 h-15 gap-x-2 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
            >
              <Image
                src={item.icon}
                alt="Skills Image"
                width={100}
                height={100}
                className="h-auto w-[40px]"
              />
              <p className="text-sm text-gray-600">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
