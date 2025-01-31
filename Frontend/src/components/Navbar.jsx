import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import axios from "axios";

function Navbar() {

    const { openSignIn } = useClerk();
    const { user } = useUser();

    const navigate = useNavigate();


    return (
        <div className='bg-black/60 w-full border-b-2 border-white/40 text-white flex items-center px-20 gap-10 justify-between py-4'>
            {/* logo */}
            <div>
                <h1 className='text-3xl font-bold hover:cursor-pointer' onClick={() => navigate('/')} >Kurosaw</h1>
            </div>

            {/* Nav items */}
            <nav>
                <ul className='flex gap-10'>
                    <li><Link to='/' >Home</Link> </li>
                    <li><Link to='/catalog' >Catalog</Link> </li>
                    <li><Link to='/profile' >Profile</Link> </li>
                    <li><Link to='/collection' >Collection</Link> </li>
                </ul>
            </nav>

            {/* search bar */}
            {/* <div className='flex items-center outline-2 py-2 rounded-full px-5 '>
                <CiSearch />
                <input type="text" className='ms-2 focus-visible:outline-none w-60' placeholder='Search' />
            </div> */}

            {/* login and get started */}
            <div className=''>
                {user
                    ?
                    <div className='flex gap-8 items-center'>
                        <span className='font-medium flex items-center gap-2 hover:cursor-pointer'>
                            My Library
                            <FaCaretDown />
                        </span>
                        <span className='aspect-square rounded-full hover:cursor-pointer'>
                            <UserButton />
                        </span>
                    </div>
                    :
                    <div className='flex gap-6 items-center'>
                        <button onClick={e => openSignIn()} className='border-white border-2 py-1 px-3 rounded hover:cursor-pointer'>Login</button>
                        <button className='py-1 px-3 rounded bg-white text-black hover:cursor-pointer'>Get Started</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar