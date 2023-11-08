import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideIcons = ({name , link, icon}) => {
    const location = useLocation().pathname
    const finalLink = "/users/"+ link
    
    
    
  return (

    <NavLink  className={`w-[100%] pl-5 mb-5 h-[3rem] `} to={link}>
    <div  className={`w-[90%] pl-2 md:pl-5 mb-5 h-[3rem] duration-150 bg-red-700 flex items-center rounded-sm hover:bg-gray-200 hover:text-black ${ location == finalLink && "bg-[#f3f3f3] text-black w-full rounded-r-none "}`}> 
      {icon}
        <div className=' pl-3 text-[.9rem] md:text-[1rem]'>
            {name}
        </div>
    </div>
    </NavLink>
  );
};

export default SideIcons;
