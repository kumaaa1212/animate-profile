import Head from 'next/head'
import React from 'react'
import Anitation from './component/Anitation'
import Layout from './component/Layout'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface FeatureProjectProps{
  type:string;
  title:string;
  summary:string;
  img:string;
  link:string;
  github:string;
}
interface ProjectSiteProps{
  type:string;
  title:string;
  img:string;
  link:string;
  github:string;
}
const FramerMotionImg = motion(Image)
const FeatureProject = ({type,title,summary,img,link,github}:FeatureProjectProps) => {
  return(
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'>
      <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerMotionImg src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>
          {type}
        </span>
        <Link href={link} className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
      </Link>
      <p className='my-2 font-medium text-dark'>{summary}</p>
      <div className='mt-2 flex items-center'>
        <Link href={github} target='_blank' className='w-10'>githubaikonn</Link>
        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>view</Link>
      </div>
      </div>
      </div>
    </article>
  )
}
const ProjectSite = ({type,title,img,link,github}:ProjectSiteProps) =>{
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border-solid border-dark bg-light p-6 relative'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'>
        <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerMotionImg src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}}/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>
          {type}
        </span>
        <Link href={link} className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
      </Link>
      <div className='w-full mt-2 flex items-center justify-between'>
      <Link href={link} target='_blank' className='text-lg font-semibold underline'>view</Link>
        <Link href={github} target='_blank' className='w-8'>githubaikonn</Link>
      </div>
      </div>
      </div>
    </article>
  )
}
const Project = () => {
  return (
    <>
       <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='mb-16'>
      <Anitation text="Blog" className='mb-16' />
      <div className='grid grid-cols-12 gap-24 gpa-y-32'>
        <div className='col-span-12'>
          <FeatureProject type={''} title={''} summary={''} img={''} link={''} github={''}/>
        </div>
        <div className='col-span-6'>
          <ProjectSite type={''} title={''} img={''} link={''} github={''}/>
        </div>
        <div className='col-span-6'>
        <ProjectSite type={''} title={''} img={''} link={''} github={''}/>
        </div>
      </div>
        </Layout>
      </main>
    </>
  )
}

export default Project
