import MainSection from './components/MainSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {Contact} from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testinomial';
import Resume from './components/Resume';
export default function Home() {
  return (
    <> 
      <MainSection />
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}   