import React from 'react';
import './css/index.css';
import App from './App';
import NotFound from './components/ErrorPage/notFound';



import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";



render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
     
      </Routes>
    </BrowserRouter>,
    document.getElementById("app")
  );


