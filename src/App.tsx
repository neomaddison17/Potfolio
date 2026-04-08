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
import { SEO } from './components/SEO.tsx';

const pageSEO = {
  title: 'Neeraj Ram | Bangalore Product Manager – EV, SaaS & Growth Strategy',
  description:
    'Discover the portfolio of a Bangalore-based Product Manager driving EV infrastructure and SaaS adoption through user research, strategy, and product-led growth.',
  keywords:
    'Bangalore Product Manager, Bangalore PM, EV Product Strategy, SaaS Product Manager, Growth Strategy, User Research, Product Design, Bangalore, India',
};

export function App() {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-300 selection:bg-cyber-purple/30 selection:text-white">
      <SEO {...pageSEO} />
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
    </div>
  );
}
