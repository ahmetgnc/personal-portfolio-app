"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

type WindowOffsetType = {
  innerWidth: number;
  innerHeight: number;
};

const Hero: React.FC = () => {
  const [windowOffset, setWindowOffset] = useState<WindowOffsetType>({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState<boolean>(false);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const xSpring = useSpring(motionX, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(motionY, { stiffness: 100, damping: 10 });
  const rotateY = useTransform(
    xSpring,
    [0, windowOffset.innerWidth],
    [-30, 30]
  );
  const rotateX = useTransform(
    ySpring,
    [0, windowOffset.innerHeight],
    [10, -50]
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    motionX.set(clientX);
    motionY.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
    console.log(innerWidth, innerHeight);
  };

  const handleMouseLeave = () => {
    setMouseMove(false);
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-ligth capitalize">
          <motion.div
            className="flex item-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[100px] sm:w-[200px]"
            />
          </motion.div>
          <h1 className="text-center sm:text-3xl font-bold tracking-wider text-gray-800 text-xl">
            Hi! I&apos;m Ahmet Genc 👋
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I&apos;m an Experienced Frontend Developer
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-5 sm:gap-x-10 sm:text-3xl text-yellow-600 text-lg">
          {heroIcons.map(({ icon: Icon, url }, index) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="hover:bg-orange-500 hover:text-white transition-colors rounded-full p-2 sm:p-3"
            >
              {<Icon className="w-5 h-5" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
