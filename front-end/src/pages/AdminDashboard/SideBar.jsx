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
            "name" : "Settings",
            "link" : "settings"    
    } 
    ]
  return (
    <div className='w-[20rem] h-screen left-0 fixed bg-red-700 text-white flex items-center flex-col'>
        <div className='mt-10 text-3xl font-semibold'>DashBoard</div>
        
        <div className='mt-10 w-full flex flex-col items-center'>
            {
                sideIcons && sideIcons.map((e)=>{
                    return (

                        <SideIcons name={e.name} link={`${usetId}/${e.link}`} key={e.name}/>
                    )

                })
            }    
        
        </div>

    </div>
  )
}

export default SideBar