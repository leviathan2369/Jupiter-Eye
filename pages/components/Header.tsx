import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose , AiFillInstagram } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


interface Props {
	title: string;
	href: string;
	toggle: any;
  className?: any;
  }



  const CustomLinkMobile = ({ href, title, className = "", toggle }: Props) => {
    const router = useRouter();
    const buttonRef = useRef(null); // Create a ref using useRef

    const handleClick = () => {
      toggle();
      router.push(href);
    };

    return (
      <button ref={buttonRef} onClick={handleClick} className={`${className} relative group my-2 `}>
        {title}
        {/* ...other code */}
      </button>
    );
  };

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <header className="w-full dark:text-colors-light lg:px-16 md:px-12 sm:p-8 px-32 z-10 py-8 font-medium bg-[#0E1129] flex items-center justify-between relative">

<button className=" flex-col justify-center items-center hidden lg:flex " onClick={handleClick}>
			<span className={`bg-slate-300 block h-1 w-5 rounded-sm ease-out transition-all ${isOpen ? 'transform rotate-45 translate-y-1 ' : 'transform translate-y-0.5'}`}></span>
			<span className={` bg-slate-300  block h-1 w-5 rounded-sm my-0.5 transition-all ease-out ${isOpen ? 'opacity-0': 'opacity-100' }`}></span>
			<span className={`bg-slate-300 block h-1 w-5 rounded-sm transition-all ease-out ${isOpen ? 'transform -rotate-45 -translate-y-1 ' : 'transform translate-y-0.5'}`}></span>
		  </button>



      <div className="flex-1 items-center justify-center sm:hidden md:hidden lg:hidden space-x-8 ">
        <Link href="/" legacyBehavior>
          <a className="headerLink ">Home</a>
        </Link>
        <Link href="/game" legacyBehavior>
          <a className="headerLink ">Game</a>
        </Link>
        <Link href="/events" legacyBehavior>
          <a className="headerLink ">Events</a>
        </Link>
        <Link href="/sell" legacyBehavior>
          <a className="headerLink ">Contact-Us</a>
        </Link>
        <Link href="/gallery" legacyBehavior>
          <a className="headerLink ">Gallery</a>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
      <Link href="https://www.instagram.com/jupitereyemag/?igshid=MzRlODBiNWFlZA%3D%3D">  <AiFillInstagram className="headerIcon md:hidden lg:hidden sm:hidden" /></Link></div>

      {isOpen ? <motion.div initial={{scale: 0, opacity:0 , x:'-50%' , y:'-50%'} }  animate={{opacity:1 , scale:1 }} className="  min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-colors-primary/90 dark:bg-colors-light/75 rounded-lg backdrop-blur-md py-32">
       <nav className=" flex  items-center sm:flex-col lg:space-x-5  justify-center text-pink-200 flex-wrap -mt-20 ">
    <CustomLinkMobile href="/" title="Home" className=" md:ml-5 "  toggle={ handleClick}  />
    <CustomLinkMobile href="/game" title="Game" className=" "  toggle={ handleClick}  />
    <CustomLinkMobile href="/events" title="Events" className=""  toggle={ handleClick}  />
          <CustomLinkMobile title="Gallery" href="/gallery" className=" " toggle={handleClick} />
          <CustomLinkMobile title="Shop" href="/shop" className=" " toggle={handleClick} />
          <CustomLinkMobile title="Contact-Us" href="/sell" className=" "  toggle={ handleClick}  />
          <CustomLinkMobile title="About-Us" href="/about" className=" "  toggle={ handleClick}  />

   </nav>

   <nav className="flex items-center mt-4  justify-center flex-wrap">
    <motion.a
     whileHover={{ y: -2 }}
     whileTap={{ scale: 0.9 }}
     className="w-6 mx-3 sm:mx-1 text-pink-200"
     href="https://www.linkedin.com/in/hamza-ben-el-hadi-8a4b411b4/"
     target={"_blank"}
    >
     <AiFillInstagram className='sm:ml-3' />
    </motion.a>
   </nav></motion.div> :null }

    </header>
  );
}

export default Header;
