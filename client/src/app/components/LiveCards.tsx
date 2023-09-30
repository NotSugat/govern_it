import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { uuid } from "uuidv4";

const LiveCards = () => {
  const posts = [
    {
      title: "Pipeline under construction development plan for 6 month",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://www.virginiamercury.com/wp-content/uploads/2021/12/mvp-4-scaled.jpg",
      authorLogo: "/assets/bkt.png",
      authorName: "Bhaktapur Nagarpalika",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Electric line underground plan for 2080",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://mcmscache.epapr.in/post_images/website_350/post_15657150/thumb.jpg",
      authorLogo: "/assets/dhulikhel.png",
      authorName: "Dhulikhel Nagarpalika",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Increasing in water supply plan for next 3 months",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://theconstructor.org/wp-content/uploads/2020/08/Water_suply.jpg",
      authorLogo: "/assets/butwal-sub.jpg",
      authorName: "Butwal UpaNagarpalika",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Budget and project annoucemnt  for next quarter",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2015/07/budget-fy-2015-16.jpg",
      authorLogo: "/assets/thimi.jpeg",
      authorName: "Madhyapur Nagarpalika",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mx-auto ">
      <div className="gradient text-primary-foreground">
        <Link
          href={`live/${uuid()}`}
          className="max-w-[var(--screen-max)] border px-2"
        >
          <div className=" grid   grid-cols-2 p-4 leading-normal">
            <img
              className="h-80 w-full rounded-t-md object-contain"
              src="assets/meeting.jpg"
              alt="Image"
            />
            <div className="flex flex-col justify-center p-4 leading-normal">
              <p className="">Your locality</p>
              <h5 className="truncate-overflow-2 mb-2 text-3xl font-bold  tracking-tight dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="truncate-overflow-3 mb-3 font-normal  dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src="/assets/thimi.jpeg"
                  alt="user"
                  height={1000}
                  width={1000}
                  className="h-8 w-8 rounded-full"
                />
                <div className="text-sm">
                  <p>Madhyapur Nagarpalika</p>
                  <p>Madhyapur Thimi, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Live Streams</h1>
        <p className="mt-3 text-gray-500">
          News and Live Telecast. Updated every hour.
        </p>
      </div>
      <div className="max-w-screen-xl  px-2"></div>
      <div className="mx-auto my-2 mt-12 grid max-w-[var(--screen-max)] gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        {posts.map((items, key) => (
          <article
            className="mx-auto mt-4 max-w-md rounded-md border pb-4 shadow-lg duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="h-48 w-full rounded-t-md"
              />
              <div className=" px-3">
                <h3 className="truncate-overflow-2 h-[3.2rem] text-xl text-gray-900">
                  {items.title}
                </h3>
              </div>
              <p className="px-4 py-1 text-xl">🔴 Live</p>

              <div className="ml-4 mr-2 mt-2 flex items-center pt-3 ">
                <div className="h-10 w-10 flex-none rounded-full">
                  <img
                    src={items.authorLogo}
                    className="h-full w-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-sm text-gray-400">
                    {items.date}
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
export default LiveCards;
