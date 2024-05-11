import { useEffect, useState } from 'react';

// Sections
import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';

const App: React.FC = () => {
  // Checking if the page is loaded
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setPageLoaded(true);
    });

    return () => {
      window.removeEventListener('load', () => {
        setPageLoaded(false);
      });
    };
  }, []);

  // Small animations for the loading indicator text
  const [loadingText, setLoadingText] = useState<string>('Loading');
  useEffect(() => {
    const id = setInterval(() => {
      setLoadingText((prev) => {
        if (prev.length >= 'Loading...'.length) {
          return 'Loading';
        }

        return prev + '.';
      });
    }, 300);

    return () => {
      setLoadingText('Loading');
      clearInterval(id);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <div
        className={`${pageLoaded ? 'hidden ' : ''}absolute left-0 top-0 flex h-screen w-screen
        items-center justify-center`}
      >
        <p className='text-8xl'>{loadingText}</p>
      </div>

      <div className={`${!pageLoaded && 'hidden'}`}>
        <Header pageLoaded={pageLoaded} />
        <Hero pageLoaded={pageLoaded}/>
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
