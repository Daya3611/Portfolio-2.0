import { Divide, Layout } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

import { ThemeProvider } from "next-themes";
import Section from "./components/Section";
import Fetuter from "./components/Fetuter";
import Bottumtext from "./components/bottumtext";
import Projects from "./components/projects";
// import An from './components/An';


export default function Home() {
  return (
    <div class="scroll-smooth" className="">
     
      
      
      <Hero />
      <Section/>
      <Projects/>
      <Fetuter/>
      
      {/* <Projects /> */}
      {/* <Fotter /> */}
      
      
    </div>
    
  );
}
