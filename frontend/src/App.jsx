import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import Menu from './component/Menu';
import { Routes, Route } from 'react-router-dom'
import Display from './component/Display';
import { Slider } from './component/Slider';
import Login from './component/Login';
import SideBar from './component/SideBar';
import All from './component/All';
import Overview from './component/Overview';
import axios from "axios";
const URL = "http://localhost:4000";

function App() {
  const [user, setUser] = useState(false);

  const [open, setOpen] = useState(false);

  const [bookmark, setBookmark] = useState({});


  useEffect(() => {
    // localStorage.setItem("id","sa");  
    // localStorage.setItem("token","sda")
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      setUser(true);
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <Login URL={URL} user={user} setUser={setUser} open={open} setOpen={setOpen} />
      <div className='bg-black text-white h-full select-none'>
        <Navbar user={user} setUser={setUser} setOpen={setOpen} />
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/anime' element={<All bookmark={bookmark} setBookmark={setBookmark} />} />
          <Route path='/anime/:id' element={<Overview />} />
          <Route path={"/profile/*"} element={<SideBar user={user} setUser={setUser} />} />
        </Routes>
      </div>
    </>
  )
}
export default App