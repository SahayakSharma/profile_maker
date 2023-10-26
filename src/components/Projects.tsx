import React from 'react'
import Image from 'next/image'
import { themecolor,projects } from './userinfo'

const Projects = () => {
  return (
    <>
    <div className='w-[80%] mt-[50px] h-[900px] md:h-[450px] m-auto  flex flex-col text-black'>



      <div className='w-[100%] h-[10%] md:h-[30%] text-center text-[30px] md:text-[60px] font-bold' style={{color:themecolor}}>Projects</div>

      <div className='w-[100%] h-[90%] md:h-[70%] m-auto inline-grid grid-cols-1 md:grid-cols-4 gap-x-[20px] gap-y-[40px] overflow-y-scroll '>
        {projects.map((project)=>{
          return(
            <div key={project.key} className='w-[80%] m-auto  h-[300px] rounded-md flex-col  opacity-[80%] hover:opacity-[100%] hover:w-[82%] text-white shadow-black shadow-xl' style={{backgroundColor:themecolor}}>
              <div className='w-[80%] h-[50%] m-auto flex items-center'><Image src={project.link} alt='image here' width={100} height={100} className='w-[90%] h-[90%] m-auto rounded-md'/></div>
              <div className='w-[80%] h-[20%] m-auto  font-bold text-[16px] flex items-center'><p className='m-auto'>{project.name}</p></div>
              <div className='w-[80%] h-[20%] m-auto font-[500] text-[13px] text-center'><a href={project.github} className='m-auto text-center'>{project.description}</a></div>

            </div>
          )
        })}

      </div>


      
    </div>
    <hr className='w-[90%] h-[3px] bg-[#d0d0d0] mt-[120px]' />
    </>
  )
}

export default Projects
