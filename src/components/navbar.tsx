import React from "react";
import Link from "next/link";
import { nav } from "@/configs/nav";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-lg w-full">
        <Link href="/">
          <Image src="/media/icon-transparent.svg" alt="logo" width={100} height={100} className="w-10 h-10 bg-background hover:opacity-80 transition-all duration-300" />
        </Link>
        <div className="flex gap-2">
          {nav.map((page) => (
            <Button key={page.label} asChild>
              <Link href={page.href}>
                {page.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}