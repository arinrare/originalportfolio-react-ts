import React , { useEffect } from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Browse from './pages/browse/browse'; 
import Programming from './pages/programming/programming';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
import Web from './pages/web/web';
import ReactGA from 'react-ga';

const TrackingID = 'G-FKJK7PJ0VH';

function App() {
  
  ReactGA.initialize(TrackingID);
  
  useEffect(() => {
    document.title = "Portfolio of Michael Baggott"
  }, []);
    
    // <BrowserRouter basename="/portfolio/originalportfoilio-react-ts"> ** Goes in the BrowserRouter tag above the Routes tag
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/programming' element={<Programming />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/web' element={<Web />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
