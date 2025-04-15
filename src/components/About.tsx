"use client";
import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import { aboutText, aboutData, DownloadIcon, ArrowLeftIcon } from "@/assets";

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading title={"About Me"} />
      <div className="w-full flex item-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          alt={"About Me"}
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px]"
        />
        <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <ArrowLeftIcon className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden" />
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm: text-[14px]">
            {aboutText}
          </p>
          <a
            href="#"
            download={""}
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <DownloadIcon className="text-xl" />
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
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
  );
};

export default About;
