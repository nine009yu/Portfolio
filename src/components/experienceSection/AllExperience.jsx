import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'
import { div } from 'motion/react-client';

const experiences=[
    {
        company:'Computer Clinic',
        date:'03/2019 - 05/2019',
        address:'Tanud, DamnoenSaduak, Ratchaburi',
        responsibilities:[
            'Install Windows','Install the program','Printer repair','Assemble a computer'
        ]
    },
    {
        company:'Loft IT Company Limited',
        date:'03/2021 - 05/2021',
        address:'Kradangnga, BangKhonthi, SamutSongkhram',
        responsibilities:[
            'Install Windows','Install the program','Printer repair','Assemble a computer','On-site service','Install CCTV cameras'
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
