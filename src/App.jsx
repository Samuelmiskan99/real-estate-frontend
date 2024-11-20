import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/Pages/AboutPage';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';
import Testimony from './components/Pages/Testimony';

const App = () => {
   return (
      <>
         <div className='w-full overflow-hidden'>
            <Header />
            <AboutPage />
            <Projects />
            <Testimony />
            <Contact />
            <Footer />
         </div>
      </>
   );
};

export default App;
