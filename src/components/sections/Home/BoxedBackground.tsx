"use client";
import React, { useEffect, useState } from "react";

const BoxedBackground = () => {
  const [boxes, setBoxes] = useState<number>(72);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setBoxes(72);
      } else if (window.innerWidth >= 1280) {
        setBoxes(100);
      } else if (window.innerWidth >= 1024) {
        setBoxes(72);
      } else if (window.innerWidth >= 768) {
        setBoxes(72);
      } else {
        setBoxes(72);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full absolute grid grid-cols-4 grid-rows-7 md:grid-cols-6 md:grid-rows-6 lg:grid-cols-8 lg:grid-rows-8 xl:grid-cols-12 xl:grid-rows-12">
      {new Array(boxes).fill(null).map((item, idx) => (
        <Box key={idx} />
      ))}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </div>
  );
};

const Box = () => {
  return (
    <div className="border-[0.1px] border-white col-span-1 row-span-1 xl:row-span-2 hover:bg-white/20 transition-colors duration-500 ease-in-out opacity-10" />
  );
};

export default BoxedBackground;
