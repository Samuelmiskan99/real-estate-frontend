import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './components/Pages/ContactPage';
const App = () => {
   return (
      <>
         <div className='w-full overflow-hidden'>
            <Routes>
               <Route path='/' element={<Header />} />
               <Route path='/contact' element={<ContactPage />} />
            </Routes>
         </div>
      </>
   );
};

export default App;
