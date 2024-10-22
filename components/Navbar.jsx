"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[70px] bg-gradient-to-b from-black/70 z-[9]" />
      <div className="fixed w-full text-white z-[10]">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <h1 className="font-extrabold text-2xl">Logo</h1>
          <Button
            onClick={() => setIsOpen(true)}
            className="sm:hidden bg-transparent"
            variant="outline"
            size="icon"
          >
            <Menu />
          </Button>
          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="absolute h-screen w-screen left-0 top-0 bg-black/50"
              ></div>
              <div className="absolute top-0 right-0 w-[200px] bg-background h-screen p-5 shadow-md">
                <div className="flex justify-end">
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                  >
                    <X />
                  </Button>
                </div>
                <nav className="flex flex-col gap-3 text-black">
                  <MenuItem href="/" name="Home" />
                  <MenuItem href="#about" name="About" />
                  <MenuItem href="/" name="Career" />
                  <MenuItem href="/" name="Get Involved" />
                </nav>
              </div>
            </>
          )}
          <nav className="hidden sm:flex gap-6">
            <MenuItem href="/" name="Home" />
            <MenuItem href="/#about" name="About" />
            <MenuItem href="/" name="Career" />
            <MenuItem href="/" name="Get Involved" />
          </nav>
        </div>
      </div>
    </>
  );
}

const MenuItem = ({ href, name }) => {
  return (
    <button className="w-fit" onClick={() => setIsOpen(false)}>
      <Link href={href}>
        <p className="font-extrabold">{name}</p>
      </Link>
    </button>
  );
};
