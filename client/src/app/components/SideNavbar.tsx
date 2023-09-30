"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  return (
    <aside
      className={`relative h-[calc(100vh_-_3rem)] ${isOpen ? "w-[var(--sidebar-width)]" : "w-20"
        }  shadow-md duration-300`}
    >
      <button
        className="absolute -right-3 top-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          icon="mingcute:right-line"
          className={` h-8 w-8  cursor-pointer rounded-full border-2 border-card bg-secondary p-1 shadow-sm ${isOpen && "rotate-180 "
            }`}
        />
      </button>
      <div className="  p-4 pt-6">
        <p className={`  text-2xl text-primary ${!isOpen && "hidden"}`}>
          🔴 Live Now
        </p>
        <p className={`text-lg text-primary ${!isOpen && "hidden"}`}>
          Nagarpalika
        </p>
      </div>

      <ul className="space-y-4 pt-8">
        <li>
          <Link href="/" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Image
                src="/assets/bkt.png"
                alt="bkt nagarpalika"
                height={1000}
                width={1000}
              />
              <p>Bhaktapur Nagarpalika</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/routines"
            className={`link  ${!isOpen && "link-notext"} `}
          >
            <div>
              <Image
                src="/assets/dhulikhel.png"
                alt="Dhulikhel nagarpalika"
                height={1000}
                width={1000}
              />
              <p>Dhulikhel Nagarpalika</p>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/tasks" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Image
                src="/assets/ktm.png"
                alt="bkt nagarpalika"
                height={1000}
                width={1000}
              />{" "}
              <p>Kathmandu Mahanagarpalika</p>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/stats" className={`link  ${!isOpen && "link-notext"} `}>
            <div>
              <Image
                src="/assets/butwal-sub.jpg"
                alt="Dhulikhel nagarpalika"
                height={1000}
                width={1000}
              />
              <p>Butwal Upa-mahanagarpalika</p>
            </div>
          </Link>
        </li>

        <li>
          <Link
            href="/community"
            className={`link  ${!isOpen && "link-notext"} `}
          >
            <div>
              <Image
                src="/assets/thimi.jpeg"
                alt="Dhulikhel nagarpalika"
                height={1000}
                width={1000}
              />
              <p>Madhyapur Thimi Nagarpalika</p>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavbar;
