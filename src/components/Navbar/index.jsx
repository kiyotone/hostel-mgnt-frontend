import React, { useState } from 'react'

import BottomNav from './BottomNav'

import NavTop from './NavTop'



const Navbar = () => {
  
  const [newNav,setNewNav] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 300) {
        setNewNav(true);
      } else {
        setNewNav(false);
      }
    
    });


  }

  return (

    <div className='w-full bg-[#d3174d] font-semibold text-[.9rem] text-black'>
        
        <NavTop newNav = {newNav}/>

        <BottomNav />        

    </div>
  )
}

export default Navbar