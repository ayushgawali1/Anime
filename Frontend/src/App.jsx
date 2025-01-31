import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from "./pages/Catalog";
import Footer from './components/Footer';
import ContextProvider from './store/contest';
import AnimePage from './pages/AnimePage';
import Profile from './pages/Profile';


function App() {
  return (
    <ContextProvider>
      <div className='bg-black text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>

  )
}

export default App