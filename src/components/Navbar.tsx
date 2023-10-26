"use client"
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { themecolor } from './userinfo';

const Navbar = () => {

    const [display,setdisplay]=useState("none")

    const handledisplay=()=>{
        if(display=="none"){
            setdisplay("block")
        }
        else{
            setdisplay("none")
        }
    }

  return (
    <>
    <div className='text-[#000000] w-[100%] h-[70px] border-[4px] flex justify-between '>

        <div className='w-[50%] h-[100%]'></div>
        <div className='w-[50%] h-[100%] flex justify-end items-center mr-[15px] md:mr-[30px]' style={{color:themecolor}}>
            <div className='px-[27px] text-[20px] hidden md:block cursor-pointer hover:border-2 hover:border-black rounded-md'>Home</div>
            <div className='px-[27px] text-[20px] hidden md:block cursor-pointer hover:border-2 hover:border-black rounded-md'>About</div>
            <div className='px-[27px] text-[20px] hidden md:block cursor-pointer hover:border-2 hover:border-black rounded-md'>Contact</div>
            <div className='px-[27px] text-[20px] hidden md:block cursor-pointer hover:border-2 hover:border-black rounded-md'>Profile</div>
            <div className='cursor-pointer px-[7px] text-[13px] md:hidden' onClick={handledisplay}><FaBars   /></div>
        </div>
        
        

       
      
    </div>
    <div className='relative w-[100%] text-black bg-[#c9c9c9] h-[200px] font-[13px] text-[15px] md:!hidden' style={{display:display}}>
    <div className=' w-[100%] h-[100%] flex flex-col items-center justify-around text-center' style={{color:themecolor}}>
    <h3 className='cursor-pointer'>Home</h3>
    <h3 className='cursor-pointer'>About</h3>
    <h3 className='cursor-pointer'>Contact</h3>
    <h3 className='cursor-pointer'>Profile</h3>
    </div>
    </div>
    </>
  )
}

export default Navbar
