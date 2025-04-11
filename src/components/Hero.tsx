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
  const [buttonHover, setButtonHover] = useState<boolean>(false);

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
      className="h-screen grid place-items-center m-4"
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
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-yellow-600"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{opacity: { delay: 0.4 }}}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            My Name is Ahmet Genc &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like animations 😊
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((Icon, index) => (
            <a
              href="#"
              key={index}
              className="hover:bg-red-400 hover:text-white transition-colors rounded-full p-2"
            >
              {<Icon className="w-5 h-5" />}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
