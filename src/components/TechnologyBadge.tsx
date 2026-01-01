import Image from "next/image";
import { Technology } from "@/data/techstack";
import { getDevIconUrl } from "@/utils/getDevIcon";

type TechnologyBadgeProps = {
  technology: {
    img: Technology;
    name: string;
  };
};

const TechnologyBadge = ({ technology }: TechnologyBadgeProps) => {
  const iconUrl = getDevIconUrl(technology.img);

  return (
    <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5 hover:bg-primary/20 transition-colors">
      <Image
        width={16}
        height={16}
        alt={technology.name}
        src={iconUrl}
        className="w-4 h-4"
        unoptimized // Required for external CDN images
      />
      <span className="text-primary/90 text-xs font-medium">{technology.name}</span>
    </div>
  );
};

export default TechnologyBadge;
