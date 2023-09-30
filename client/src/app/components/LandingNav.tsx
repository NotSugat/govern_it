"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LandingNav = () => {
  const router = useRouter();

  return (
    <header className="body-font sticky top-0 bg-primary-foreground text-gray-600 ">
      <div className="mx-auto flex max-w-[var(--screen-max)] flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <Image
            alt="Government logo"
            src="/assets/nepalGov.png"
            height={1000}
            width={1000}
            className="h-10 w-10"
          />
          <span className="ml-3 text-xl">GovernIT</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link href="#home" className="mr-5 cursor-pointer hover:text-black">
            Home
          </Link>
          <a
            href="#whatweprovide"
            className="mr-5 cursor-pointer hover:text-black"
          >
            What we provide
          </a>
          <a href="#howtouse" className="mr-5 cursor-pointer hover:text-black">
            How to Use
          </a>
          <a className="mr-5 cursor-pointer hover:text-black">About Us</a>
        </nav>
        <button
          className="mt-4 inline-flex items-center rounded-md border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0 "
          onClick={() => router.push("/signin")}
        >
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-7Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LandingNav;
