import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Skills = ({ name, x, y ,link}: any) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full bg-dark text-white py-3 px-6 shadow-dark cursor-pointer absolute' whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }} viewport={{once:true}}>
      <Link href={`${link}`}>
      {name}
      </Link>
    </motion.div>
  )
}
const Skill = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>SKILL</h2>
      <div className='w-full h-screen relative flex items-center justify-center  bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full bg-dark text-white p-8 shadow-dark cursor-pointer' whileHover={{ scale: 1.05 }}>
          web
        </motion.div>
        <Skills name='HTML' x='-20vw' y='2vw'link='/'/>
        <Skills name='CSS' x='-5vw' y='-10vw' link='/'/>
        <Skills name='Tailwind CSS' x='20vw' y='6vw'link='/' />
        <Skills name='javascript' x='0vw' y='10vw' link='/'/>
        <Skills name='Typescript' x='0vw' y='17vw'link='/' />
        <Skills name='React' x='-20vw' y='-15vw' link='/'/>
        <Skills name='Next.js' x='15vw' y='-12vw'link='/' />
        <Skills name='Node.js' x='32vw' y='-5vw' link='/'/>
        <Skills name='GraphQL' x='-25vw' y='18vw'link='/' />
        <Skills name='Prisma' x='10vw' y='-20vw'link='/' />
        <Skills name='Tailwind CSS' x='20vw' y='18vw' />
      </div>
        <p className='text-4xl mt-8'>*Click to explore language-specific projects</p>
    </>
  )
}

export default Skill
