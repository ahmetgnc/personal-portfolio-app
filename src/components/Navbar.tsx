"use client";

import { CopyRightIcon, navbarData } from "@/assets";
import Link from "next/link";
import React, { useMemo } from "react";

const Navbar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const copyRightRenderIcon = useMemo(() => <CopyRightIcon />, []);

  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-10">
      <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">A</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Genc
        </span>
      </Link>
      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((item, index) => (
          <Link
            key={`navbar-${index}`}
            href={`/#${item.id}`}
            className="group flex flex-col item-center gap-y-2"
          >
            <item.icon className="text-2xl text-yellow-600 group-hover:scale-125 transition-all" />
            <span className="text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left">
          {copyRightRenderIcon} 2024-{currentYear}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
