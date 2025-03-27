
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllsSkillsSM from './AllsSkillsSM'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'

const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[370px] relative overflow-hidden'>
            <motion.div
            variants={fadeIn('down',0.2)} 
            initial='hidden' 
            whileInView='show' 
            viewport={{once: false,amount:0.7}}
            >
              <SkillsText/>
            </motion.div>
            <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
                <AllSkills/>
            </div>
            <div className='sm:block lg:hidden text-white'>
                <AllsSkillsSM/>
            </div>
        </div>
    </div>
  )
}

export default SkillsMain
