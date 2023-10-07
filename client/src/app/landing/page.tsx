"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import LandingNav from "../components/LandingNav";
import HowToUse from "../components/HowToUse";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import en from "../locales/en";

import ne from "../locales/ne";
import { store, useAppDispatch, useAppSelector } from "../../redux/store";

const Landing = () => {
  const router = useRouter();
  const { locale } = router;
  const [t, setT] = useState({});
  const isEnglish = useAppSelector((state) => state.isEnglish);
  useEffect(() => {
    if (!isEnglish) {
      setT(ne);
    } else {
      setT(en);
    }
  }, [isEnglish]);
  const features = [
    {
      avatar: "/assets/live-hero.png",
      title: `${t.t_title}`,
      desc: `${t.howtouse_1_desc}`,
    },
    {
      avatar: "/assets/budget.png",
      title: `${t.t_budget}`,
      desc: `${t.howtouse_2_desc}`,
    },
    {
      avatar: "/assets/leaderboard.png",
      title: `${t.t_govOrg}`,
      desc: `${t.howtouse_3_desc}`,
    },
  ];
  return (
    <main className="bg-[#fefefe]">
      {/* {showBanner && (
        <div className="fixed bottom-0 flex w-full flex-col items-center bg-gray-800 bg-opacity-80 p-4 pt-4 text-center text-white">
          <button
            onClick={() => setBanner(false)}
            className="mt-4 w-40 rounded border-2 border-white bg-gray-600 px-4 py-2 transition hover:bg-gray-800"
          >
            {t.button}
          </button>
        </div>
      )} */}
      <LandingNav />

      {/* Hero section */}
      <section className="gradient h-[40vh]" id="#home">
        <div className="grid h-full grid-cols-2 place-items-center text-white ">
          <div>
            <h1 className="text-[clamp(1rem,5vw,2rem)] font-semibold">
              {t.motto}
            </h1>
            <p className="text-xl  text-gray-200">{t.theme}</p>
          </div>
          <Image
            src="/assets/hero.png"
            alt="hero character"
            height={1000}
            width={1000}
            className="h-96   object-contain"
          />
        </div>
      </section>

      <section id="whatweprovide">
        <div className="flex items-center justify-center">
          <p className="hr  mt-12 text-4xl font-medium text-primary">
            {t.provide}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[var(--screen-max)]">
          <ul className="grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="w-full bg-gray-100 p-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-gray-300 p-2">
                  <img
                    src={item.avatar}
                    className="h-full w-full rounded-full"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-700 sm:text-lg ">
                    {item.name}
                  </h4>
                  <p className="text-center text-2xl font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nagarpalika section */}

      <section
        id="nagarpalikasection"
        className="mt-24 h-[40vh] bg-[var(--bg-primary)]"
      >
        <div className="grid h-full grid-cols-2 place-items-center text-white  ">
          <Image
            src="/assets/hero.png"
            alt="hero character"
            height={1000}
            width={1000}
            className="h-96   object-contain"
          />
          <div>
            <h1 className="text-[clamp(1rem,5vw,2rem)] font-semibold">
              {t.motto}
            </h1>
            <p className="text-xl  text-gray-200">{t.theme}</p>
          </div>
        </div>
      </section>

      <section id="howtouse">
        <div className="flex items-center justify-center">
          <p className="hr  mt-12 text-4xl font-medium text-primary">
            {t.getting_started}
          </p>
        </div>

        <HowToUse />
      </section>

      <footer className="gradient p-6">
        <div className="mx-auto grid max-w-[--screen-max]  grid-cols-3 items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              alt="Paisa bachau logo"
              src="/assets/nepalGov.png"
              width={1000}
              height={1000}
              className="h-10 w-10"
            />
            <h1 className="text-xl font-bold tracking-widest text-[var(--text-primary)]">
              {t.logo_name}
            </h1>
          </div>
          <div className=" gap-12">
            <ul className="grid grid-cols-3 font-medium">
              <li className="text-primary-foreground">
                <Link href="#home">{t.home}</Link>
              </li>

              <li className="text-primary-foreground">
                <Link href="#home">{t.provide}</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">{t.use}</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">{t.about}</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">{t.contact}</Link>
              </li>

              <li className="text-primary-foreground">
                <Link href="#home">{t.privacy_policy}</Link>
              </li>
            </ul>
          </div>
          <Image
            src="/assets/live.png"
            alt="live streaming"
            height={1000}
            width={1000}
            className="h-12 object-contain"
          />
        </div>

        <div className="mx-auto  flex max-w-[--screen-max] pt-6">
          <p className="font-medium text-gray-100">{t.copyright} </p>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
