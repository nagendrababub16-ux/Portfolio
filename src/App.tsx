import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { AskCopilot } from './components/layout/AskCopilot';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        
        <Footer />
        <AskCopilot />
      </div>
    </ThemeProvider>
  );
}

export default App;
