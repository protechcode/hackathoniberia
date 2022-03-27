import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import Contact from './component/Contact';
import Aboutproject from './component/Aboutproject';
import Dondecomer from './component/Dondecomer';
import Dondedormir from './component/Dondedormir';
import Dondeducharse from './component/Dondeducharse';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<Aboutproject />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="comer" element={<Dondecomer />} />
      <Route path="dormir" element={<Dondedormir />} />
      <Route path="ducharse" element={<Dondeducharse />} />

    </Routes>



  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
