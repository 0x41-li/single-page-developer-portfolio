// Sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

const App: React.FC = () => {
  return (
    <div className="h-[8000px] overflow-hidden">
      <Header />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
