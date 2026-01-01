export type Experience = {
  date: string;
  company: string;
  role: string;
  image: string; // image name in the public directory
  bullets: string[];
};

// Valid parameters to show for education
export type Education = {
  date: string;
  school: string;
  degree: string;
  fieldOfStudy?: string;
  grades?: string;
  honors?: string[];
  coursework?: string[];
  image: string;
};

export const WORK_EXPERIENCES: Experience[] = [
  {
    role: "Placement Software Engineer",
    company: "SquaredUp",
    date: "Sep 2025 - Sep 2026",
    image: "squared-up.jpg",
    bullets: ["N/A", "N/A", "N/A"],
  },
  {
    role: "Software Developer",
    company: "Brunel Talent Marketplace",
    date: "Nov 2024 - Present",
    image: "btm.jpeg",
    bullets: [
      "Collaborated in a scrum environment to drive project deliverables, taking part in sprint planning and daily stand-ups.",
      "Architected university software systems while seamlessly adapting to varied codebases and tech stacks.",
      "Involved in the development of full-stack projects for various clients through BTM consulting, delivering high-quality software within established timelines.",
    ],
  },
  {
    role: "Coding Lead Tutor",
    company: "Code Camp",
    date: "Sep 2024 - Dec 2024",
    image: "codecamp.png",
    bullets: [
      "Teaching groups of up to 20 children collaborating and communicating with other teaching staff, following lesson plans, and coordinating with each other to work efficiently.",
      "Tutored individual children on debugging procedures and thinking computationally when solving problems.",
      "Teaching children essential programming concepts like loops, functions, and conditionals as well as game development.",
    ],
  },
  {
    role: "IT Technician",
    company: "Mercedes AMG F1 Team",
    date: "Jul 2022 - Jul 2022",
    image: "mercedes.jpg",
    bullets: [
      "Diagnosed technical issues occurring within the team, this included issues within the SAP software or setting up computer hardware and peripherals.",
      "Collaborated with IT professionals to set up environments for new upcoming employees.",
      "Attended daily team meetings with members from every department understanding how a large team works together to develop strategies and plans for success in upcoming races.",
    ],
  },
];

export const EDUCATION_EXPERIENCES: Education[] = [
  {
    date: "2023 - 2027",
    school: "Brunel University London",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    grades: "Predicted First Class (1st)",
    coursework: [
      "Raspberry Pi Java Programming (A*)",
      "Software Development Group Project",
      "Networks assignment (A)",
    ],
    image: "brunel.jpg",
  },
  {
    date: "2021 - 2023",
    school: "Mulberry Academy Shoreditch",
    degree: "A-Levels",
    fieldOfStudy: "Computer Science, Mathematics, Physics",
    coursework: ["PyGame python game (A*)", "EPQ (A)"],
    grades: "A B D",
    honors: ["STEM Academy", "Excellence Award for Programming"],
    image: "mulberry.png",
  },
  {
    date: "2016 - 2021",
    school: "Bow School",
    degree: "GCSEs",
    grades: "11 GCSEs Grade 9-6 (A*-B)",
    image: "bow.jpeg",
  },
];
