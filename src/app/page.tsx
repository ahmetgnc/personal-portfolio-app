"use client";

import { Fragment } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </div>
    </Fragment>
  );
}
