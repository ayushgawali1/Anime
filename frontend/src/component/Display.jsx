import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

function Display({URL}) {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const {pathname} = useLocation();

    const [list,setList] = useState([]);


    const getData = async () => {
        const responce = await axios.get(`${URL}/get${pathname}`)
        setList(responce.data);
        console.log(responce);
        
    }

    useEffect(() => {
        getData();
    },[pathname])
    
    return (
        <div>
            <div class="grid grid-cols-3 gap-y-10 gap-x-10 justify-center items-center justify-items-center px-20">
                {
                    arr.map(() => (
                        <div className=' w-fit'><Card /></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Display