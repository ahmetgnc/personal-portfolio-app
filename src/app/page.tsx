"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [id, setId] = useState("home");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = entries[0];

        entries.forEach((entry) => {
          if (entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        });

        if (mostVisible.isIntersecting) {
          setId(mostVisible.target.id);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const sections = containerRef.current?.querySelectorAll("section[id]");
    sections?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <Navbar id={id} />
      <div
        ref={containerRef}
        className="ml-[50px] md:ml-[70px] sm:px-4 overflow-x-hidden"
      >
        <section id="home" className="scroll-mt-32 min-h-screen">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-32 min-h-screen">
          <About />
        </section>
        <section id="experience" className="scroll-mt-32 min-h-screen">
          <Experience />
        </section>
        <section id="skills" className="scroll-mt-32 min-h-screen">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-32 min-h-screen">
          <Contact />
        </section>
      </div>
    </Fragment>
  );
}
