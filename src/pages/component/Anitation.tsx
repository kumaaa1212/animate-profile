import React from 'react'
import {motion} from 'framer-motion'
interface AnitationProps {
  text:string;
  className:string;
}
const MotionH1 = {
  intial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.1,
    }
  }
}
const MotionSpan = {
  intial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}
const Anitation = ({text,className=''}:AnitationProps) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`inline-block w-full font-bold capitalize text-8xl ${className}`} variants={MotionH1} initial='intial' animate='animate'>
        {text.split(' ').map((word:string,index:number) => (
          <motion.span key={word+index} className='inline-block' variants={MotionSpan}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
      </div>
  )
}

export default Anitation