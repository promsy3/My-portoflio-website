import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GithubSection from "@/components/sections/GithubSection";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
