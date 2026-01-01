"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { Layout } from "./BoxComponents";
import { MobileLayout } from "./MobileBoxComponents";
import { motion } from "framer-motion";

const containerStyles = [
  // present
  "bg-card/80 row-span-1 col-span-2",
  // Github
  "bg-[#333] row-span-1 col-span-1",
  // Linkedin
  "bg-[#0a66c2] row-span-1 col-span-1",
  // image
  "bg-card/80 row-span-3 col-span-1",
  // Resume download
  "bg-primary/20 row-span-1 col-span-2",
  // profile picture
  "bg-card/80 row-span-2 col-span-2",
  // Technologies
  "bg-card/80 row-span-5 col-span-2",
  // Git history
  "bg-card/80 row-span-2 col-span-3",
  // Blogs
  "bg-card/80 row-span-2 col-span-3",
];

const mobileContainerStyles = [
  // Profile
  "bg-card row-span-2 col-span-6 space-y-1 p-2",
  // profile picture
  "bg-card row-span-4 col-span-3 flex items-center justify-center",
  // Github
  "bg-[#333] row-span-2 col-span-3 flex items-center justify-center",
  // Linkedin
  "bg-[#0a66c2] row-span-2 col-span-3 flex items-center justify-center",
  // Technologies
  "bg-card row-span-3 col-span-6",
  // Blogs
  "bg-card row-span-3 col-span-6 p-3",
];

const parentContainerStyles =
  "w-full h-[40rem] md:w-[40rem] md:h-[40rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[60rem] 2xl:h-[60rem]";

const ContainerLayout = () => {
  return (
    <>
      <div
        className={cn(
          "hidden md:grid grid-cols-5 grid-rows-7 gap-2 2xl:gap-3 text-white z-10",
          parentContainerStyles
        )}
      >
        {Layout.map(
          (Component: () => React.JSX.Element | null, idx: number) => (
            <Container styles={containerStyles[idx]} key={idx} index={idx}>
              <Component />
            </Container>
          )
        )}
      </div>
      {/* Mobile */}
      <MobileGrid />
    </>
  );
};

const MobileGrid = () => (
  <div
    className={cn(
      "grid md:hidden grid-cols-6 grid-rows-12 gap-2 lg:gap-3 text-white z-10",
      parentContainerStyles
    )}
  >
    {MobileLayout.map((Component: () => React.JSX.Element, idx: number) => (
      <Container key={idx} styles={mobileContainerStyles[idx]} index={idx}>
        <Component />
      </Container>
    ))}
  </div>
);

const Container = ({
  styles,
  children,
  index,
}: {
  styles: string;
  children: React.ReactNode;
  index: number;
}) => {
  const gridPositions = [
    { col: 0, row: 0 }, // Present (0)
    { col: 2, row: 0 }, // GitHub (1)
    { col: 3, row: 0 }, // LinkedIn (2)
    { col: 4, row: 0 }, // PlantImage (3)
    { col: 0, row: 1 }, // ResumeDownload (4)
    { col: 2, row: 1 }, // Profile (5)
    { col: 0, row: 2 }, // Technologies (6)
    { col: 3, row: 4 }, // GitHistory (7)
    { col: 0, row: 6 }, // Blogs (8)
  ];

  const position = gridPositions[index] || { col: 0, row: 0 };

  const directionVariants = {
    hidden: {
      opacity: 0,
      x: position.col === 0 ? -100 : position.col >= 3 ? 100 : 0,
      y: position.row >= 4 ? 100 : position.row <= 1 ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        delay: index * 0.07,
      },
    },
  };

  return (
    <motion.div
      variants={directionVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        styles,
        "rounded-md md:rounded-lg overflow-hidden",
        "border border-transparent hover:border-white/10",
        "relative z-0 hover:z-10"
      )}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default ContainerLayout;
