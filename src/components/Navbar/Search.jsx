import React from 'react'

const Search = () => {
  return (
    <div  className='mt-5 w-[72rem] flex bg-green-700 rounded-md'>
        
        <input type="text" className='w-[60rem] bg-white rounded-l-md h-[4rem]' />
        <button className='rounded-none w-[12rem] bg-[#1ab94f] text-white text-[1.4rem] hover:bg-green-700'>Search</button>

    </div>
  )
}

export default Search