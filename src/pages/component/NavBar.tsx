import Link from 'next/link'
import React, { useRef } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
interface CustomLinkProps{
  title:string;
  href:string;
  className:string;
  toggle?: () => void;
}
const CustomLink = ({ title, href,className }:CustomLinkProps) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? `w-full`:`w-0`}`}>&nbsp;</span>
      {/* ``は{ }の中に入れる */}
    </Link>
  )
}
const CustomMobileLink = ({ title, href,className,toggle }:CustomLinkProps) => {
  const router = useRouter();
  const handleClicke = () => {
    toggle?.();
    router.push(href)
  }
  return (
    <Link href={href} className={`${className} relative group text-light my-2`} onClick={handleClicke}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? `w-full`:`w-0`}`}>&nbsp;</span>
      {/* ``は{ }の中に入れる */}
    </Link>
  )
}
const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative'>
      <button onClick={handleToggle} className='hidden lg:flex flex-col justify-center items-center'>
        <span className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
        <span className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' :'opacity-100'}`}></span>
        <span className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 translate-y-1':'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href='/' title='HOME' className='mr-4 '/>
        <CustomLink href='/About' title='ABOUT' className='mx-4'/>
        <CustomLink href='/Project' title='Project' className='mx-4'/>    
        <CustomLink href='/Blog' title='Blog' className='ml-4'/>
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='/' target={'_blank'} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <TwitterIcon className='text-2xl'/>
        </motion.a>
        <motion.a href='https://github.com/kumaaa1212' target={'_blank'}className='w-6 mx-3'  whileHover={{y:-2}}whileTap={{scale:0.9}}>
          <GithubIcon className={undefined}/>
        </motion.a>
        <motion.a href='/' target={'_blank'}className='w-6 mx-3'  whileHover={{y:-2}}whileTap={{scale:0.9}}>
          <PinterestIcon className={undefined}/>
        </motion.a>
        <motion.a href='/' target={'_blank'}className='w-6 ml-3'  whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <PinterestIcon className={undefined}/>
        </motion.a>
      </nav>
      </div>
      {isOpen ?  <motion.div className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32'>
      <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href='/' title='HOME' className=' ' toggle={handleToggle}/>
        <CustomMobileLink href='/About' title='ABOUT' className='' toggle={handleToggle}/>
        <CustomMobileLink href='/Project' title='Project' className='' toggle={handleToggle}/>    
        <CustomMobileLink href='/Blog'title='Blog' className='' toggle={handleToggle}/>
      </nav>
      <nav className='flex items-center justify-center flex-wrap mt-2'>
        <motion.a href='/' target={'_blank'} className='w-6 mx-3' whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <TwitterIcon className='text-2xl'/>
        </motion.a>
        <motion.a href='https://github.com/kumaaa1212' target={'_blank'}className='w-6 mx-3'  whileHover={{y:-2}}whileTap={{scale:0.9}}>
          <GithubIcon className={undefined}/>
        </motion.a>
        <motion.a href='/' target={'_blank'}className='w-6 mx-3'  whileHover={{y:-2}}whileTap={{scale:0.9}}>
          <PinterestIcon className={undefined}/>
        </motion.a>
        <motion.a href='/' target={'_blank'}className='w-6 ml-3'  whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <PinterestIcon className={undefined}/>
        </motion.a>
      </nav>
      </motion.div> :null}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
      {/* 一番最後に配置して、絶対は配置にする */}
    </header>
  )
}

export default NavBar
