"use client";
import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import { aboutText, aboutData, ArrowLeftIcon } from "@/assets";

const About: React.FC = () => {
  return (
    <div className="py-20">
      <Heading title={"About Me"} />
      <div className="grid place-items-center mx-16 md:mx-0">
        <div className="flex flex-row item-center place-items-center justify-between md:justify-center">
          <Image
            src={"/about-me.png"}
            alt={"About Me"}
            width={400}
            height={400}
            className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] hidden lg:block"
          />
          <div className="md:max-w-[400px] lg:max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
            <ArrowLeftIcon className="relative hidden lg:block -left-10 top-20 scale-[2.5] text-zinc-100" />
            <p className="text-[14px] font-light text-gray-700 first-letter:pl-3 sm:text-[16px] ">
              {aboutText}
            </p>
          </div>
        </div>
        <div className="mt-20 w-fit flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
          {aboutData.map((item, index) => (
            <Achievements
              key={index}
              title={item.title}
              amount={item.amount}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
