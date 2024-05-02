// Sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

const App: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
