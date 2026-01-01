"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rakibulbh",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/rakibulb",
    },
    {
      name: "Contact",
      icon: Mail,
      href: "mailto:contact@example.com", // Update with your email
    },
  ];

  return (
    <footer className="py-6">
      <div className="max-w-3xl mx-auto border-t border-white/10 pt-6 flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target={social.name !== "Contact" ? "_blank" : undefined}
                rel={social.name !== "Contact" ? "noopener noreferrer" : undefined}
                aria-label={social.name}
              >
                <motion.div
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-white/60 hover:text-primary transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Rakibul Bhuiyan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
