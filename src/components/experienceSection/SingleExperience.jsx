// import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'

const SingleExperience = ({experience}) => {
  return (
    <motion.div 
    variants={fadeIn('right',0.2)} 
    initial='hidden' 
    whileInView='show' 
    viewport={{once: false,amount:0.7}}
    className='md:h-[350px] md:w-[500px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan text-3xl'>{experience.company}</p>
      <p className='text-orange text-2xl flex gap-2'><FaCalendarAlt className='text-xl'/>{experience.date}</p>
      <p className='text-lightGrey text-xl flex gap-2'><FaMapMarkerAlt/> {experience.address}</p>
      <ul className='list-disc mt-4 pl-4 text-white text-xl'>{experience.responsibilities.map((resp,index)=>{
        return <li key={index}>{resp}</li>
      })}
      </ul>
    </motion.div>
  )
}

export default SingleExperience
