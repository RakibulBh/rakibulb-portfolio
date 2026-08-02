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
    title: 'Triagely',
    img: '/projects/triagely.png',
    description:
      'An app to help people get started with tasks they find hard to start.',
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
    url: 'https://triagely.rakibulb.org/',
  },
  {
    title: 'Cravr',
    img: '/projects/cravr.jpg',
    description:
      'Find the food spots going viral on TikTok near you, ranked by how hard the internet is craving them. A location-based discovery app with a live map of trending places.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
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
        img: 'tailwindcss',
        name: 'TailwindCSS',
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
    url: 'https://cravr.rakibulb.org',
  },
  {
    title: 'Questo',
    img: '/projects/questo.png',
    description:
      'A JIRA-style goal tracker that breaks big goals into sub-goals with checklists. Completion cascades upward — finish the steps and the whole goal completes, with live progress at every level.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
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
        img: 'reactquery',
        name: 'TanStack Query',
      },
      {
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://questo.rakibulb.org',
  },
  {
    title: 'Hundoscore',
    img: '/projects/hundoscore.png',
    description:
      'A reverse habit tracker where every day starts at 100. An LLM weights each habit from the goal behind it, so missing the important ones costs more. Frozen daily history with trend charts.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
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
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://hundoscore.rakibulb.org',
  },
  {
    title: 'Kickpot',
    img: '/projects/kickpot.png',
    description:
      'A virtual-currency World Cup 2026 prediction game. Everyone starts with £5,000 of play money and bets on matches settled as pari-mutuel pools, competing on a live leaderboard.',
    technologies: [
      {
        img: 'go',
        name: 'Golang',
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
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://kickpot.rakibulb.org',
  },
  {
    title: 'Unmasked',
    img: '/projects/unmask.png',
    description:
      'An anonymous, real-time party chat game. Join under a random handle over WebSockets, report the sus messages, and at the end of each round the most-reported player gets unmasked.',
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
        img: 'tailwindcss',
        name: 'TailwindCSS',
      },
      {
        img: 'docker',
        name: 'Docker',
      },
    ],
    url: 'https://unmask.rakibulb.org',
  },
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
  {
    title: 'Media Stack',
    description:
      'A self-hosted homelab media stack orchestrating 30+ Dockerized services (Jellyfin, the *ARR suite, Traefik, Prometheus and Grafana) for automated media management, monitoring, and secure remote access.',
    technologies: [
      {
        img: 'docker',
        name: 'Docker',
      },
      {
        img: 'postgresql',
        name: 'PostgreSQL',
      },
    ],
  },
];
