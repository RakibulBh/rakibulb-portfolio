import type { Metadata } from "next";
import "./globals.css";

import { Inter, Space_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Rakibul's Devfolio",
  description: "Find more about Rakibul's developer journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${spaceMono.variable} bg-background min-h-screen`}
      >
        <TooltipProvider>{children}</TooltipProvider>
        <script type="module">
          import mermaid from
          &apos;https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs&apos;;
        </script>
      </body>
    </html>
  );
}
