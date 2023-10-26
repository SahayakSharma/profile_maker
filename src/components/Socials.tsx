import React from 'react'
import {FaGithubSquare,} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'
import {SiFreelancer} from 'react-icons/si'
import Image from 'next/image'

import { username ,links} from './userinfo'

const Socials = () => {
  return (
    <div className='w-[100%] bg-black h-[130px]'>
    <div className='w-[90%] h-[100%]  m-auto flex justify-between'>
        <div className='w-[40%] md:w-[25%] h-[100%] flex items-center justify-around'>
            <Image src="/profile.jpg" alt='image here' width={250} height={250} className='w-[30px] md:w-[70px] md:h-[70px] h-[30px] rounded-full'/>
            
            <p className='text-[12px] md:text-[23px] font-[500]'>{username}</p>
        </div>
        <div className='w-[40%] md:w-[20%] h-[100%] items-center flex justify-around'>
            <div className='w-[20%] h-[40%] flex items-center cursor-pointer'><a href={links.github}><FaGithubSquare className='w-[30px] h-[30px]'/></a></div>
            <div className='w-[20%] h-[40%] flex items-center cursor-pointer'><a href={links.linkedin}><AiOutlineLinkedin className='w-[35px] h-[35px]'/></a></div>
            <div className='w-[20%] h-[40%] flex items-center cursor-pointer'><a href={"mailto:"+links.email}><CgMail className='w-[35px] h-[35px]'/></a></div>
            <div className='w-[20%] h-[40%] flex items-center cursor-pointer'><a href={links.freelancer}><SiFreelancer className='w-[35px] h-[35px]'/></a></div>
        </div>
      
    </div>
    </div>
  )
}

export default Socials
