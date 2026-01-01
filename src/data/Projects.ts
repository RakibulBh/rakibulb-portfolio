import { Technology } from "./techstack";

export type ProjectType = {
  title: string;
  img?: string;
  description: string;
  technologies: { img: Technology; name: string }[];
};

export const PROJECTS: ProjectType[] = [
  {
    title: "Events REST API",
    description: "A REST api to manage events",
    technologies: [
      {
        img: "go",
        name: "Golang",
      },
    ],
  },
  {
    title: "Social App Backend",
    description: "A complete backend for a social application",
    technologies: [
      {
        img: "go",
        name: "Golang",
      },
    ],
  },
  {
    title: "Habituate",
    description: "A habit tracker with a rewards system.",
    technologies: [
      {
        img: "ts",
        name: "TypeScript",
      },
      {
        img: "next",
        name: "Next.js",
      },
      {
        img: "mongodb",
        name: "MongoDB",
      },
      {
        img: "tailwindcss",
        name: "TailwindCSS",
      },
    ],
  },
  {
    title: "Resumatch.ai",
    description: "A resume tailor application",
    technologies: [
      {
        img: "next",
        name: "Next.js",
      },
      {
        img: "ts",
        name: "TypeScript",
      },
      {
        img: "mongodb",
        name: "MongoDB",
      },
      {
        img: "s3",
        name: "AWS S3",
      },
    ],
  },
  {
    title: "Passenga",
    description: "A mobile app for an Uber clone.",
    technologies: [
      {
        img: "ts",
        name: "TypeScript",
      },
      {
        img: "react",
        name: "React Native",
      },
      {
        img: "tailwindcss",
        name: "NativeWind",
      },
    ],
  },
  {
    title: "JavaScript formatter",
    description: "A python script that formats JS code",
    technologies: [
      {
        img: "python",
        name: "Python",
      },
    ],
  },
];
