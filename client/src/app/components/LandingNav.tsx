"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import en from "../locales/en";
import ne from "../locales/ne";
import { toggleEdit } from "@/redux/features/toggleslice";
import { store, useAppDispatch, useAppSelector } from "../../redux/store";

const LandingNav = () => {
  const router = useRouter();
  const [t, setT] = useState<any>({});
  const dispatch = useAppDispatch();
  const isEnglish = useAppSelector((state) => state.isEnglish);

  // const t = locale === "en" ? en : ne;
  useEffect(() => {
    if (!isEnglish) {
      setT(ne);
    } else {
      setT(en);
    }
  }, [isEnglish]);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    dispatch(toggleEdit(true));
  };

  return (
    <header className="body-font sticky top-0 z-10 bg-primary-foreground text-gray-600 ">
      <div className="mx-auto flex max-w-[var(--screen-max)] flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <Image
            alt={t.alt}
            src="/assets/nepalGov.png"
            height={1000}
            width={1000}
            className="h-10 w-10"
          />
          <span className="ml-3 text-xl">{t.logo_name}</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link href="#home" className="mr-5 cursor-pointer hover:text-black">
            {t.home}
          </Link>
          <a
            href="#whatweprovide"
            className="mr-5 cursor-pointer hover:text-black"
          >
            {t.provide}
          </a>
          <a href="#howtouse" className="mr-5 cursor-pointer hover:text-black">
            {t.use}
          </a>
          <a className="mr-5 cursor-pointer hover:text-black">{t.about}</a>
        </nav>
        <select
          onChange={changeLanguage}
          defaultValue={"hell"}
          className="text-shadow-sm bg-transparent text-lg tracking-wide text-black"
        >
          <option className="text-black" value="en">
            EN
          </option>
          <option className="text-black" value="ne">
            NE
          </option>
        </select>
        <button
          className="mt-4 inline-flex items-center rounded-md border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0 "
          onClick={() => router.push("/signin")}
        >
          {t.signin}
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
