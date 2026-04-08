import { Particles } from './components/Particles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-300 selection:bg-cyber-purple/30 selection:text-white">
      <Particles />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>);

}