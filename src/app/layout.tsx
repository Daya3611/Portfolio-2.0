import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://dayanandgawade.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dayanand Gawade — Full-Stack & AI Developer",
    template: "%s | Dayanand Gawade",
  },
  description:
    "Full-Stack Developer and AI Engineer building premium web applications, SaaS products, and intelligent automation systems. Based in India, available worldwide.",
  keywords: [
    "Dayanand Gawade",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "SaaS Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Dayanand Gawade", url: siteUrl }],
  creator: "Dayanand Gawade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dayanand Gawade — Full-Stack & AI Developer",
    description:
      "Full-Stack Developer and AI Engineer building premium web applications, SaaS products, and intelligent automation systems.",
    siteName: "Dayanand Gawade Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Dayanand Gawade — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayanand Gawade — Full-Stack & AI Developer",
    description:
      "Full-Stack Developer and AI Engineer building premium web apps and SaaS products.",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/profile.ico",
    shortcut: "/profile.ico",
    apple: "/profile.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dayanand Gawade",
  url: siteUrl,
  image: `${siteUrl}/profile.jpeg`,
  description:
    "Full-Stack Developer and AI Engineer building premium web applications and SaaS products.",
  jobTitle: "Full-Stack Developer & AI Engineer",
  worksFor: { "@type": "Organization", name: "Independent" },
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  email: "hi@dayanandgawade.in",
  sameAs: [
    "https://github.com/Daya3611",
    "https://linkedin.com/in/dayanandgawade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
