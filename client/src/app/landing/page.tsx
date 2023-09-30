import Image from "next/image";
import Navbar from "../components/Navbar";
import LandingNav from "../components/LandingNav";
import HowToUse from "../components/HowToUse";
import Link from "next/link";

const Landing = () => {
  const features = [
    {
      avatar: "/assets/live-hero.png",
      title: "Live Streaming",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      avatar: "/assets/budget.png",
      title: "Budget Transparency",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
    {
      avatar: "/assets/leaderboard.png",
      title: "Gov Org Ranking",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    },
  ];
  return (
    <main className="bg-[#fefefe]">
      <LandingNav />
      {/* Hero section */}
      <section className="gradient h-[40vh]" id="#home">
        <div className="grid h-full grid-cols-2 place-items-center text-white ">
          <div>
            <h1 className="text-[clamp(1rem,5vw,2rem)] font-semibold">
              GovernIT track everything everytime
            </h1>
            <p className="text-xl  text-gray-200">Digify Nepal with one app</p>
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
            What we provide
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
              GovernIT track everything everytime
            </h1>
            <p className="text-xl  text-gray-200">Digify Nepal with one app</p>
          </div>
        </div>
      </section>

      <section id="howtouse">
        <div className="flex items-center justify-center">
          <p className="hr  mt-12 text-4xl font-medium text-primary">
            Getting Started
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
              GovernIT
            </h1>
          </div>
          <div className=" gap-12">
            <ul className="grid grid-cols-3 font-medium">
              <li className="text-primary-foreground">
                <Link href="#home">Home</Link>
              </li>

              <li className="text-primary-foreground">
                <Link href="#home">What we Provide</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">How to Use</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">About Us</Link>
              </li>
              <li className="text-primary-foreground">
                <Link href="#home">Contact Us</Link>
              </li>

              <li className="text-primary-foreground">
                <Link href="#home">privacy</Link>
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
          <p className="font-medium text-gray-100">
            Copyright @ 2023 All Rights Reserved. Nepal Govermnet{" "}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
