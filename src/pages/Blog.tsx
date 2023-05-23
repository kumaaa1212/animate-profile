import Head from 'next/head'
import React, { use, useRef } from 'react'
import Layout from './component/Layout'
import Anitation from './component/Anitation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
interface AllBlogProps{
  img:string;
  title:string;
  deta:string;
  link:string;
}
type ImageProps = Omit<AllBlogProps,'deta'>;
const FramerImg = motion(Image);
const MovingImage = ({title,img,link}:ImageProps) =>{
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null as any);
  function handleMouse(e:any){
    // console.log(e.pageX)
    imgRef.current.style.display = 'inline-block';
    x.set(e.pageX);
    y.set(-10);
  }
  function handleMouseLeave(e: any){
    // console.log(e.pageY);
    imgRef.current.style.display = 'inline-block';
    x.set(0);
    y.set(0);
  }
return(
  <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImg  whileInView={{opacity:1,transition:{duration:0.2}}} initial={{opacity:0}} style={{x:x,y:y}} ref={imgRef} src={img} alt={''} className='z-10 w-96 h-auto hidden absolute rounded-lg'/>
      </Link>
)
}

const AllBlogs = ({title,deta,link,img}:AllBlogProps) =>{
  return(
    <motion.li initial={{y:200}} whileInView={{y:0,transition:{duration:0.5,ease:'easeInOut'}}} viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
      <MovingImage title={title} img={img} link={link}/>
      <span className='text-primary font-semibold pl-4' >{deta}</span>
    </motion.li>
  )
}
const Blog = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <main className='w-full mb-16 flex-col imtes-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
        <Anitation text="Introduce myself" className="mb-16" />
        <ul>
          <AllBlogs img={''} title={''} deta={''} link={''}/>
        </ul>
        </Layout>
      </main>
    </>
  )
}

export default Blog;
