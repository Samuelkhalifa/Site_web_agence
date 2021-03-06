//IMPORT REACT SETTINGS
import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//IMPORT CSS
import './style.css'

//IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Studycase from './components/Studycase';

//IMPORT COMPONENTS
import Navbar from './components/Navbar';


const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />}>
          <Route path="/works/:id" element={<Studycase />}></Route>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
};




createRoot(document.getElementById('root')).render(<App />); 