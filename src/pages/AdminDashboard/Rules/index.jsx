import React, { useEffect, useState } from 'react'
import {  addData, deleteDataAtParams, getData, getDataWithoutHeader, updateDataWithHeader } from '../../../services/axios.service'
import { BiEditAlt } from 'react-icons/bi'
import { LiaSave } from 'react-icons/lia'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useSelector } from 'react-redux'
import { errorToast, successToast } from '../../../services/toastify.service'


const Rules = () => {

    const userId = useSelector((state)=>state.auth.userId);
    const [hostelId,setHostelID] = useState("");
    const [submitType,setSubmitType] = useState("add");

    const [myRules,setmyRules] = useState([]);
    const [myRulesId,setmyRulesId] = useState("");
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = (id) => {
        handleOpen();
        setmyRulesId(id)
        setSubmitType("edit")
    }
    const handleOpenAdd = () => {
        handleOpen();
        setSubmitType("add")
    }

    const validationSchema = object().shape({
        rules: string().required("Email field is required"),
        });
    const initialValue = {
            rules: myRules,
            
          };



    const getMyHostel = async () =>{
            const response = await getData(`/hostels`);     
                   
            if(response.success){
    
                response.hostels.map((hostel)=>{
    
                    if(hostel.name == "Roshan hostel house"){
                        console.log("hostel ID ",hostel.id);                       
                        setHostelID(hostel.id)

                    }
                    
                })
                
                
            }
        }
    
    const getMyRule = async () => {
        
       
        const data = {
            "hostelId" : hostelId
        }
        console.log(data)
        const response = await addData(`rules/hostel`,data);           
        console.log(response)
            if(response.success){
    
                        setmyRules(response.rules)

                
            }
            console.log("rules " , myRules)

    }
    const handleSubmit = async (values) => {
        
        if(submitType == "add"){
            addHotelRules(values)
        }
        else{
            editHotelRules(values)
        }

    }

    const addHotelRules = async (values)=>{
        // console.log(values)
        
        const data =  {
            "title" : values.rules,
            "hostelId" : hostelId,
        }
        // console.log(data)
        

        const response = await addData('rules',data);
        // console.log(response);
        // console.log(myRules)
        getMyRule()
        successToast(response.message?response.message:"Data added")
        handleClose();
    }

    const editHotelRules = async (values)=>{
        // console.log(values)
        
        const data =  {
            "title" : values.rules,
            "hostelId" : hostelId,
        }
        console.log("edit" , data)
        getMyRule()
        

        const response = await updateDataWithHeader(`rules/${myRulesId}`,data);
        // console.log(response);
        // console.log(myRules)
        successToast(response.message?response.message:"Data added")
        handleClose();
    }

    const handleDelete = async (id) => {
            
        
        const data = {
            id : id,
        }
        // console.log(data)
        

        const response = await deleteDataAtParams('rules',data);
        
        // console.log(response);
        
        setmyRules(myRules => myRules.filter(myRules=>  myRules._id !== id ))

        successToast(response.message?response.message:"Data Removed")
        handleClose();
    }

   
    

    useEffect(()=>{

            getMyHostel()
            getMyRule();
            // getMyHostelRules();

    },[hostelId])



  return (

    <div>

            <div className=' font-semibold text-[2rem]'>
                Rules And Regulations
                
            </div>
                <div className='pt-10 pl-10'>


                        { myRules.length > 0  ? 
                            <div className=''>
                                <div className='text-[1.5rem] pb-6'>
                                Your Current Rules And Regulations :
                                </div>
                            
                            {myRules.map((rule)=>

                            <div className='pb-6' >
                                
                                <div className='flex gap-x-10'>
                                    <p className='w-[50rem] break-words	 border-[#3140b6] border-2 p-2'>
                                
                                    {rule.title}
                                
                                </p>
                                <div className='flex text-[2rem] gap-x-5'>
                                    <BiEditAlt className=' rounded-md cursor-pointer' onClick={()=>handleOpenEdit(rule._id)}/>
                                    <BsTrash className=' rounded-md cursor-pointer' onClick={()=>handleDelete(rule._id)}/>
                                    
                                </div>
                                    

                                </div>
                            </div>
                            )}

                            <button className='bg-[#3140b6] text-white p-2 rounded-md mt-10' onClick={handleOpenAdd}>Add New</button>
                        
                            </div>

                        :
                        <div>
                            
                            <div className='text-[1.5rem] pb-4'>
                                You Have No Rules And Regulations Set 
                            </div>
                            <button className='bg-[#3140b6] text-white p-2 rounded-md mt-10' onClick={handleOpenAdd}>Add New</button>                 
                            
                        </div>
                    
                        
                        }

                </div>
            
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                        }}
                    >
                        <Fade in={open}>
                        <Box className="w-[50rem] h-[40rem] bg-white rounded-md absolute left-[30%] top-[10%] p-10">
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            
                            >
                                {({ isSubmitting, setFieldValue }) => {
                                    return (
                                
                                    <Form className='py-2 flex flex-col items-center'>

                                        <label htmlFor='rules' className="text-[20px] font-semibold"> 
                                            Your Rules :
                                        </label>

                                        <textarea onChange={(e)=>setFieldValue("rules",e.target.value)} id="rules" name="rules" className="w-full border-2 border-gray-400 h-[28rem] px-4 my-4">
                                        </textarea>
                                        <ErrorMessage
                                            name="rules"
                                            id="rules"
                                            component="div"
                                            className="text-red-500 mt-1"
                                            />

                                        <button
                                                        type="submit"
                                                        className="text-gray-200  bg-green-700 hover:bg-green-500 p-3 text-x fw-fw-bolder w-[3.5rem] flex items-center rounded-md text-center "                                                        
                                                        
                                                        >
                                                        {isSubmitting ? 
                                                         <AiOutlineLoading3Quarters className=' text-[2rem]' />
                                                         : 
                                                         <LiaSave className=' text-[2rem]' />
                                                         
                                                         }
                                                    </button>
                                    </Form>
                                    
                                    );
                                }}
                        </Formik>


                        </Box>
                        </Fade>
                    </Modal>

    </div>
  )
}

export default Rules