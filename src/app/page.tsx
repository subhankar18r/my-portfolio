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
      <main className="row-start-2 flex min-h-screen flex-col items-center justify-center px-4 pb-16 md:px-6">
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
