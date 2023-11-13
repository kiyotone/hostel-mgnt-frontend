import React, { useCallback, useEffect, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { BiUpload } from 'react-icons/bi'
import {IoTrashBinSharp} from 'react-icons/io5'
import { getData, postDataWithHeader } from '../../../services/axios.service'
import { useSelector } from 'react-redux'

const HostelImages = () => {
    const [files, setFiles] = useState([])
    const [upload,setUpload] = useState([]);
    const [rejected, setRejected] = useState([])
    

    const userId = useSelector((state)=>state.auth.userId);
    const token = useSelector((state)=>state.auth.token);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (acceptedFiles?.length) {
            console.log("accepted files", acceptedFiles);
    
            setUpload(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file => file.name)  // Update the state correctly
            ]);
            uploadHostelImages()
        }
        
        if (rejectedFiles?.length) {
            console.log("rejected files", rejectedFiles);
            setRejected(rejectedFiles);
        }

    }, []);
    

        const removeFile = (name) => {
            
            setFiles(files => files.filter(file=> file.name !== name ))
        }
        const getMyHostelImages = async () =>{
            const response = await getData(`/hostels`);
            
            if(response.success){
    
                response.hostels.map((hostel)=>{
    
                    if(hostel.name == "Roshan hostel house"){
                        console.log(hostel.images);                    
                        const images = hostel.images

                        setFiles([...images])
                        
                    }
                    
                })
                
                
            }
            // console.log(files)
    
        }
        
        const uploadHostelImages = async () => {
            console.log("ready to upload " ,upload)
            const data = {"files" : upload}
            console.log("UPLOADING  :" ,data)
            const response = await postDataWithHeader('hostels/add-images',data,token);
            if (response.success) {
                getMyHostelImages();
                console.log(files);
                setUpload([]);
              }
        }

        useEffect(()=>{
            getMyHostelImages();
            console.log(files)
        },[])

      const {getRootProps,getInputProps,isDragActive } = useDropzone({onDrop})

  return (
    <div>
        <div className=' font-semibold text-[2rem]'>
                Hostel Images
            </div>
            
            <div className='pt-10 md:pl-10 grid grid-cols-1 md:grid-cols-5 gap-y-4'>   

                {
                    files?.map((file)=>{
                        return (
                            <div key={file.name} className='relative    '>
                                    <IoTrashBinSharp key={file.name} className='absolute right-7 top-[.1rem] text-[1.3rem] cursor-pointer text-white ' onClick={()=>removeFile(file.name)}/>

                                    <img src={file.url} key={file.name} className='border-gray-200 text-gray-500 border-[.1rem] w-[12rem] h-[12rem] rounded-md' />

                            </div>
                        )
                    }
                    )
                }
                
                <div {...getRootProps({className:` border-gray-600 text-gray-600 border-dashed border-[.1rem] w-[12rem] h-[12rem] rounded-md flex flex-col items-center pt-[4rem] cursor-pointer`})} >
                    <input {...getInputProps()}  />
                        <BiUpload className='text-[2.5rem]'/>
                        <p >Click or Drag Your Image</p>

                    
                </div>

            
          </div>
    </div>
  )
}

export default HostelImages