import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from './Schema';
const Form = () => {

  const {values ,errors, touched, handleBlur  , handleChange , handleSubmit} = useFormik({
    initialValues: {
        name:"",
        email:"",
        password:'',
        mobile:'',

    },
    validationSchema : basicSchema

  });
  console.log(errors);

  return (
    <div className='bg-white w-[35rem] h-[40rem] rounded-md text-black'>

            <div className='font-semibold text-[2rem] pt-4'>
                Get Started
            </div>

            <form className='text-[.9rem]'>
              <div className='relative mt-[2rem]'>
              <input placeholder=' ' value={values.name} onBlur={handleBlur} onChange={handleChange} type='text' id='name' className={`w-[25rem] h-[3rem] p-5 bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full ${errors.name && touched.name &&  "border-red-600 placeholder-shown:border-red-600"}`}></input>
              <label htmlFor='name' className='absolute bg-white top-[-.77rem] scale-[85%] text-black left-[6.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              '>NAME</label>
              <p className='pt-1 text-red-600'>{errors?.name}</p>
              </div>


              
              <div className='relative mt-[2rem]'>
              <input placeholder=' ' value={values.email} onBlur={handleBlur} onChange={handleChange} type='text' id='email' className={`w-[25rem] h-[3rem] p-5 bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full ${errors.email && touched.email &&  "border-red-600 placeholder-shown:border-red-600"}`}></input>
              <label htmlFor='email' className='absolute bg-white top-[-.77rem] scale-[85%] text-black left-[6.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              '>EMAIL</label>
              <p className='pt-1 text-red-600'>{errors?.email}</p>
              </div>


              
              <div className='relative mt-[2rem]'>
              <input placeholder=' ' value={values.password} onBlur={handleBlur} onChange={handleChange} type='password' id='password' className={`w-[25rem] h-[3rem] p-5 bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full ${errors.password && touched.password &&  "border-red-600 placeholder-shown:border-red-600"}`}></input>
              <label htmlFor='password' className='absolute bg-white top-[-.77rem] scale-[85%] text-black left-[6.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              '>PASSWORD</label>
              <p className='pt-1 text-red-600'>{errors?.password}</p>
              </div>


              
              <div className='relative mt-[2rem]'>
              <input placeholder=' ' value={values.mobile} onBlur={handleBlur} onChange={handleChange} type='text' id='mobile' className={`w-[25rem] h-[3rem] p-5 pl-[4rem] bg-gray-50 peer border-black placeholder-shown:border-gray ${errors.mobile && touched.mobile &&  "border-red-600 placeholder-shown:border-red-600"}-200 border rounded-full`}></input>
              <label htmlFor='mobile' className='absolute bg-white top-[-.77rem] scale-[85%] text-black left-[6.28rem]  cursor-text ease-in-out
                peer-focus:text-black peer-placeholder-shown:text-gray-400  peer-focus:bg-white
              '>MOBILE</label>
              <label htmlFor='mobile' className='absolute bg-white top-[.82rem] text-black left-[6.28rem]  cursor-text ease-in-out
              '>+977 </label>
              <p className='pt-1 text-red-600'>{errors?.mobile}</p>
              </div>

              <button type='submit' className='mt-[2rem] w-[25rem] bg-[#ff4a26] hover:bg-[#d33920] rounded-full text-white' onClick={()=>handleSubmit} >REGISTER NOW</button>
              
              <div className='mt-[2rem]'>
              <p>
                ALREADY REGISTERED ? 
                <a className='text-[#ff4a26] hover:text-[#d33920] cursor-pointer'> LOGIN IN</a>
              </p>
              </div>

            </form>


    </div>
  )
}

export default Form