import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Budget = () => {
  const nagarpalika = [
    {
      name: "Dhulikhel Nagarpalika",
      image: "/assets/dhulikhel.png",
    },
    {
      name: "Kathmandu Mahanagarpalika",
      image: "/assets/ktm.png",
    },
    {
      name: "Butwal Upa-mahanagarpalika",
      image: "/assets/butwal-sub.jpg",
    },
    {
      name: "Madhyapur Thimi Nagarpalika",
      image: "/assets/thimi.jpeg",
    },
  ];
  return (
    <main>
      <Navbar />
      <div className="mx-auto grid h-[calc(100dvh_-_5rem)] max-w-[var(--screen-max)] grid-cols-4 place-items-center ">
        {nagarpalika.map((item: any, idx: any) => (
          <Link
            key={idx}
            href={`budget/${item.name.trim().toLowerCase().replace(" ", "-")}`}
            className="flex cursor-pointer flex-col items-center justify-center gap-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              height={1000}
              width={1000}
              className="h-24 w-24"
            />
            <p className="text-2xl font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Budget;
