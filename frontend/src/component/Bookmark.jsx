import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
import axios from "axios"

function Bookmark() {

    const [getBookmarkAnime,setGetBookmarkAnime] = useState([]);
    const arr = [1,2,3,4,5,6]

    const url = "https://anime-backend-7pi0.onrender.com";

    const getBookmark = async () => {
        const userId = localStorage.getItem("id");
        try {
            const responce = await axios.get(url+"/anime/get-bookmarkAnime",{params:{userId:userId}});
            console.log(responce);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBookmark();
    },[])

    return (
            <div className="bg-white w-4/5">
                <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 pt-10">
                    <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Bookmark</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pt-5">
                        {arr.map((product) => (
                            // <>
                            // <Card />
                            // </>
                            <div key={product.id} className="group relative bg-gray-100 rounded-lg border-t-md border-b-0">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200  lg:h-80">
                                    <img
                                        alt={"product.imageAlt"}
                                        src={"product.imageSrc"}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mx-auto border-t-2 border-black text-lg font-semibold text-center p-4">
                                    <div>
                                        <h3 className=" text-base text-gray-700">
                                            {/* <a href={product.href}> */}
                                            <Link to={`${"product._id"}`}><span aria-hidden="true" className="absolute  inset-0" /></Link>
                                            <div className={`absolute top-0 right-0 w-6 bg-red text-orange-700 "h-6" } z-10`}>
                                                <span className="absolute top-0 right-0  w-fit h-fit z-10" ><FaBookmark style={{ fontSize: "1.5em", color: "black" }} /></span>
                                            </div>
                                            {/* <span className="absolute top-0 right-8  w-fit h-fit z-10" ><FaHeart style={{ fontSize: "1.5em", color: "black" }} /></span> */}
                                            {"product.name"}
                                            {/* </a> */}
                                        </h3>
                                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                    </div>
                                    {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Bookmark