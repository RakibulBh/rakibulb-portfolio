import GitHistory from "@/components/sections/Home/GitHistory";
import { TECHNOLOGIES } from "@/data/techstack";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/Posts/posts";

export const Present = () => (
  <motion.div
    className="h-full font-bold flex flex-col justify-between p-4 relative overflow-hidden"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-card/50 opacity-30" />
    <div className="relative">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-white/80 text-sm md:text-base">
          Hello, I&apos;m Rakibul
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex gap-2 items-center text-xs text-primary font-bold md:text-sm"
        >
          Contact <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
    <div className="relative space-y-1">
      <h1 className="text-white/60 text-sm md:text-base">Computer Science</h1>
      <h1 className="text-white/60 text-sm md:text-base">London, UK</h1>
    </div>
  </motion.div>
);

export const Github = () => (
  <Link href="https://github.com/rakibulbh">
    <Image src="/brands/github.png" alt="github-logo" width={40} height={40} />
  </Link>
);

export const Linkedin = () => (
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

export const PlantImage = () => (
  <div className="relative w-full h-full overflow-hidden">
    <Image
      fill
      alt="plant-image"
      src="/plant.jpg"
      className="rounded-md"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export const ResumeDownload = () => (
  <motion.div
    className="h-full flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2"
    >
      <span className="text-sm md:text-base">Download CV</span>
      <ArrowRight size={18} />
    </motion.button>
  </motion.div>
);

export const Profile = () => (
  <div className="flex items-center flex-col gap-2 md:gap-3">
    <Link href="http://github.com/rakibulbh">
      <div className="bg-primary rounded-full p-1 md:p-1.5 lg:p-2">
        <Image
          width={80}
          height={80}
          src=""
          alt="profile-picture"
          className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-cover"
        />
      </div>
    </Link>
    <h1 className="text-primary font-bold text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-tight md:leading-normal">
      Rakibul Bhuiyan
    </h1>
  </div>
);

export const Technologies = () => {
  const infiniteTechnologies = [
    ...TECHNOLOGIES,
    ...TECHNOLOGIES,
    ...TECHNOLOGIES,
  ];

  return (
    <div className="relative w-full overflow-hidden h-full">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 z-10 h-16 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>

      <div className="scroll-container hover:pause-animation justify-center">
        <div className="grid grid-cols-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12 gap-y-4 overflow-y-hidden">
          {infiniteTechnologies.map((technology, idx) => (
            <Image
              key={`${technology}-${idx}`}
              width={40}
              height={40}
              alt={`${technology}-icon`}
              src={`/svgs/${technology}.svg`}
              className="tech-icon mx-auto"
            />
          ))}
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        .scroll-container {
          animation: scrollVertical 60s linear infinite;
          width: 100%;
        }

        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }

        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${TECHNOLOGIES.length * 12}px));
          }
        }
      `}</style>
    </div>
  );
};

export const Blogs = () => {
  const recentPost = posts[0]; // Show only latest post

  return (
    <div className="h-full flex flex-col p-3 space-y-2 overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold text-primary/80">
          Latest Article
        </h2>
        <ArrowRight size={16} className="text-primary/60" />
      </div>
      <motion.div
        className="flex-1 bg-white/5 rounded-lg p-3 flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <h3 className="text-white/90 font-medium text-sm line-clamp-2">
            {recentPost.header.title}
          </h3>
          <p className="text-white/60 text-xs mt-1 line-clamp-3">
            {
              recentPost.sections.find((s) => s.header === "Overview")
                ?.content[0].content
            }
          </p>
        </div>
        <div className="flex items-center justify-end mt-2">
          <span className="text-xs text-primary/80">
            {recentPost.header.posted}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export const Layout = [
  Present,
  Github,
  Linkedin,
  PlantImage,
  ResumeDownload,
  Profile,
  Technologies,
  GitHistory,
  Blogs,
];
