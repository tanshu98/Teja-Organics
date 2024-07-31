import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/Home/Sign Up/SignUp';
import Login from './components/Home/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      {/* <Route path='/sign-up' element={<SignUpPractice />} /> */}
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
