// import React from 'react'
// import {useLocation , NavLink} from 'react-router-dom';

// function Menu() {
//     const list = ["mov","animated-mov","anime","web","anime-mov"];
//     const {pathname} = useLocation();
    
//     return (
//         <div className='flex items-center justify-center mb-14'>
//             <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box px-10 py-3 gap-5">
//                 {list.map((item) => (
//                     <NavLink
//                         to={item} 
//                         className= {( ({isActive }) => isActive?'bg-[#a6adbb87] rounded-md':"")} ><li className='p-2 px-4 cursor-pointer hover:bg-[#a6adbb1a] rounded-md'>{item}</li></NavLink>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Menu