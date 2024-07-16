import { Divide, Layout } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Fotter />
    </div>
    
  );
}
