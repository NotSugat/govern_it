import React from "react";

const HowToUse = () => {
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
              Sign Up using your Citizenship Number
            </h3>
            <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
              Once you have opened the GovernIT application, Sign Up and login
              using citizenship number.
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
              Watch On the Go
            </h3>
            <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">
              You can access all the information about your local government
              streaming in GovernIT
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
              Check out budget information of your locality
            </h3>
            <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
              You will prompt to live streaming site and click on nagarpalika
              channel to view all thier budget and other information.
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
              Municipality Ranking
            </h3>
            <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100 ">
              {`You have the opportunity to access a ranking or assessment of your municipality's current status in relation to ongoing developmental projects required for the local area's improvement and development.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
