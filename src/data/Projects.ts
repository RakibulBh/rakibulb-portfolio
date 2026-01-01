import { Technology } from './techstack';

export type ProjectType = {
  title: string;
  img?: string;
  video?: string;
  description: string;
  technologies: { img: Technology; name: string }[];
  url?: string;
  githubUrl?: string;
};

export const PROJECTS: ProjectType[] = [
  {
    title: 'Resistly',
    description:
      'An app to help people rewire their brains from bad habits and addictions. Built with OpenAI for intelligent habit tracking and intervention.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
      {
        img: 'github',
        name: 'GitHub CI/CD',
      },
    ],
    url: 'https://resistly.vercel.app/',
  },
  {
    title: 'MemorizePDF',
    description:
      'Summarizes lecture notes into quizzes by difficulty and creates memorable flashcards. Got 400 docs parsed in the first week. Built with Gemini LLM and Apache Tika OCR.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
      {
        img: 'github',
        name: 'GitHub CI/CD',
      },
    ],
    url: 'https://memorisepdf.pro',
    githubUrl: 'https://github.com/RakibulBh/memorisepdf',
  },
  {
    title: 'FIDO2 Auth',
    description:
      'Passwordless authentication system using FIDO2/WebAuthn standards. Built with microservices architecture for scalable, secure biometric and hardware key authentication.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
      {
        img: 'mongodb',
        name: 'MongoDB',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'react',
        name: 'React',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    githubUrl: 'https://github.com/RakibulBh/fido2-auth',
  },
  {
    title: 'Events REST API',
    description: 'A REST api to manage events',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
    ],
  },
  {
    title: 'Social App Backend',
    description: 'A complete backend for a social application',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
      },
    ],
  },
  {
    title: 'Habituate',
    description: 'A habit tracker with a rewards system.',
    technologies: [
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'mongodb',
        name: 'MongoDB',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
    ],
  },
  {
    title: 'Resumatch.ai',
    description: 'A resume tailor application',
    technologies: [
      {
        img: 'next',
        name: 'Next.js',
      },
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'mongodb',
        name: 'MongoDB',
      },
      {
        img: 's3',
        name: 'AWS S3',
      },
    ],
  },
  {
    title: 'Passenga',
    description: 'A mobile app for an Uber clone.',
    technologies: [
      {
        img: 'ts',
        name: 'TypeScript',
      },
      {
        img: 'react',
        name: 'React Native',
      },
      {
        img: 'tailwindcss',
        name: 'NativeWind',
      },
    ],
  },
  {
    title: 'JavaScript formatter',
    description: 'A python script that formats JS code',
    technologies: [
      {
        img: 'python',
        name: 'Python',
      },
    ],
  },
];
