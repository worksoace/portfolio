import "./App.css";
import MouseTrail from "./components/MouseTrail";
import ThemeToggle from "./components/ThemeToggle";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MouseTrail />
      <div className="fixed top-6 right-8 z-50">
        <ThemeToggle />
      </div>
      <SocialSidebar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
