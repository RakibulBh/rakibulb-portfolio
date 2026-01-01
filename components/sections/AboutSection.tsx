"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TECHNOLOGIES } from "@/data/techstack";
import GitHistory from "./Home/GitHistory";
import { cn } from "@/utils/cn";

const AboutSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-5 grid-rows-5 gap-3 h-full">
      {/* Profile */}
      <Box className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-3">
        <div className="bg-primary rounded-full p-1.5">
          <Image
            width={100}
            height={100}
            src=""
            alt="profile-picture"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-primary font-bold text-xl">Rakibul Bhuiyan</h1>
          <p className="text-white/60 text-sm">Computer Science Student</p>
          <p className="text-white/50 text-xs mt-1">London, UK</p>
        </div>
      </Box>

      {/* About Me */}
      <Box className="col-span-3 row-span-2 p-4">
        <h2 className="text-primary font-semibold text-lg mb-2">About Me</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Hi, I&apos;m Rakibul! I&apos;m a Computer Science student at Brunel
          University London with a passion for building innovative software
          solutions. Currently working as a Software Developer at Brunel Talent
          Marketplace and preparing for my placement at SquaredUp.
        </p>
      </Box>

      {/* Social Links */}
      <Box className="col-span-1 row-span-1 bg-[#333] flex items-center justify-center">
        <Link href="https://github.com/rakibulbh">
          <Image
            src="/brands/github.png"
            alt="github-logo"
            width={40}
            height={40}
          />
        </Link>
      </Box>

      <Box className="col-span-1 row-span-1 bg-[#0a66c2] flex items-center justify-center">
        <Link href="https://linkedin.com/in/rakibulb">
          <Image
            src="/brands/linkedin.png"
            alt="linkedin-logo"
            width={40}
            height={40}
          />
        </Link>
      </Box>

      {/* Technologies */}
      <Box className="col-span-2 row-span-3">
        <Technologies />
      </Box>

      {/* Git History */}
      <Box className="col-span-3 row-span-2">
        <GitHistory />
      </Box>

      {/* Contact */}
      <Box className="col-span-3 row-span-1 bg-primary/20 flex items-center justify-center">
        <button className="text-primary font-semibold text-sm hover:scale-105 transition-transform">
          Get in touch →
        </button>
      </Box>
    </div>
  );
};

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "bg-card/80 rounded-lg overflow-hidden border border-transparent hover:border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const Technologies = () => {
  const displayTech = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="relative w-full h-full overflow-hidden p-4">
      <h2 className="text-primary font-semibold text-lg mb-3">Technologies</h2>

      <div className="absolute top-0 left-0 right-0 z-10 h-16 bg-gradient-to-b from-card/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />

      <div className="scroll-container mt-8">
        <div className="grid grid-cols-4 gap-4">
          {displayTech.map((tech, idx) => (
            <Image
              key={`${tech}-${idx}`}
              width={32}
              height={32}
              alt={`${tech}-icon`}
              src={`/svgs/${tech}.svg`}
              className="mx-auto hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          animation: scrollVertical 40s linear infinite;
          width: 100%;
          height: calc(100% - 3rem);
          overflow: hidden;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
