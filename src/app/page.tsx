import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />

        <Experience />
        <Projects />
        <Achievements />
        {/* <Certifications /> */}
        <Services />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
