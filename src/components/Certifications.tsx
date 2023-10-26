import React from 'react'
import { certifications,themecolor } from './userinfo'

const Certifications = () => {
  return (
    <>
    <div className='w-[80%] h-[500px] flex m-auto  mt-[50px] text-black flex-col'>
      <div className='w-[100%] h-[30%] md:h-[40%]'><p className='text-center pt-[40px] text-[35px] md:text-[50px] font-[500] md:font-bold' style={{color:themecolor}}>Certifications</p></div>
      <div className='w-[100%] h-[70%] md:h-[60%]  inline-grid grid-cols-1 md:grid-cols-3 overflow-y-scroll '>
        {certifications.map((item)=>{
          return(
            <div key={item.key} className='w-[80%] h-[100px]  border-[2px] mb-[20px] md:mb-[40px] mx-auto flex shadow-md rounded-xl overflow-hidden shadow-black'>
              <div className='w-[35%] h-[100%] flex items-center text-white ' style={{backgroundColor:themecolor}}><p className=' m-auto text-[25px] font-bold'>{item.key}</p></div>
              <div className='w-[65%] h-[100%]'>
              <div className='w-[80%] h-[25%] m-auto overflow-hidden pt-[5px] text-[14px] font-bold'>{item.name}</div>
              <div className='w-[80%] h-[25%] m-auto overflow-hidden pt-[5px] text-[12px] font-[500]' >{item.authority}</div>
              <div className='w-[80%] h-[25%] m-auto overflow-hidden pt-[5px] text-[12px] font-[500]'>Date : {item.date}</div>
              <div className='w-[80%] h-[25%] m-auto overflow-hidden  text-[12px] font-[500] text-[#3f64a5]'><a href={item.link}>View Certificate</a></div>
              </div>
              

            </div>
          )
        })}

        

      </div>
      
    </div>
    <hr className='w-[90%] h-[3px] bg-[#d0d0d0] mt-[150px]' />

    </>
  )
}

export default Certifications
