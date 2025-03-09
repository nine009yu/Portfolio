import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'


const skills=[
    {
    skill:'HTML',
    icon: FaHtml5
    },
    {
    skill:'CSS',
    icon: FaCss3Alt
    },
    {
    skill:'JavaScript',
    icon: IoLogoJavascript
    },
    {
    skill:'PHP',
    icon: FaPhp
    },
    {
    skill:'ReactJS',
    icon: FaReact
    },
    {
    skill:'Vue',
    icon: IoLogoVue
    },
    {
    skill:'Java',
    icon: FaJava
    },
    {
    skill:'Python',
    icon: FaPython
    },
    {
    skill:'Flutter',
    icon: FaFlutter
    },
    {
    skill:'Mysql',
    icon: SiMysql
    },
    {
    skill:'Firebase',
    icon: SiFirebase
    },
    {
    skill:'Mongodb',
    icon: SiMongodb
    },
    
]

const AllsSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,index)=>{
        return <motion.div 
        variants={fadeIn('up',0.2)} 
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{once: false,amount:0.7}}
                    key={index} 
                    className='flex flex-col items-center'> 
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4'>{item.skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default AllsSkillsSM
