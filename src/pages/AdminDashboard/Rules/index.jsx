import React, { useEffect, useState } from 'react'
import { getData } from '../../../services/axios.service'
import { BiEditAlt } from 'react-icons/bi'
import { LiaSave } from 'react-icons/lia'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ErrorMessage, Form, Formik } from 'formik';
import { object, string } from 'yup';



const Rules = () => {

    const [myHostel,setmyHostel] = useState("loremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsloremisalfkasdjfhaksfjbagklsdgjbaklasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsbk ljhfakldfhkahsdfakfhkasdhfk");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validationSchema = object().shape({
        rules: string().required("Email field is required"),
        });

    const getMyHostel = async () =>{
        const response = await getData(`/hostels`);
        console.log(response.hostels[0].name);
        if(response.success){

            response.hostels.map((hostel)=>{

                // console.log(hostel);

            })

        }

    }
    

    useEffect(()=>{

            getMyHostel();

    },[])



  return (
    <div>

            <div className=' font-semibold text-[2rem]'>
                Rules And Regulations
            </div>
                <div className='pt-10 pl-10'>

                    <div className='text-[1.5rem] pb-4'>
                        Your Current Rules And Regulations :
                    </div>
                    <div className='flex gap-x-10'>

                    <p className='w-[50rem] break-words	 border-[#3140b6] border-2 p-2'>
                    
                        {myHostel}
                    
                    </p>
                    <div className='flex text-[2rem] gap-x-5'>
                        <BiEditAlt className=' rounded-md cursor-pointer' onClick={handleOpen}/>

                        
                        
                    </div>
                    </div>
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
                            initialValues={myHostel}
                            validationSchema={validationSchema}
                            >
                                {({ isSubmitting }) => {
                                    return (
                                
                                    <Form className='py-2 flex flex-col items-center'>

                                        <label htmlFor='rules' className="text-[20px] font-semibold"> 
                                            Your Rules :
                                        </label>

                                        <textarea id="rules" name="rules" className="w-full border-2 border-gray-400 h-[28rem] px-4 my-4">
                                        </textarea>
                                        <ErrorMessage
                                            name="text"
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