"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [id, setId] = useState<string>("home");
  const componentTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((enrty) => {
          const intersecting = enrty.isIntersecting;
          if (intersecting) {
            setId(enrty.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const componentsArray = Array.from(componentTrackRef?.current?.children || []) as Element[];
    componentsArray.forEach((component) => {
      observer.observe(component);
    });
  }, []);
  return (
    <Fragment>
      <Navbar id={id} />
      <div ref={componentTrackRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </div>
    </Fragment>
  );
}
