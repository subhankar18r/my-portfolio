import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col row-start-2 items-center sm:items-start px-5">
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
