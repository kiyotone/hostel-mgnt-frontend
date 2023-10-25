import React from 'react'

const Search = ({version}) => {
  return (
    <div  className={`mt-5 w-[72rem]  ${version==="big" ? " scale-100 " : " scale-[90%] w-[62rem] " } h-[3rem]  flex float-right rounded-md`}>
        
        <input type="text" className={` bg-white ${version==="big" ? " w-[60rem] " : " w-[52rem]" } rounded-l-md h-[3rem] border-[.1rem] border-gray-600`} />
        <button className='rounded-none w-[12rem] bg-[#1ab94f] text-white text-[1.4rem] h-full hover:bg-green-700 border-[.1rem] border-gray-600'>Search</button>

    </div>
  )
}

export default Search