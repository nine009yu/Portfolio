// import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text'>
      <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' whileInView='show' viewport={{once: false,amount:0}} className='lg:text-4xl sm:text-xl uppercase text-cyan'>
        AI Engineer
      </motion.h2>
      <motion.h1 variants={fadeIn('right',0.4)} initial='hidden' whileInView='show' viewport={{once: false,amount:0}} className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>
        Peeranat Chottamrongkul
      </motion.h1>
      <p>
        
      </p>
    </div>
  )
}

export default HeroText
