import React, { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


function Navbar({user , setUser , open , setOpen}) {

    const navigate = useNavigate();

    const list = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/anime'} >All</Link></li>
            <li><a>Contact</a></li>
            <li><a>Fav</a></li>
        </>
    )

    return (
        <div>
            <div className="navbar border-b-2 border-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>
                    <a onClick={() => navigate("/")} className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-x-2">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            {/* <FaHeart style={{ strokeWidth: 2 , fontSize: "1.2em" }} /> */}
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        {!user ? <button onClick={() => setOpen(true)} className="btn btn-outline btn-error">Login</button> :
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div onClick={() => navigate('/profile')} className="w-9 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" 
                                        />
                                    </div>
                                </div>
                                {/* <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={() => {setUser(false); localStorage.removeItem("token");localStorage.removeItem("id"); }} ><a>Logout</a></li>
                                </ul> */}
                            </>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar