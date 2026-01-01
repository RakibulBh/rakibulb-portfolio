import React from "react";
import ContainerLayout from "./ContainerLayout";
import BoxedBackground from "./BoxedBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 md:p-0">
      <BoxedBackground />
      <ContainerLayout />
    </section>
  );
};

export default Hero;
