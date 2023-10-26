import React from 'react'
import { skillset,themecolor } from './userinfo'

const Skillset = () => {
  return (
    <>
     <div className='w-[100%] h-[400px]'>
    <div className='text-black w-[90%] h-[300px] m-auto flex-col mt-[30px]'>
        
        <div className='w-[100%] h-[100%] inline-grid grid-cols-3 md:grid-cols-6 gap-x-[20px] gap-y-[40px]'>
        {skillset.map((skill)=>{
            return(
                <>
                <div className='w-[100px] md:w-[140px] h-[100px] md:h-[140px] font-bold text-[14px] md:text-[20px] justify-around m-auto text-white rounded-md  flex items-center hover:border-[2px] hover:border-black hover:text-black hover:!bg-white hover:w-[110px] md:hover:w-[150px] shadow-xl shadow-black   hover:h-[110px] md:hover:h-[150px] md:hover:text-[25px] hover:text-[17px] cursor-pointer' style={{backgroundColor:themecolor}}><p className='!text-center'>{skill}</p></div>
                
                </>
            )
        })}
        </div>

      
    </div>
    </div>
    <hr className='w-[90%] h-[3px] bg-[#d0d0d0] mt-[0px]' />
    </>
  )
}

export default Skillset
