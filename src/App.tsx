import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/Sign Up/SignUp';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      {/* <Route path='/sign-up' element={<SignUpPractice />} /> */}
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
