import { Technology } from "@/data/techstack";

/**
 * Maps technology to devicon CDN URL
 * Using devicon's SVG format for better quality and Next.js optimization
 */
export const getDevIconUrl = (tech: Technology): string => {
  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

  const iconMap: Record<Technology, string> = {
    // Programming Languages
    go: `${baseUrl}/go/go-original.svg`,
    js: `${baseUrl}/javascript/javascript-original.svg`,
    ts: `${baseUrl}/typescript/typescript-original.svg`,
    python: `${baseUrl}/python/python-original.svg`,
    lua: `${baseUrl}/lua/lua-original.svg`,

    // Databases
    postgresql: `${baseUrl}/postgresql/postgresql-original.svg`,
    mysql: `${baseUrl}/mysql/mysql-original.svg`,
    mongodb: `${baseUrl}/mongodb/mongodb-original.svg`,
    supabase: `${baseUrl}/supabase/supabase-original.svg`,

    // Backend & Frameworks
    node: `${baseUrl}/nodejs/nodejs-original.svg`,
    express: `${baseUrl}/express/express-original.svg`,
    next: `${baseUrl}/nextjs/nextjs-original.svg`,
    ejs: `${baseUrl}/ejs/ejs-original.svg`,
    swagger: `${baseUrl}/swagger/swagger-original.svg`,
    postman: `${baseUrl}/postman/postman-original.svg`,

    // Frontend & Styling
    react: `${baseUrl}/react/react-original.svg`,
    vite: `${baseUrl}/vitejs/vitejs-original.svg`,
    tailwindcss: `${baseUrl}/tailwindcss/tailwindcss-original.svg`,
    reactquery: `${baseUrl}/react/react-original.svg`, // No specific icon, using React

    // DevOps & Cloud
    aws: `${baseUrl}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    ec2: `${baseUrl}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    ecs: `${baseUrl}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    s3: `${baseUrl}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    docker: `${baseUrl}/docker/docker-original.svg`,
    kubernetes: `${baseUrl}/kubernetes/kubernetes-original.svg`,

    // Package Managers & Tools
    npm: `${baseUrl}/npm/npm-original-wordmark.svg`,
    git: `${baseUrl}/git/git-original.svg`,
    github: `${baseUrl}/github/github-original.svg`,

    // Hosting & Authentication
    vercel: `${baseUrl}/vercel/vercel-original.svg`,
    clerk: `${baseUrl}/react/react-original.svg`, // No specific icon, using React as placeholder
  };

  return iconMap[tech];
};

/**
 * Gets a fallback color for the technology (used for missing icons)
 */
export const getTechColor = (tech: Technology): string => {
  const colorMap: Record<Technology, string> = {
    go: "#00ADD8",
    js: "#F7DF1E",
    ts: "#3178C6",
    python: "#3776AB",
    lua: "#2C2D72",
    postgresql: "#336791",
    mysql: "#4479A1",
    mongodb: "#47A248",
    supabase: "#3ECF8E",
    node: "#339933",
    express: "#000000",
    next: "#000000",
    ejs: "#B4CA65",
    swagger: "#85EA2D",
    postman: "#FF6C37",
    react: "#61DAFB",
    vite: "#646CFF",
    tailwindcss: "#06B6D4",
    reactquery: "#FF4154",
    aws: "#FF9900",
    ec2: "#FF9900",
    ecs: "#FF9900",
    s3: "#FF9900",
    docker: "#2496ED",
    kubernetes: "#326CE5",
    npm: "#CB3837",
    git: "#F05032",
    github: "#181717",
    vercel: "#000000",
    clerk: "#6C47FF",
  };

  return colorMap[tech];
};
