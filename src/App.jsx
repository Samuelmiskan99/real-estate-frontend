import Header from './components/Header';
import AboutPage from './components/Pages/AboutPage';
import Projects from './components/Pages/Projects';

const App = () => {
   return (
      <>
         <div className='w-full overflow-hidden'>
            <Header />
            <AboutPage />
            <Projects />
         </div>
      </>
   );
};

export default App;
