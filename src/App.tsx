// Sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const App: React.FC = () => {
  return (
    <div className="h-[8000px] overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
