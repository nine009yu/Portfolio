// import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'
import { div } from 'motion/react-client';

const experiences=[
    {
        company:'United Information Highway',
        date:'05/2025 - 08/2025',
        address:'Lat Yao, Chatuchak, Bangkok',
        responsibilities:[
            'Built automated workflows.',
            'Implemented an incident management system.',
            'Trained and fine-tuned language models.',
            'Automated reporting processes.'
        ]
    },
    {
        company:'Loft IT Company Limited',
        date:'03/2021 - 05/2021',
        address:'Kradangnga, BangKhonthi, SamutSongkhram',
        responsibilities:[
            'Performed on-site and remote troubleshooting for computer hardware and software issues.',
            'Installed, configured, and repaired various IT equipment, including printers, computers, and CCTV systems.',
            'Installed and configured over 50+ computers and CCTV systems for clients.'
        ]
    }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience,index)=>{
        return (
            <>
               <SingleExperience key={index} experience={experience}/>
               {index<1?(
                <motion.div
                variants={fadeIn('right',0.2)} 
                initial='hidden' 
                whileInView='show' 
                viewport={{once: false,amount:0.7}}
                >
                <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
                </motion.div>
                ):("")}
            </>
        )
      })}
    </div>
  )
}

export default AllExperience
