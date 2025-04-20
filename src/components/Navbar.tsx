"use client";

import { CopyRightIcon, navbarData } from "@/assets";
import Link from "next/link";
import React, { useMemo } from "react";

type NavbarProps = {
  id: string;
};

const Navbar: React.FC<NavbarProps> = ({ id }) => {
  const currentYear = new Date().getFullYear();
  const copyRightRenderIcon = useMemo(() => <CopyRightIcon />, []);

  return (
    <div
      className="
      fixed inset-y-0 left-0 w-[50px] md:w-[70px] flex flex-col items-center justify-between border-r border-gray-200 bg-white p-4 z-10"
    >
      <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">A</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Genc
        </span>
      </Link>
      <div className="flex flex-col gap-y-3 sm:gap-y-2 items-center justify-center">
        {navbarData.map((item, index) => (
          <Link
            key={`navbar-${index}`}
            href={`/#${item.id}`}
            className="group flex flex-col items-center gap-y-2"
          >
            <item.icon
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100 xs:scale-80"
                  : "text-yellow-600 scale-100 xl:scale-90 xs:scale-70"
              }`}
            />
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center 
                ${index % 2 === 0 ? "-translate-x-2" : "-translate-x-2"} 
              ${item.id === id && "translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left text-[12px] md:text-[14px]">
          {copyRightRenderIcon} 2024-{currentYear}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
