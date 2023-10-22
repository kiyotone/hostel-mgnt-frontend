import React from 'react'
import Card from '../../components/Card'

const Featured = () => {
    const featuredData =[
        {
            "name":"Kirtan",
            "loaction" : "Whatever",
            "price" : "10000"    
        },
        {
            "name":"Kirtan",
            "loaction" : "Whatever",
            "price" : "10000"    
        },
        {
            "name":"Kirtan",
            "loaction" : "Whatever",
            "price" : "10000"    
        },
        {
            "name":"Kirtan",
            "loaction" : "Whatever",
            "price" : "10000"    
        },
    ]
  return (
    

        <div className='ml-20 mt-10 w-[85rem] flex justify-between'>

        {  featuredData &&
        featuredData.map((data)=>{
            return (
                <Card name={data.name} location={data.loaction} price={data.price}/>
                
                
                )
            })
        } 
        </div>

  )
}

export default Featured