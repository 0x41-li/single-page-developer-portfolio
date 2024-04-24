// Sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";

const App: React.FC = () => {
  return (
    <div className="h-[8000px] overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
