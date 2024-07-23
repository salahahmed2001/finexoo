import { Fragment, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import'./normalize.css'
import HomeComp from './Components/HomeComp';
import AboutComp from './Components/AboutComp';
import NavbarComp from './Components/NavbarComp';
import ServicesComp from './Components/ServicesComp';
import WhyUsComp from './Components/WhyUsComp';
import TeamComp from './Components/TeamComp';
import FooterComp from './Components/FooterComp';
import BtnBackComp from './Components/BtnBackComp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NotFound from './Components/NotFound';
function App() {
  useEffect(()=>{
    Aos.init();
  })
  return (
   <Fragment>
    <NavbarComp/>
    <Routes>
      <Route path='/finexoo' element={<HomeComp />} />
      <Route path='/About' element={<AboutComp />} />
      <Route path='/Services' element={<ServicesComp />} />
      <Route path='/WhyUs' element={<WhyUsComp />} />
      <Route path='/Team' element={<TeamComp />} />
      <Route path='/*' element={<NotFound />}  />
    </Routes>
    <FooterComp/>
    <BtnBackComp/>
   </Fragment>
  );
}

export default App;
