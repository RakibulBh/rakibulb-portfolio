"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const aboutInfo = [
    {
      text: "Industry Year Placement Student at ",
      highlight: "SquaredUp",
      link: "https://squaredup.com",
    },
    {
      text: "Third year Computer Science student at ",
      highlight: "Brunel University London",
      link: "https://brunel.ac.uk",
    },
    {
      text: "Based in ",
      highlight: "London, UK",
    },
  ];

  const previousInfo = [
    {
      text: "Web Developer at ",
      highlight: "Brunel Talent Marketplace",
    },
    {
      text: "IT Technician at ",
      highlight: "Mercedes AMG F1 Team",
    },
    {
      text: "Tutor at ",
      highlight: "CodeCamp",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto h-full flex flex-col justify-center space-y-10">
      {/* Name */}
      <div className="space-y-1">
        <h1 className="text-white/90 text-3xl md:text-4xl font-bold">
          Rakibul Bhuiyan
        </h1>
        <p className="text-white/50 text-base">Software Engineer</p>
      </div>

      {/* About Me Section */}
      <div className="space-y-3">
        <h2 className="font-mono text-primary text-base font-bold uppercase italic underline decoration-1 decoration-primary/70">
          About me:
        </h2>
        <div className="space-y-2">
          {aboutInfo.map((item, idx) => (
            <InfoBullet key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* Previous Section */}
      <div className="space-y-3">
        <h2 className="font-mono text-primary text-base font-bold uppercase italic underline decoration-1 decoration-primary/70">
          Previous:
        </h2>
        <div className="space-y-2">
          {previousInfo.map((item, idx) => (
            <InfoBullet key={idx} item={item} index={idx + aboutInfo.length} />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-sm">
        <Link
          href="https://github.com/rakibulbh"
          className="text-white/60 hover:text-primary transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/rakibulb"
          className="text-white/60 hover:text-primary transition-colors"
        >
          LinkedIn
        </Link>
        <button className="text-white/60 hover:text-primary transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
};

const InfoBullet = ({
  item,
  index,
}: {
  item: { text: string; highlight: string; link?: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      className="flex items-start gap-2 text-white/70 text-sm md:text-base group cursor-default"
    >
      <span className="text-primary mt-1">•</span>
      <p>
        {item.text}
        {item.link ? (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold underline decoration-1 decoration-primary/50 hover:decoration-primary transition-colors"
          >
            {item.highlight}
          </Link>
        ) : (
          <span className="text-white font-semibold underline decoration-1 decoration-primary/50">
            {item.highlight}
          </span>
        )}
      </p>
    </motion.div>
  );
};

export default AboutSection;
