import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { FaRegEye } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import axios from "axios"
import { context } from '../store/contest';


function AnimePage() {
    const { id } = useParams();

    const { userData } = useContext(context)

    const [anime, setAnime] = useState([]);

    const [green, setGreen] = useState({
        "towatch": false,
        "watched": false,
        "watching": false,
    });

    const fetchAnime = async () => {
        const query = `
          query ($id: Int , $search: String) {
            Media(id: $id , search: $search, type: ANIME) {
                id
                title {
                    english
                }
                bannerImage
                coverImage{
                    extraLarge
                }
                averageScore
                description
                format
                seasonYear
                episodes
                status
                season
                source
                genres
                duration
                meanScore
                startDate{
                    year
                    month
                    day
                }
                studios {
                    nodes {
                        id
                        name
                        isAnimationStudio
                    }
                }
                externalLinks {
                    url
                    site
                    type
                }
                trailer{
                    id
                    site
                    thumbnail
                }
            }
          }
        `;

        const variables = { id: id };

        try {
            const response = await fetch("https://graphql.anilist.co", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query,
                    variables,
                }),
            });

            const data = await response.json();


            if (data.errors) {
                console.log(data.errors);
            } else {
                setAnime(data.data.Media);
            }
        } catch (err) {
            console.log("Something went wrong. Please try again.");
        }
    };

    const handleClick = async (status) => {
        try {
            const responce = await axios.post("http://localhost:4000/user/addAnime", {
                id: userData._id,
                anime,
                status
            })
            if (responce.data) {
                setGreen((prev) => ({
                    ...prev,
                    [status]: true
                }))
            }
            else {
                setGreen((prev) => ({
                    ...prev,
                    [status]: false
                }))
            }

        } catch (error) {
            console.log("error in anime page func : handleClick");
        }

    }

    const handleGreen = () => {
        if (userData.watching) {
            (userData.watching?.map((item) => {
                if (item.id == id) {
                    setGreen((prev) => ({
                        ...prev,
                        "watching": true
                    }))
                }
            }))
        }
        if (userData.watched) {
            (userData.watched?.map((item) => {
                if (item.id == id) {
                    setGreen((prev) => ({
                        ...prev,
                        "watched": true
                    }))
                }
            }))
        }
        if (userData.towatch) {
            (userData.towatch?.map((item) => {
                if (item.id == id) {
                    setGreen((prev) => ({
                        ...prev,
                        "towatch": true
                    }))
                }
            }))
        }

    }

    const details = [
        ["Type", anime?.format],
        ["Episodes", anime.episodes],
        ["Genres", anime.genres?.map((item) => (item + ", "))],
        ["Aired", (anime?.startDate?.day + " " + anime?.startDate?.month + " " + anime?.startDate?.year) + " to Aug 30, 2021 Fix"],
        ["Status", anime.status],
        ["Season", anime.seasonYear],
        ["Studios", anime?.studios?.nodes?.map((item) => item.isAnimationStudio && (item.name + ", "))],
        ["Source", anime.source],
        ["Rating", "R-17+ Fix"],
        ["Duration", anime.duration + " min"]
    ];

    useEffect(() => {
        fetchAnime()
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        handleGreen()
    }, [userData])

    return (
        <div className=''>
            {/* banner */}
            <div className='h-fit bg-neutral-900 mb-6'>
                <div className='absolute h-90 w-full flex items-end justify-end'>
                    <a
                        style={{ color: 'black' }}
                        href={anime?.externalLinks?.filter(item => item.type === 'INFO').map(item => item.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex font-medium items-center justify-center gap-2 py-2 px-4 rounded-lg mb-4 mr-6 bg-white text-black '
                    >
                        <FaGlobe />Official Site
                    </a>
                    <a
                        style={{ color: 'black' }}
                        href={`https://youtu.be/${anime?.trailer?.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex font-medium items-center justify-center gap-2 py-2 px-4 rounded-lg mb-4 mr-6 bg-white text-black '
                    >
                        <FaCirclePlay />Watch Trailer
                    </a>
                </div>
                <img
                    className='h-90 w-full'
                    // src={anime?.bannerImage} 
                    alt=""
                />
            </div>
            {/* image and name  */}
            <div className='flex px-70 justify-center items-center'>
                <img
                    className='w-50 h-70 rounded'
                    // src={anime?.coverImage?.extraLarge} 
                    alt=""
                />
                <div className='ps-20 mt-auto flex flex-col gap-16 w-full mb-4'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-4xl font-bold'>{anime?.title?.english}</h1>
                        <span className='text-base font-medium flex items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            {(anime?.averageScore) / 10}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <button onClick={() => handleClick("watching")} className={`border-2 border-white py-2 px-4 rounded-lg flex items-center gap-2 ${green.watching ? 'text-green-600' : ''}`}><FaRegEye /> Watching</button>
                            <button onClick={() => handleClick("towatch")} className={`border-2 border-white py-2 px-4 rounded-lg flex items-center gap-2 ${green.towatch ? 'text-green-600' : ''}`}><FaRegBookmark />To Watched</button>
                            <button onClick={() => handleClick("watched")} className={`border-2 border-white py-2 px-4 rounded-lg flex items-center gap-2 ${green.watched ? 'text-green-600' : ''}`}><FaCheck />Watched</button>
                        </div>
                        <button className='border-2 py-2 px-4 rounded-lg flex items-center gap-2'><IoAdd />Add to collection</button>
                    </div>
                </div>
            </div>
            {/* other details */}
            <div className=' mt-16 mb-20'>
                <div className='flex px-30 gap-20 mb-2 items-center'>
                    <p className='font-medium text-lg'>Overview</p>
                    <p className='font-medium text-lg'>Relations</p>
                    <p className='font-medium text-lg'>Charater</p>
                    <p className='font-medium text-lg'>Staff</p>
                    <p className='font-medium text-lg'>Reviews</p>
                </div>
                <div className='px-5'>
                    <hr className='text-white/30 border-1' />
                </div>
                <div className='flex px-25 mt-20 gap-50'>
                    <div>
                        <h2 className='mb-6 font-bold text-3xl'>Details</h2>
                        <table>
                            <tbody>
                                {details.map((item) => (
                                    <tr>
                                        <td className='pe-6 pb-4 flex self-start pt-1'>{item[0]}</td>
                                        <td className='pb-4 w-34'>{item[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 className='mb-6 font-bold text-3xl'>Description</h2>
                        <div>
                            {anime.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimePage