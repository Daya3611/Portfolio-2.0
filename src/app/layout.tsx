import type { Metadata } from "next";
import { Exo,} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        className={`${exo.variable} antialiased bg-black`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
