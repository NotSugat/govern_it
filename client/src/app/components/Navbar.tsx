"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";

// Avtar with darpdown menu
const AvatarMenue = () => {
  const [state, setState] = useState(false);
  const profileRef: React.MutableRefObject<HTMLButtonElement | null> =
    useRef(null);

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Analytics", path: "javascript:void(0)" },
    { title: "Profile", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleDropDown = (e: ChangeEvent) => {
      if (!profileRef?.current?.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden h-10 w-10 rounded-full outline-none ring-gray-200 ring-offset-2 lg:block lg:focus:ring-2"
          onClick={() => setState(!state)}
        >
          <img
            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            className="h-full w-full rounded-full"
          />
        </button>
      </div>
      <ul
        className={`right-0 top-14 mt-6 space-y-6 bg-white lg:absolute lg:mt-0 lg:w-52 lg:space-y-0 lg:rounded-md lg:border lg:shadow-md ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block border-none px-2 py-1 text-xl text-gray-600 hover:text-gray-900
               lg:hover:bg-gray-50"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button className="block w-full border-t py-1 text-justify text-xl text-gray-600 hover:text-gray-900 lg:p-3 lg:hover:bg-gray-50">
          Logout
        </button>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Pro version", path: "javascript:void(0)" },
    { title: "Upgrade", path: "javascript:void(0)" },
    { title: "Support", path: "javascript:void(0)" },
  ];

  const submenuNav = [
    { title: "Overview", path: "javascript:void(0)" },
    { title: "Integration", path: "javascript:void(0)" },
    { title: "Billing", path: "javascript:void(0)" },
    { title: "Transactions", path: "javascript:void(0)" },
    { title: "Plans", path: "javascript:void(0)" },
  ];

  return (
    <header className="w-full bg-blue-500 py-2  pt-1 text-base lg:text-sm">
      <div
        className={` mx-auto w-full items-center gap-x-14 bg-white px-16 lg:static lg:flex lg:px-8 ${
          state ? "fixed inset-x-0 h-full" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:block lg:py-5  ">
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu mt-8 max-h-screen flex-1 overflow-y-auto pb-28 lg:mt-0 lg:block lg:overflow-visible lg:pb-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" flex-1 items-center justify-center pb-4 lg:flex lg:pb-0"
            >
              <div className="flex w-[700px] items-center gap-1 rounded-lg border px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-md bg-transparent px-2 py-2 text-gray-500 outline-none"
                />
              </div>
            </form>
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block text-xl text-gray-700 hover:text-red-700"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <AvatarMenue />
          </ul>
        </div>
      </div>
      <nav className="border-b">
        <ul className="mx-auto flex max-w-screen-xl items-center justify-center gap-x-3 overflow-x-auto px-4 lg:px-8">
          {submenuNav.map((item, idx) => {
            return (
              // Replace [idx == 0] with [window.location.pathname == item.path]
              <li
                key={idx}
                className={`py-1 ${
                  idx == 0 ? "border-b-2 border-indigo-600" : ""
                }`}
              >
                <a
                  href={item.path}
                  className="block rounded-lg px-3 py-2 text-xl text-gray-100 duration-150 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
