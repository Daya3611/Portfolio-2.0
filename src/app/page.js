import { Divide, Layout } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Fotter from "./components/Fotter";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div>
      <div class=" inset-0 top-0 -z-10 h-full w-full dark:bg-black bg-white flex items-center justify-center"><div class="h-[300px] absolute top-0 right-0 w-[300px] rounded-full bg-blue-500 opacity-25 dark:opacity-40 dark blur-[100px]"></div><div class="h-[300px] absolute bottom-0 left-0 w-[300px] rounded-full bg-purple-500 opacity-25 dark:opacity-40 blur-[100px]"></div></div>
      <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      <Header />
      <Hero />
      <Projects />
      <Fotter />
      </ThemeProvider>
    </div>
    
  );
}
