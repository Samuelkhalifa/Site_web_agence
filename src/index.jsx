import React from 'react';
import {createRoot} from 'react-dom/client';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Home from './Home';
import About from './Home';
import Works from './Home';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  )
};




createRoot(document.getElementById('root')).render(<App />); 