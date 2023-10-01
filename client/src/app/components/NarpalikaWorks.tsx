import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { store, useAppDispatch, useAppSelector } from "../../redux/store";
// import React from "react";
import en from "../locales/budget/en";
import ne from "../locales/budget/ne";

const NagarpalikaWorks = () => {
  const router = useRouter();
  const { locale } = router;
  const [t, setT] = useState({});
  // const t = locale === "en" ? en : ne;
  const isEnglish = useAppSelector((state) => state.isEnglish);
  useEffect(() => {
    if (!isEnglish) {
      setT(ne);
    } else {
      setT(en);
    }
  }, [isEnglish]);

  return (
    <div className=" mx-auto h-full max-w-[var(--screen-max)] ">
      <div className="wrap relative h-full overflow-hidden py-10">
        <div className="border-2-2 absolute left-[50%] h-full border border-gray-700 border-opacity-20"></div>
        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-[var(--bg-secondary)] px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              {t.howtouse_1}
            </h3>
            <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
              O{t.howtouse_1_desc}
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-xl font-semibold text-white">2</h1>
          </div>
          <div className="bg- order-1 w-5/12 rounded-lg bg-[#02415e] px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-white">
              {t.howtouse_2}
            </h3>
            <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">
              {t.howtouse_2_desc}
            </p>
          </div>
        </div>

        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-[var(--bg-secondary)] px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">
              {t.howtouse_3}
            </h3>
            <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
              {t.howtouse_3_desc}
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-[#02415e] px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-white">
              {t.howtouse_4}
            </h3>
            <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100 ">
              {t.howtouse_4_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NagarpalikaWorks;
