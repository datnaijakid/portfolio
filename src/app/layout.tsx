import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnpaul Akhator | Full-Stack Engineer & CS Student",
  description:
    "Portfolio of Johnpaul Akhator — Computer Science student at UPEI building human-centered full-stack systems, AI-powered applications, and robust web experiences.",
  keywords: [
    "Johnpaul Akhator",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science",
    "UPEI",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "AI Engineering",
  ],
  authors: [{ name: "Johnpaul Akhator", url: "https://github.com/datnaijakid" }],
  openGraph: {
    title: "Johnpaul Akhator | Full-Stack Engineer & CS Student",
    description:
      "Full-stack engineer crafting clean systems, AI tools, and dynamic web applications. Explore real deployed projects and system architectures.",
    url: "https://portfolio-sepia-three-69.vercel.app",
    siteName: "Johnpaul Akhator Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          background: "#08080c",
          color: "#e2e2f0",
          fontFamily: "'Inter', system-ui, sans-serif",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}