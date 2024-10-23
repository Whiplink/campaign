"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItem = ({ href, name }) => {
    return (
      <button className="w-fit" onClick={() => setIsOpen(false)}>
        <Link href={href}>
          <p className="font-extrabold">{name}</p>
        </Link>
      </button>
    );
  };

  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-[70px] bg-gradient-to-b from-black/20 z-[9]" /> */}
      <div className="fixed w-full text-white z-[10] bg-black/30 backdrop-blur shadow">
        <div className="flex  justify-between items-center py-4 px-4 md:px-6 max-w-7xl mx-auto">
          <h1 className="font-extrabold text-xl tracking-tighter">
            Elmer Panotes Alberto
          </h1>
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
              <div className="absolute top-0 right-0 w-[250px] bg-background h-screen p-5 shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-foreground font-bold">Menu</h1>
                  <div onClick={() => setIsOpen(false)} className="text-black">
                    <X />
                  </div>
                </div>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-5 text-black">
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
