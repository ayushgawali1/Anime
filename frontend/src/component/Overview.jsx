import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { useState } from 'react';

function Overview() {

  const url = "http://localhost:4000";

  const [oneAnime,setOneAnime] = useState({});

  const { id } = useParams();

  const getOneAnime = async () => {
    const responce = await axios.get(url + "/anime/getone", {params: {id:id}});
    setOneAnime(responce.data);
  }

  useEffect(() => {
    getOneAnime();
  }, [])

  return (
    <>
      <div className='h-[calc(100vh-68px)] flex items-center justify-center '>
        <div className='flex gap-8 p-14 border-2 border-black rounded-lg'>
          <div className='pr-10 border-r-2 border-black flex gap-4'>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200  lg:h-80">
              <img
                alt={""}
                src={"https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div>
              <span className='text-black'><FaBookmark /></span>
              <p>icon</p>
            </div>
          </div>
          <div className='text-black'>
            <div className='font-medium'>
              <div><h2 className='text-xl font-bold'>{oneAnime.name}</h2></div>
              <div><p>writer</p></div>
              <div className='w-64 text-sm'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis nisi fuga! Quasi tempore vero temporibus totam in eaque numquam sit. Non repudiandae voluptatum iste cupiditate labore suscipit tempore consequatur?</p></div>
              <div><p>Language</p></div>
              <div><p>Ongoing</p></div>
              <div>
                <button className="btn btn-outline btn-warning">Add to Favourate</button>
                <button className="btn btn-outline btn-error"><FaBookmark />Add to Bookmark</button>
              </div>
              <button className="btn btn-active btn-primary mt-2">Add to list</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview