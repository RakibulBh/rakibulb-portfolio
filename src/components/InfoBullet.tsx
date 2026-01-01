"use client";

import { motion } from "framer-motion";
import LogoText from "@/components/LogoText";

type SubItem = {
  highlight: string;
  logo?: string;
  description?: string;
};

type InfoBulletProps = {
  item: {
    text: string;
    highlight: string;
    logo?: string;
    link?: string;
    subItems?: SubItem[];
  };
  index: number;
};

const InfoBullet = ({ item, index }: InfoBulletProps) => {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ x: 10 }}
        className="flex items-start gap-2 text-white/70 text-sm md:text-base group cursor-default"
      >
        <span className="text-primary mt-1">•</span>
        <p className="flex items-center flex-wrap">
          {item.text}
          {item.logo ? (
            <LogoText logo={item.logo} text={item.highlight} link={item.link} />
          ) : (
            <span className="text-white font-semibold underline decoration-1 decoration-primary/50 ml-1">
              {item.highlight}
            </span>
          )}
        </p>
      </motion.div>

      {/* Nested Sub-items */}
      {item.subItems && item.subItems.length > 0 && (
        <div className="ml-6 space-y-1.5">
          {item.subItems.map((subItem, subIdx) => (
            <motion.div
              key={subIdx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + (subIdx + 1) * 0.05 }}
              className="flex items-start gap-2 text-white/60 text-xs md:text-sm"
            >
              <span className="text-primary/70 mt-0.5">└</span>
              <div className="flex items-center flex-wrap gap-1">
                {subItem.logo ? (
                  <LogoText logo={subItem.logo} text={subItem.highlight} />
                ) : (
                  <span className="text-white/80 font-medium">{subItem.highlight}</span>
                )}
                {subItem.description && (
                  <span className="text-white/50">- {subItem.description}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoBullet;
