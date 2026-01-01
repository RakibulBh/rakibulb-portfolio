import Image from "next/image";
import { Technology } from "@/data/techstack";

type TechnologyBadgeProps = {
  technology: {
    img: Technology;
    name: string;
  };
};

const TechnologyBadge = ({ technology }: TechnologyBadgeProps) => {
  return (
    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-2.5 py-1">
      <Image
        width={14}
        height={14}
        alt={technology.name}
        src={`/svgs/${technology.img}.svg`}
        className="w-3.5 h-3.5"
      />
      <span className="text-white/70 text-xs">{technology.name}</span>
    </div>
  );
};

export default TechnologyBadge;
