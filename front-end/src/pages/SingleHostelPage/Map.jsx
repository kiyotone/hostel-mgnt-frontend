"use client"
import React from 'react'
import { GoogleMap , useLoadScript , MarkerF   } from '@react-google-maps/api'

const Map = () => {

    const MAP_API_KEY = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey : MAP_API_KEY
      })
  
  return (

    <div className=''>
        
        {
          isLoaded ?
         <div>
    
              <MapLoaded />
          </div>
          :
          <div>
            LOADINGGGG...........
           </div>
        }
        

    </div>
  )
}

function MapLoaded (){
  const markers = {lat:27.6974 , lng:85.3318, }
    const options = {
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };

  return (
        
        <GoogleMap zoom={20} center={{lat:27.6974 , lng:85.3318}} options={options} mapContainerClassName='w-full h-[40rem] rounded-md'>
        <MarkerF position={markers} />
    
      </GoogleMap>

  )
  
  }

export default Map