const nextConfig = {
  // Emit a self-contained server bundle (.next/standalone) for a lean Docker image.
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/devicon@latest/icons/**',
      },
    ],
  },
};

export default nextConfig;
