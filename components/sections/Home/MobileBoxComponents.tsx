"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGIES } from "@/data/techstack";

export const MobileRole = () => (
  <div className="">
    <h1 className="text-white/80 font-semibold text-md">Hi, I am Rakibul.</h1>
    <h1 className="text-white/40 font-semibold text-sm">
      I&apos;m a Computer Science student,
    </h1>
    <h1 className="text-white/40 font-semibold text-sm">
      Based in London, UK.
    </h1>
    <button className="flex gap-2 items-center text-xs mt-2 text-primary font-bold">
      Contact me <ArrowRight size={16} />
    </button>
  </div>
);

export const MobileGithub = () => (
  <Link href="https://github.com/rakibulbh">
    <Image src="/brands/github.png" alt="github-logo" width={40} height={40} />
  </Link>
);

export const MobileLinkedin = () => (
  <Link href="https://linkedin.com/in/rakibulb">
    <Image
      className=""
      src="/brands/linkedin.png"
      alt="linkedij-logo"
      width={40}
      height={40}
    />
  </Link>
);

export const MobileProfile = () => (
  <div className="flex items-center flex-col gap-3">
    <Link href="http://github.com/rakibulbh">
      <div className=" bg-primary rounded-full p-[0.2rem]">
        <Image
          width={80}
          height={80}
          src="/profile-picture.jpg"
          alt="profile-picture"
          className="rounded-full"
        />
      </div>
    </Link>
    <h1 className="text-primary font-bold text-lg sm:text-2xl md:text-3xl">
      Rakibul Bhuiyan
    </h1>
  </div>
);

const MobileTechnologies = () => {
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const firstHalf = TECHNOLOGIES.slice(0, half);
  const secondHalf = TECHNOLOGIES.slice(half);

  const firstRow = [...firstHalf, ...firstHalf, ...firstHalf];
  const secondRow = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="w-full h-full flex flex-col relative">
      <h1 className="text-lg font-bold px-2 py-1 z-20">My technologies</h1>
      <div className="flex-1 flex flex-col gap-5 pt-2 overflow-x-hidden">
        {/* Shadows */}
        <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
        <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent" />

        {/* First row */}
        <div className="flex gap-2 scroll-track scroll-left">
          {firstRow.map((technology, idx) => (
            <Image
              key={`${technology}-${idx}`}
              width={40}
              height={40}
              alt={`${technology}-icon`}
              src={`/svgs/${technology}.svg`}
              className="tech-icon mx-auto slide"
            />
          ))}
        </div>

        {/* Second row */}
        <div className="flex gap-2 scroll-track scroll-right">
          {secondRow.reverse().map((technology, idx) => (
            <Image
              key={`${technology}-${idx}`}
              width={40}
              height={40}
              alt={`${technology}-icon`}
              src={`/svgs/${technology}.svg`}
              className="tech-icon mx-auto slide"
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .scroll-track {
          display: flex;
          width: max-content;
        }

        .scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-120px * ${firstHalf.length}));
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(calc(-120px * ${secondHalf.length}));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export const MobileLayout = [
  MobileRole,
  MobileProfile,
  MobileGithub,
  MobileLinkedin,
  MobileTechnologies,
];
