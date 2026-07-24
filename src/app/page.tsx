import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full relative">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
