"use client";

import { motion } from "framer-motion";

type NavbarProps = {
  activeSection: "about" | "projects" | "blog";
  onSectionChange: (section: "about" | "projects" | "blog") => void;
};

const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const navItems: Array<{ id: "about" | "projects" | "blog"; label: string }> =
    [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "blog", label: "Blog" },
    ];

  return (
    <nav className="flex items-center justify-center gap-8 md:gap-12">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className="relative text-white/70 hover:text-white/90 transition-colors text-sm md:text-base font-medium"
        >
          {item.label}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: activeSection === item.id ? "100%" : 0,
            }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
