"use client";
import HowToUse from "@/app/components/HowToUse";
import NagarpalikaWorks from "@/app/components/NarpalikaWorks";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nagarpalika = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-4 flex cursor-pointer flex-col items-center justify-center gap-4">
        <Image
          src="/assets/ktm.png"
          alt="Kathmandu Mahanagarpalika"
          height={1000}
          width={1000}
          className="h-24 w-24"
        />
        <p className="text-2xl font-semibold">Kathmandu Mahanagarpalika</p>
      </div>

      <section id="howtouse">
        <div className="flex items-center justify-center">
          <p className="hr  mt-12 text-4xl font-medium text-primary"></p>
        </div>

        <NagarpalikaWorks />
      </section>
    </div>
  );
};

export default Nagarpalika;
