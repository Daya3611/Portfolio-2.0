import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const exo = Exo({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayanand Gawade",
  description: "Portfolio of Dayanand Gawade - Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`edu-sa-hand-font antialiased bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
