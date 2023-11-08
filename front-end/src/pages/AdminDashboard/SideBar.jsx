import React from 'react'
import SideIcons from './SideIcons'
import { useSelector } from 'react-redux'

const SideBar = () => {
    
    const usetId = useSelector((state)=>state.auth.userId)
    const sideIcons = [
        {
            "name" : "HOME",
            "link" : "home"    
    } ,
        {
            "name" : "HOME",
            "link" : "home"    
    } 
    ]
  return (
    <div className='w-[20rem] h-screen sticky top-0 left-0 bg-black text-white flex items-center flex-col'>
        <div className='mt-10 text-3xl font-semibold'>DashBoard</div>
        
        <div className='mt-10 w-full flex flex-col items-center'>
            {
                sideIcons && sideIcons.map((e)=>{
                    return (

                        <SideIcons name={e.name} link={`${usetId}+${e.link}`}/>
                    )

                })
            }    
        
        </div>

    </div>
  )
}

export default SideBar