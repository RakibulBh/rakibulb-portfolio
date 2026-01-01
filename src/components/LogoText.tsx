import Image from "next/image";
import Link from "next/link";

type LogoTextProps = {
  logo: string;
  text: string;
  link?: string;
};

const LogoText = ({ logo, text, link }: LogoTextProps) => {
  const content = (
    <span className="inline-flex items-center gap-1.5 text-white font-semibold underline decoration-1 decoration-primary/50 hover:decoration-primary transition-colors align-middle ml-1">
      <Image
        src={logo}
        alt={text}
        width={16}
        height={16}
        className="w-4 h-4 object-contain flex-shrink-0"
      />
      <span>{text}</span>
    </span>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex ml-1">
        {content}
      </Link>
    );
  }

  return content;
};

export default LogoText;
