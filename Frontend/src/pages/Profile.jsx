import React, { useState, useEffect, Fragment, useContext } from 'react'
import Card from '../components/Card';
import { FaUserCircle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';
import { context } from '../store/contest';




function Profile() {

    const [select, setSelect] = useState("watching");

    const { user } = useUser();

    const {userData} = useContext(context); 

    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/')
        }
    }, [user])

    return (
        <div>
            {/* banner */}
            <div className='h-fit bg-neutral-900 mb-6'>
                <div className='absolute h-90 flex items-center '>
                    <div className='flex ms-30 items-center gap-6'>
                        <img src={user?.imageUrl} alt="" className='h-40 rounded-full' />
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold text-4xl ms-0.5'>{user?.fullName}</h2>
                            <div className='flex gap-4'>
                                <span className='font-medium text-lg'>23 Followers</span>
                                <span className='font-medium text-lg'>17 Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className='h-90 w-full'
                    // src={anime?.bannerImage} 
                    alt=""
                />
            </div>
            {/* Main */}
            <div className='mt-16 mb-20'>
                {/* Button list */}
                <div className='flex justify-between px-30 mb-4 items-center'>
                    <div className='flex items-center gap-12'>
                        <span onClick={() => setSelect("watching")} className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer rounded-lg  ${select.watching ? 'bg-white/30' :'bg-none hover:bg-white/10'}`}>
                            <FaRegEye />
                            <span className='flex gap-1'>
                                Watching
                                <p>{userData?.watching?.length}</p>
                            </span>
                        </span>
                        <span onClick={() => setSelect("towatch")} className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer rounded-lg  ${select.towatch ? 'bg-white/30' :'bg-none hover:bg-white/10'}`}>
                            <FaRegBookmark />
                            <span className='flex gap-1'>
                                To Watched
                                <p>{userData?.towatch?.length}</p>
                            </span>
                        </span>
                        <span onClick={() => setSelect("watched")} className={`flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer rounded-lg  ${select.watched ? 'bg-white/30' :'bg-none hover:bg-white/10'}`}>
                            <FaCheck />
                            <span className='flex gap-1'>
                                Watched
                                <p>{userData?.watched?.length}</p>
                            </span>
                        </span>
                        <span className='flex items-center gap-2 px-3 py-1.5 hover:cursor-pointer rounded-lg hover:bg-white/10'>
                            <FaRegFolder />
                            <span className='flex gap-1'>
                                Collection
                                <p>{userData?.collections?.length}</p>
                            </span>
                        </span>
                    </div>
                    <div className='flex gap-12 items-center justify-center'>
                        <button className='flex items-center justify-center gap-2 border-2 px-3 py-1 rounded'>Sorted By<FaChevronDown /></button>
                        <button className='flex items-center justify-center gap-2 bg-white text-black py-1 px-3 rounded'><CiFilter className='font-bold' />Filter</button>
                    </div>
                </div>
                {/* data grid display */}
                <hr className='text-white/30 border-1' />
                <div className='mt-16'>
                    {/* Product grid */}
                    <div className="grid grid-cols-6 gap-x-6 gap-y-10 grid-flow-row w-full px-10">
                        {/* Your content */}
                        {userData[select]?.length > 0 && userData[select]?.map(({ id, title, averageScore, coverImage, episodes, format, seasonYear }, index) => (
                            <Fragment key={index}>
                                <Card id={id} title={title} averageScore={averageScore} coverImage={coverImage} episodes={episodes} format={format} seasonYear={seasonYear} />
                            </Fragment>

                        ))}
                    </div>
                </div>
                {/* <div className='mt-14 text-center'>
                    View More
                </div> */}
            </div>
        </div>
    )
}

export default Profile