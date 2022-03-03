import React from 'react';
import './App.css';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Add from './pages/Add';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/book/:id' element={<Detail/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
