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
    
    <div className='flex justify-center items-center'>


        <div className=' mt-10  flex gap-10  mx-auto'>

        {  featuredData &&
        featuredData.map((data,index)=>{
            return (
                <Card key={index} name={data.name} location={data.loaction} price={data.price}/>
                
                
                )
            })
        } 
        </div>
        </div>

  )
}

export default Featured