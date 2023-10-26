import React from 'react'
import Image from 'next/image'
import { username,userprofession,projects,skillset,themecolor } from './userinfo'

const FirstSlide = () => {
  return (
    <>
    <div className='text-black w-[100%] h-[400px] flex item-center md:mt-[100px]'>

        <div className=' w-[80%] h-[90%] m-auto  flex flex-col md:flex-row'>
            <div className='w-[100%] h-[60%] md:h-[100%] md:w-[40%] flex items-center  '><Image src="/profile.jpg" alt='image here' width={250} height={250} className='opacity-[70%] md:w-[350px] md:h-[350px] w-[150px] h-[150px] m-auto rounded-full border-[2px] shadow-xl shadow-black' style={{border:`5px solid ${themecolor}`}}/></div>
            <div className='w-[100%] h-[40%] md:h-[100%] md:w-[60%] text-center flex flex-col'>
                
            <div className='w-[100%] h-[70%] md:pt-[70px]'><p className='text-[27px] md:text-[70px]  font-bold   pb-[5px] ' style={{color:themecolor}}> {username}</p><p className='text-[12px] md:text-[20px] opacity-[50%]'>{userprofession}</p></div>
            
            <div className='m-auto w-[25%] h-[30%]'> <button className=' md:mt-[0px] md:rounded-[40px] w-[100%] h-[100%] md:h-[50%] border-[2px] md:hover:border-[3px] rounded-[20px]  font-bold text-white md:text-[20px] hover:border-black hover:!bg-white hover:text-black' style={{backgroundColor:themecolor}}>Resume</button></div>

            </div>
           
        </div>
        
      
    </div>
    <hr className='w-[90%] h-[3px] bg-[#d0d0d0] mt-[90px]' />
    </>
  )
}

export default FirstSlide
