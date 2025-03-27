import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variant'

const projects=[
    {
    name:'Smart bottle recycling cabinet',
    year:'2024',
    align:'right',
    image:'/images/picproject.jpg',
    link:"/videos/videoproject.mp4"
    }
]
const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
      variants={fadeIn('up',0.2)} 
      initial='hidden' 
      whileInView='show' 
      viewport={{once: false,amount:0.7}}
      >
        <ProjectsText/>
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} align={item.align} year={item.year} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
