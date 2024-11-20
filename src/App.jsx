import Header from './components/Header';
import AboutPage from './components/Pages/AboutPage';

const App = () => {
   return (
      <>
         <div className='w-full overflow-hidden'>
            <Header />
            <AboutPage />
         </div>
      </>
   );
};

export default App;
