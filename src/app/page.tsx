import BottumNav from "@/components/animation/BottumNav";
import { HeroParallaxDemo } from "@/components/animation/Test";
import { AnimatedTestimonialsDemo } from "@/components/animation/Testimonal";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-4 text-white">
     <div className="fixed top-4 left-0 right-0 z-50 md:px-[200px] px-4">
       <Navbar/>
     </div>
      <div className="mt-10">
        {/* <ScrollAnimation  /> */}
        
        <Hero />
        {/* <HeroParallaxDemo /> */}
        {/* <Projects/> */}
        {/* <AnimatedTestimonialsDemo /> */}
        {/* <BottumNav/> */}
      </div>


    </main>
  );
}
